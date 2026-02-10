import { useState, useEffect, useRef } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
  Timestamp,
  addDoc,
} from "firebase/firestore";
import { formatDistance } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Search,
  Filter,
  ArrowDown,
  X,
  Plus,
  XCircle,
  Image as ImageIcon,
} from "lucide-react";

// Dummy data for featured article
const featuredArticle = {
  id: "featured-1",
  title: "Advancements in Fertility Treatments: What You Need to Know",
  excerpt:
    "Explore the latest breakthroughs in fertility treatments and how they are changing lives. Learn about the most effective options available today.",
  image: "https://source.unsplash.com/1200x800/?fertility,treatment",
  tag: "Fertility",
  readTime: "8 min read",
  content: `In recent years, fertility treatments have seen remarkable advancements that have revolutionized reproductive medicine. From improved IVF techniques to cutting-edge genetic testing, couples facing fertility challenges now have more options than ever before.

One of the most significant breakthroughs has been the development of time-lapse embryo imaging, which allows embryologists to monitor embryo development in real-time without disturbing the delicate culture environment. This technology has significantly improved embryo selection and pregnancy success rates.

Another exciting development is the use of preimplantation genetic testing (PGT), which can screen embryos for genetic abnormalities before implantation. This not only increases the chances of a successful pregnancy but also reduces the risk of passing on genetic disorders.

For women with diminished ovarian reserve, new ovarian rejuvenation techniques are showing promise in improving egg quality and quantity. These minimally invasive procedures use platelet-rich plasma (PRP) or stem cells to potentially enhance ovarian function.

At Mount Carmel, we stay at the forefront of these advancements, offering our patients access to the latest evidence-based treatments in a supportive and compassionate environment. Our team of fertility specialists is dedicated to helping you build the family you've always dreamed of.`,
};

// Dummy data for blog posts
const dummyBlogs = [
  {
    id: "1",
    title: "Understanding IVF: A Step-by-Step Guide",
    excerpt:
      "Get a comprehensive overview of the IVF process, from initial consultation to embryo transfer.",
    image: "https://source.unsplash.com/600x400/?ivf,medical",
    tag: "IVF",
    readTime: "6 min read",
    content: "Detailed content about IVF process...",
  },
  {
    id: "2",
    title: "Nutrition for Fertility: Foods to Boost Your Chances",
    excerpt:
      "Discover the best foods to enhance fertility and improve your reproductive health naturally.",
    image: "https://source.unsplash.com/600x400/?fertility,food",
    tag: "Wellness",
    readTime: "5 min read",
    content: "Detailed content about nutrition...",
  },
  {
    id: "3",
    title: "Male Fertility: Common Myths Debunked",
    excerpt:
      "Separating fact from fiction when it comes to male fertility and reproductive health.",
    image: "https://source.unsplash.com/600x400/?men,health",
    tag: "Men's Health",
    readTime: "4 min read",
    content: "Detailed content about male fertility...",
  },
  {
    id: "4",
    title: "The Emotional Journey of Infertility",
    excerpt:
      "Navigating the emotional challenges of infertility and finding support along the way.",
    image: "https://source.unsplash.com/600x400/?support,care",
    tag: "Wellbeing",
    readTime: "7 min read",
    content: "Detailed content about emotional support...",
  },
  {
    id: "5",
    title: "Age and Fertility: What You Should Know",
    excerpt:
      "Understanding how age impacts fertility and what options are available at different life stages.",
    image: "https://source.unsplash.com/600x400/?age,clock",
    tag: "Fertility",
    readTime: "6 min read",
    content: "Detailed content about age and fertility...",
  },
  {
    id: "6",
    title: "Alternative Paths to Parenthood",
    excerpt:
      "Exploring options beyond traditional conception, including adoption and surrogacy.",
    image: "https://source.unsplash.com/600x400/?family,adoption",
    tag: "Family",
    readTime: "8 min read",
    content: "Detailed content about alternative paths...",
  },
];

function Blog() {
  const [blogs, setBlogs] = useState(dummyBlogs);
  const [dbBlogs, setDbBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    excerpt: "",
    image: "",
    tag: "Fertility",
    readTime: "",
    content: "",
    author: {
      name: "",
      title: "Content Writer",
      avatar: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [comments, setComments] = useState({});
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [activeTab, setActiveTab] = useState("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedTag, setSelectedTag] = useState("all");
  const [email, setEmail] = useState("");
  const postsPerPage = 6;

  // Track scroll position for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle new blog post submission
  const handleNewPostSubmit = async (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content || !newPost.author?.name) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    try {
      // Save to Firestore
      const post = {
        ...newPost,
        tags: [newPost.tag],
        date: new Date().toISOString(),
        timestamp: Timestamp.now(),
      };
      const docRef = await addDoc(collection(db, "blogs"), post);
      // Add to local state for instant feedback
      setDbBlogs((prev) => [{ id: docRef.id, ...post }, ...prev]);
      setNewPost({
        title: "",
        excerpt: "",
        image: "",
        tag: "Fertility",
        readTime: "",
        content: "",
        author: {
          name: "",
          title: "Content Writer",
          avatar: "",
        },
      });
      setShowNewPostModal(false);
      alert("Blog post created successfully!");
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  // Load blog posts from Firestore
  useEffect(() => {
    const q = query(collection(db, "blogs"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const posts = [];
      snapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
      });
      setDbBlogs(posts);
    });
    return () => unsubscribe();
  }, []);

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Add your newsletter subscription logic here
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  // Merge Firestore blogs and dummy blogs
  const allBlogs = [...dbBlogs, ...dummyBlogs];

  // Get unique tags from all blogs
  const allTags = [
    "all",
    ...new Set(allBlogs.flatMap((blog) => blog.tags || [])),
  ];

  // Filter blogs by search and selected tag
  const filteredBlogs = allBlogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTag =
      selectedTag === "all" || (blog.tags && blog.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  // Get popular posts (dummy implementation)
  const popularPosts = [...allBlogs]
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  // Load comments from Firestore
  useEffect(() => {
    const loadComments = async () => {
      try {
        const q = query(
          collection(db, "blogComments"),
          orderBy("timestamp", "desc")
        );
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const commentsData = {};
          snapshot.forEach((doc) => {
            const { blogId, ...comment } = doc.data();
            if (!commentsData[blogId]) {
              commentsData[blogId] = [];
            }
            commentsData[blogId].push(comment);
          });
          setComments(commentsData);
        });
        return () => unsubscribe();
      } catch (error) {
        console.error("Error loading comments:", error);
      }
    };

    loadComments();
  }, []);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!selectedArticle || !commentForm.name || !commentForm.comment) return;

    try {
      const newComment = {
        blogId: selectedArticle.id,
        name: commentForm.name,
        email: commentForm.email,
        comment: commentForm.comment,
        timestamp: Timestamp.now(),
      };

      // Add comment to Firestore
      const commentsRef = collection(db, "blogComments");
      await addDoc(commentsRef, newComment);

      // Update local state
      setComments((prev) => ({
        ...prev,
        [selectedArticle.id]: [
          ...(prev[selectedArticle.id] || []),
          { ...newComment, id: "temp-" + Date.now() },
        ],
      }));

      // Reset form
      setCommentForm({ name: "", email: "", comment: "" });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const openArticle = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = "hidden";
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = "auto";
  };

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Moved New Post Button to hero section */}

        {/* Hero Section with Video Background */}
        <section className="relative pt-20 md:pt-24 h-[70vh] min-h-[500px] flex items-center overflow-hidden">
          {/* Video Background with refined overlay */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-105"
            >
              <source
                src="/videos/5124290_Person_People_3840x2160.mp4"
                type="video/mp4"
              />
            </video>
            {/* Multi-layered Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-1"></div>
            <div className="absolute inset-0 bg-[#6f3348]/20 mix-blend-overlay z-1"></div>
            <div className="absolute inset-0 backdrop-blur-[2px] z-1"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-[#6f3348]/30 border border-[#6f3348]/50 text-white text-sm font-medium mb-6 backdrop-blur-md"
                >
                  Insights & Health Stories
                </motion.span>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                  Wellness, Care & <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#6f3348] to-white animate-gradient-x">
                    Expert Insights
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-8 leading-relaxed">
                  Join our community of healthcare experts and discover the latest 
                  breakthroughs in fertility, reproductive health, and holistic wellness.
                </p>

                <div className="flex flex-wrap gap-4 items-center">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(111 51 72 / 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowNewPostModal(true)}
                    className="flex items-center gap-2 bg-[#6f3348] text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl border border-white/10"
                  >
                    <Plus size={20} />
                    Share Your Story
                  </motion.button>
                  
                  {/* Search Bar Integrated into Hero */}
                  <div className="relative flex-grow max-w-md group">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search articles..."
                      className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#6f3348] transition-all group-hover:bg-white/15"
                    />
                    <Search className="w-5 h-5 text-white/60 absolute right-6 top-1/2 transform -translate-y-1/2 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Progress Indicator (Visual only) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#6f3348] to-transparent"></div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-white/40 text-[10px] uppercase tracking-[0.2em]"
            >
              Scroll
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Categories Filter - Modern Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedTag(tag)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-[#6f3348] text-white shadow-[0_10px_20px_-5px_rgba(111,51,72,0.4)]"
                    : "bg-white border border-gray-100 text-gray-500 hover:border-[#6f3348]/30 hover:text-[#6f3348] shadow-sm hover:shadow-md"
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Latest Articles Section */}
              <section className="py-8 w-full">
                <motion.div
                  className="w-full text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block bg-[#6f3348]/10 text-[#6f3348] text-xs font-bold px-4 py-1 rounded-full mb-4">
                    Latest Updates
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Our Recent Articles
                  </h2>

                  <div className="flex justify-center gap-4 mb-12">
                    <button
                      onClick={() => setActiveTab("recent")}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeTab === "recent"
                          ? "bg-[#6f3348] text-white shadow-lg shadow-[#6f3348]/30"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Most Recent
                    </button>
                    <button
                      onClick={() => setActiveTab("popular")}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeTab === "popular"
                          ? "bg-[#6f3348] text-white shadow-lg shadow-[#6f3348]/30"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      Most Popular
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: (index % 2) * 0.2 }}
                        className="group bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 hover:shadow-[0_20px_60px_-15px_rgba(111,51,72,0.15)] transition-all duration-500 flex flex-col h-full"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/images/services/fertility.jpg";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Category Tag */}
                          <div className="absolute top-4 left-4">
                            <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-[#6f3348] text-xs font-bold rounded-full shadow-sm">
                              {post.tag || "Health"}
                            </span>
                          </div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow text-left">
                          <div className="flex items-center gap-4 mb-4 text-xs font-medium text-gray-500">
                            <span className="flex items-center gap-1.5">
                              <Search className="w-3.5 h-3.5 text-[#6f3348]" />
                              {post.readTime || "5 min"} read
                            </span>
                            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                            <span>{post.date || "Recent Post"}</span>
                          </div>

                          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#6f3348] transition-colors line-clamp-2 leading-snug">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                            {post.excerpt || (post.content ? post.content.substring(0, 150) + "..." : "")}
                          </p>

                          <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-white shadow-sm overflow-hidden p-0.5">
                                <img
                                  src={post.author?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author?.name || "A")}&background=6f3348&color=fff`}
                                  alt={post.author?.name}
                                  className="w-full h-full object-cover rounded-full"
                                />
                              </div>
                              <div>
                                <p className="text-xs font-bold text-gray-900 line-clamp-1">{post.author?.name || "Team Member"}</p>
                                <p className="text-[10px] text-gray-500">{post.author?.title || "Specialist"}</p>
                              </div>
                            </div>

                            <motion.button
                              onClick={() => openArticle(post)}
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-2 text-[#6f3348] text-sm font-bold group/btn"
                            >
                              Details
                              <div className="w-6 h-6 rounded-full bg-[#6f3348]/10 flex items-center justify-center group-hover/btn:bg-[#6f3348] group-hover/btn:text-white transition-all duration-300">
                                <Plus size={14} />
                              </div>
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Posts - Refined List */}
              <div className="bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-50 p-8">
                <h3 className="text-lg font-bold mb-6 text-gray-900 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-[#6f3348] rounded-full"></div>
                  Trending Articles
                </h3>
                <div className="space-y-6">
                  {popularPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 group cursor-pointer"
                      onClick={() => openArticle(post)}
                    >
                      <div className="w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/services/fertility.jpg";
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0 pt-1">
                        <h4 className="font-bold text-sm text-gray-900 group-hover:text-[#6f3348] transition-colors line-clamp-2 leading-tight mb-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-gray-500 font-medium">
                          <span>{post.readTime}</span>
                          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                          <span>{post.tag}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup - Modern Gradient Card */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#6f3348] to-[#4b1438] rounded-3xl p-8 text-white shadow-xl">
                {/* Decorative background circle */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                
                <h3 className="text-xl font-bold mb-3 relative z-10">Stay in the Loop</h3>
                <p className="text-white/80 text-sm mb-6 leading-relaxed relative z-10">
                  Join 1,000+ subscribers and get health tips delivered to your inbox.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3 relative z-10">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all text-sm"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,1)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-white text-[#6f3348] font-bold py-3 rounded-2xl shadow-lg transition-colors text-sm"
                  >
                    Subscribe Now
                  </motion.button>
                </form>
              </div>

              {/* Categories Sidebar - List Style */}
              <div className="bg-white rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8">
                <h3 className="text-lg font-bold mb-6 text-gray-900 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-[#6f3348]/30 rounded-full"></div>
                  Browse by Topic
                </h3>
                <div className="space-y-1">
                  {allTags
                    .filter((tag) => tag !== "all")
                    .map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className={`w-full text-left px-4 py-3 rounded-2xl transition-all duration-300 flex items-center justify-between group ${
                          selectedTag === tag
                            ? "bg-[#6f3348]/5 text-[#6f3348] font-bold"
                            : "text-gray-600 hover:bg-gray-50 hover:pl-6"
                        }`}
                      >
                        <span className="text-sm capitalize">{tag}</span>
                        <span className={`text-[10px] px-2.5 py-1 rounded-full ${
                          selectedTag === tag 
                            ? "bg-[#6f3348] text-white" 
                            : "bg-gray-100 text-gray-500 group-hover:bg-[#6f3348]/10 group-hover:text-[#6f3348]"
                        }`}>
                          {blogs.filter((b) => b.tags && b.tags.includes(tag)).length}
                        </span>
                      </button>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-[var(--primary-color)] text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Article Modal - Premium Glassmorphism */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeArticle}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-5xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] z-10 border border-white/20"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header - Fixed */}
              <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-[#6f3348] rounded-full"></div>
                  <h2 className="text-xl font-bold text-gray-900 line-clamp-1">
                    {selectedArticle.title}
                  </h2>
                </div>
                <button
                  onClick={closeArticle}
                  className="p-3 rounded-full bg-gray-50 text-gray-500 hover:bg-[#6f3348] hover:text-white transition-all duration-300"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="overflow-y-auto custom-scrollbar">
                {/* Featured Image Header */}
                <div className="relative h-[25rem] md:h-[35rem] w-full overflow-hidden">
                  <img
                    src={selectedArticle.image || "/images/services/fertility.jpg"}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  
                  {/* Floating Metadata */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(selectedArticle.tags || [selectedArticle.tag]).map((tag, index) => (
                        <span key={index} className="px-4 py-1.5 bg-[#6f3348] text-white text-xs font-bold rounded-full shadow-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight drop-shadow-sm">
                      {selectedArticle.title}
                    </h1>
                  </div>
                </div>

                <div className="px-8 md:px-12 py-10">
                  {/* Article Meta Info */}
                  <div className="flex flex-wrap items-center justify-between gap-6 pb-10 mb-10 border-b border-gray-100">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6f3348] to-[#4b1438] p-0.5 shadow-md">
                        <img
                          src={selectedArticle.author?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedArticle.author?.name || "A")}&background=fff&color=6f3348`}
                          alt={selectedArticle.author?.name}
                          className="w-full h-full object-cover rounded-[calc(1rem-2px)]"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-lg">{selectedArticle.author?.name || "Medical Expert"}</p>
                        <p className="text-sm text-gray-500">{selectedArticle.author?.title || "Health Specialist"}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-gray-50 rounded-lg"><Search className="w-4 h-4 text-[#6f3348]" /></div>
                        {selectedArticle.readTime || "5 min"} read
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-gray-50 rounded-lg"><Plus className="w-4 h-4 text-[#6f3348]" /></div>
                        {selectedArticle.date || "Just published"}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-light">
                    {selectedArticle.content ? (
                      selectedArticle.content.split('\n\n').map((para, i) => (
                        <p key={i} className="mb-6">{para}</p>
                      ))
                    ) : (
                      <p>{selectedArticle.excerpt}</p>
                    )}
                  </div>

                  {/* Share & Footer Actions */}
                  <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Share Article</span>
                      <div className="flex gap-2">
                        {['twitter', 'facebook', 'linkedin'].map((platform) => (
                          <motion.button
                            key={platform}
                            whileHover={{ y: -3 }}
                            className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[#6f3348] hover:text-white transition-all duration-300"
                            onClick={() => handleShare(platform)}
                          >
                            <Plus size={18} />
                          </motion.button>
                        ))}
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={closeArticle}
                      className="px-8 py-3 bg-gray-900 text-white font-bold rounded-2xl shadow-xl hover:bg-gray-800 transition-all"
                    >
                      Done Reading
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />

      {/* New Post Modal */}
      <AnimatePresence>
        {showNewPostModal && (
          <div className="fixed inset-0 z-[9999] overflow-y-auto">
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowNewPostModal(false)}
            />

            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden z-[9999] relative"
                initial={{ y: 20, opacity: 0, scale: 0.98 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.98 }}
                transition={{ type: "spring", damping: 25, stiffness: 400 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      Create New Blog Post
                    </h2>
                    <button
                      onClick={() => setShowNewPostModal(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <form onSubmit={handleNewPostSubmit}>
                    <div className="space-y-6">
                      {/* Title */}
                      <div>
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Title <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="title"
                          value={newPost.title}
                          onChange={(e) =>
                            setNewPost({ ...newPost, title: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter post title"
                          required
                        />
                      </div>

                      {/* Excerpt */}
                      <div>
                        <label
                          htmlFor="excerpt"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Excerpt
                        </label>
                        <textarea
                          id="excerpt"
                          rows="2"
                          value={newPost.excerpt}
                          onChange={(e) =>
                            setNewPost({ ...newPost, excerpt: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="A short summary of your post"
                        />
                      </div>

                      {/* Author Information */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Author Information
                        </label>
                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="authorName"
                              className="block text-xs font-medium text-gray-500 mb-1"
                            >
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="authorName"
                              value={newPost.author?.name || ""}
                              onChange={(e) =>
                                setNewPost({
                                  ...newPost,
                                  author: {
                                    ...newPost.author,
                                    name: e.target.value,
                                  },
                                })
                              }
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Author's full name"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor="authorTitle"
                                className="block text-xs font-medium text-gray-500 mb-1"
                              >
                                Title/Role
                              </label>
                              <input
                                type="text"
                                id="authorTitle"
                                value={newPost.author?.title || ""}
                                onChange={(e) =>
                                  setNewPost({
                                    ...newPost,
                                    author: {
                                      ...newPost.author,
                                      title: e.target.value,
                                    },
                                  })
                                }
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="e.g. Fertility Specialist"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="authorAvatar"
                                className="block text-xs font-medium text-gray-500 mb-1"
                              >
                                Avatar URL (optional)
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <ImageIcon className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                  type="url"
                                  id="authorAvatar"
                                  value={newPost.author?.avatar || ""}
                                  onChange={(e) =>
                                    setNewPost({
                                      ...newPost,
                                      author: {
                                        ...newPost.author,
                                        avatar: e.target.value,
                                      },
                                    })
                                  }
                                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                  placeholder="https://example.com/avatar.jpg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Image URL */}
                        <div>
                          <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Image URL
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <ImageIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="url"
                              id="image"
                              value={newPost.image}
                              onChange={(e) =>
                                setNewPost({
                                  ...newPost,
                                  image: e.target.value,
                                })
                              }
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="https://example.com/image.jpg"
                            />
                          </div>
                        </div>

                        {/* Tag */}
                        <div>
                          <label
                            htmlFor="tag"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Category
                          </label>
                          <select
                            id="tag"
                            value={newPost.tag}
                            onChange={(e) =>
                              setNewPost({ ...newPost, tag: e.target.value })
                            }
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                          >
                            <option value="Fertility">Fertility</option>
                            <option value="IVF">IVF</option>
                            <option value="Wellness">Wellness</option>
                            <option value="Men's Health">Men's Health</option>
                            <option value="Family">Family</option>
                          </select>
                        </div>

                        {/* Read Time */}
                        <div>
                          <label
                            htmlFor="readTime"
                            className="block text-sm font-medium text-gray-700 mb-1"
                          >
                            Read Time
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="readTime"
                              value={newPost.readTime}
                              onChange={(e) =>
                                setNewPost({
                                  ...newPost,
                                  readTime: e.target.value,
                                })
                              }
                              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="e.g. 5 min read"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 text-sm">min</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <label
                          htmlFor="content"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Content <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="content"
                          rows="8"
                          value={newPost.content}
                          onChange={(e) =>
                            setNewPost({ ...newPost, content: e.target.value })
                          }
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-sans"
                          placeholder="Write your post content here..."
                          required
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => setShowNewPostModal(false)}
                        className="px-6 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                        disabled={isSubmitting}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors flex items-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Publishing...
                          </>
                        ) : (
                          "Publish Post"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Blog;
