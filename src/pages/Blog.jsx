import { useState, useEffect, useRef } from 'react';
import { db } from '../lib/firebase';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, arrayUnion, Timestamp, addDoc } from 'firebase/firestore';
import { formatDistance } from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Search, Filter, ArrowDown, X, Plus, XCircle, Image as ImageIcon } from "lucide-react";

// Dummy data for featured article
const featuredArticle = {
  id: 'featured-1',
  title: 'Advancements in Fertility Treatments: What You Need to Know',
  excerpt: 'Explore the latest breakthroughs in fertility treatments and how they are changing lives. Learn about the most effective options available today.',
  image: 'https://source.unsplash.com/1200x800/?fertility,treatment',
  tag: 'Fertility',
  readTime: '8 min read',
  content: `In recent years, fertility treatments have seen remarkable advancements that have revolutionized reproductive medicine. From improved IVF techniques to cutting-edge genetic testing, couples facing fertility challenges now have more options than ever before.

One of the most significant breakthroughs has been the development of time-lapse embryo imaging, which allows embryologists to monitor embryo development in real-time without disturbing the delicate culture environment. This technology has significantly improved embryo selection and pregnancy success rates.

Another exciting development is the use of preimplantation genetic testing (PGT), which can screen embryos for genetic abnormalities before implantation. This not only increases the chances of a successful pregnancy but also reduces the risk of passing on genetic disorders.

For women with diminished ovarian reserve, new ovarian rejuvenation techniques are showing promise in improving egg quality and quantity. These minimally invasive procedures use platelet-rich plasma (PRP) or stem cells to potentially enhance ovarian function.

At Mount Carmel, we stay at the forefront of these advancements, offering our patients access to the latest evidence-based treatments in a supportive and compassionate environment. Our team of fertility specialists is dedicated to helping you build the family you've always dreamed of.`
};

// Dummy data for blog posts
const dummyBlogs = [
  {
    id: '1',
    title: 'Understanding IVF: A Step-by-Step Guide',
    excerpt: 'Get a comprehensive overview of the IVF process, from initial consultation to embryo transfer.',
    image: 'https://source.unsplash.com/600x400/?ivf,medical',
    tag: 'IVF',
    readTime: '6 min read',
    content: 'Detailed content about IVF process...'
  },
  {
    id: '2',
    title: 'Nutrition for Fertility: Foods to Boost Your Chances',
    excerpt: 'Discover the best foods to enhance fertility and improve your reproductive health naturally.',
    image: 'https://source.unsplash.com/600x400/?fertility,food',
    tag: 'Wellness',
    readTime: '5 min read',
    content: 'Detailed content about nutrition...'
  },
  {
    id: '3',
    title: 'Male Fertility: Common Myths Debunked',
    excerpt: 'Separating fact from fiction when it comes to male fertility and reproductive health.',
    image: 'https://source.unsplash.com/600x400/?men,health',
    tag: 'Men\'s Health',
    readTime: '4 min read',
    content: 'Detailed content about male fertility...'
  },
  {
    id: '4',
    title: 'The Emotional Journey of Infertility',
    excerpt: 'Navigating the emotional challenges of infertility and finding support along the way.',
    image: 'https://source.unsplash.com/600x400/?support,care',
    tag: 'Wellbeing',
    readTime: '7 min read',
    content: 'Detailed content about emotional support...'
  },
  {
    id: '5',
    title: 'Age and Fertility: What You Should Know',
    excerpt: 'Understanding how age impacts fertility and what options are available at different life stages.',
    image: 'https://source.unsplash.com/600x400/?age,clock',
    tag: 'Fertility',
    readTime: '6 min read',
    content: 'Detailed content about age and fertility...'
  },
  {
    id: '6',
    title: 'Alternative Paths to Parenthood',
    excerpt: 'Exploring options beyond traditional conception, including adoption and surrogacy.',
    image: 'https://source.unsplash.com/600x400/?family,adoption',
    tag: 'Family',
    readTime: '8 min read',
    content: 'Detailed content about alternative paths...'
  }
];

function Blog() {
  const [blogs, setBlogs] = useState(dummyBlogs);
  const [dbBlogs, setDbBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    image: '',
    tag: 'Fertility',
    readTime: '',
    content: '',
    author: {
      name: '',
      title: 'Content Writer',
      avatar: ''
    }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [comments, setComments] = useState({});
  const [commentForm, setCommentForm] = useState({ name: '', email: '', comment: '' });
  const [activeTab, setActiveTab] = useState('recent');
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Handle new blog post submission
  const handleNewPostSubmit = async (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.content || !newPost.author?.name) {
      alert('Please fill in all required fields');
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
      const docRef = await addDoc(collection(db, 'blogs'), post);
      // Add to local state for instant feedback
      setDbBlogs(prev => [{ id: docRef.id, ...post }, ...prev]);
      setNewPost({
        title: '',
        excerpt: '',
        image: '',
        tag: 'Fertility',
        readTime: '',
        content: '',
        author: {
          name: '',
          title: 'Content Writer',
          avatar: ''
        }
      });
      setShowNewPostModal(false);
      alert('Blog post created successfully!');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  // Load blog posts from Firestore
  useEffect(() => {
    const q = query(collection(db, 'blogs'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const posts = [];
      snapshot.forEach(doc => {
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
  const allTags = ['all', ...new Set(allBlogs.flatMap(blog => blog.tags || []))];

  // Filter blogs by search and selected tag
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesTag = selectedTag === 'all' || (blog.tags && blog.tags.includes(selectedTag));
    return matchesSearch && matchesTag;
  });

  // Get popular posts (dummy implementation)
  const popularPosts = [...allBlogs].sort(() => 0.5 - Math.random()).slice(0, 3);

  // Load comments from Firestore
  useEffect(() => {
    const loadComments = async () => {
      try {
        const q = query(collection(db, "blogComments"), orderBy("timestamp", "desc"));
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
      const commentsRef = collection(db, 'blogComments');
      await addDoc(commentsRef, newComment);

      // Update local state
      setComments(prev => ({
        ...prev,
        [selectedArticle.id]: [
          ...(prev[selectedArticle.id] || []),
          { ...newComment, id: 'temp-' + Date.now() }
        ]
      }));

      // Reset form
      setCommentForm({ name: '', email: '', comment: '' });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const openArticle = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'auto';
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
        <section className="relative pt-20 md:pt-24 h-[calc(100vh-5rem)] min-h-[500px] max-h-[800px] overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/5124290_Person_People_3840x2160.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-purple-900/50"></div>
          </div>

          {/* Content */}
          <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="h-full flex flex-col justify-center items-center text-center pt-16 pb-8 sm:pt-24 sm:pb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl mx-auto"
              >
                <div className="w-full flex flex-col items-center">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight text-center">
                    Mount Carmel Blog
                  </h1>
                  <button
                    onClick={() => setShowNewPostModal(true)}
                    className="flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Plus size={20} />
                    Write a New Post
                  </button>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
                  Discover the latest insights, tips, and stories about fertility, wellness, and reproductive health.
                </p>
                
                {/* Search Bar */}
                <div className="max-w-2xl w-full mx-auto px-2 sm:px-0">
                  <div className="relative">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search articles..."
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base rounded-full bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 pr-12"
                    />
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white/70 absolute right-4 sm:right-5 top-1/2 transform -translate-y-1/2" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex flex-col items-center text-white/70 hover:text-white transition-colors cursor-pointer"
              onClick={() => {
                const mainContent = document.querySelector('main');
                if (mainContent) {
                  mainContent.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

        </section>

        <div className="container mx-auto px-4 py-12 md:py-16">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedTag === tag
                    ? 'bg-[var(--primary-color)] text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Latest Articles Section */}
              <section className="py-16 px-4 sm:px-6 lg:px-8 w-full">
                <motion.div 
                  className="max-w-7xl mx-auto text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block bg-primary-color/10 text-primary-color text-sm font-semibold px-4 py-1 rounded-full mb-4">
                    Latest Updates
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                    Our Recent Articles
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto mb-8">Stay updated with our latest health insights and medical news</p>
                  
                  <div className="flex justify-center gap-4 mb-12">
                    <button 
                      onClick={() => setActiveTab('recent')}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeTab === 'recent' 
                          ? 'bg-primary-color text-white shadow-lg shadow-primary-color/30' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      Most Recent
                    </button>
                    <button 
                      onClick={() => setActiveTab('popular')}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        activeTab === 'popular' 
                          ? 'bg-primary-color text-white shadow-lg shadow-primary-color/30' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      Most Popular
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {currentPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                      >
                        <div className="relative h-80 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = '/images/services/fertility.jpg';
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <div className="flex flex-wrap gap-2 mb-3">
                              {(post.tags || []).map((tag, index) => (
                                <span 
                                  key={index}
                                  className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 text-xs font-medium rounded-full backdrop-blur-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                              {post.title}
                            </h1>
                            <div className="flex items-center text-sm text-white/90">
                              <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {post.date || 'Unknown date'}
                              </span>
                              <span className="mx-3">•</span>
                              <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {post.readTime || '5 min'} read
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Article Content */}
                        <div className="p-6">
                          <div className="prose dark:prose-invert max-w-none">
                            <div className="flex items-center mb-8">
                              <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                                <img 
                                  src={post.author?.avatar || '/images/logo.png'} 
                                  alt={post.author?.name || 'Author'}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = '/images/logo.png';
                                  }}
                                />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white">
                                  {post.author?.name || 'Anonymous'}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  {post.author?.title || 'Content Writer'}
                                </p>
                              </div>
                            </div>
                            
                            <div className="prose-lg dark:prose-invert max-w-none">
                              {post.content || post.excerpt}
                            </div>

                            {/* Social Sharing */}
                            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                              <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Share this article</h4>
                              <div className="flex space-x-4">
                                {['Twitter', 'Facebook', 'LinkedIn', 'Copy Link'].map((platform) => (
                                  <button
                                    key={platform}
                                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                    onClick={() => handleShare(platform.toLowerCase())}
                                  >
                                    <span className="sr-only">Share on {platform}</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                      {/* Icons would go here */}
                                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>  
                        <motion.button 
                          onClick={() => setSelectedArticle(post)}
                          className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all transform hover:-translate-y-0.5 active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                          whileHover={{ 
                            background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
                          }}
                        >
                          <span className="relative z-10 flex items-center">
                            Read Full Article
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M14 5l7 7m0 0l-7 7m7-7H3" 
                              />
                            </svg>
                          </span>
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </section>
            </div>
            
            {/* Sidebar */}
            <div className="space-y-8">
              {/* Popular Posts */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div 
                      key={post.id}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                      onClick={() => openArticle(post)}
                    >
                      <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/services/fertility.jpg';
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-gray-900 dark:text-white line-clamp-2">
                          {post.title}
                        </h4>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-[var(--primary-color)] to-purple-600 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Stay Updated</h3>
                <p className="text-white/90 text-sm mb-4">
                  Subscribe to our newsletter for the latest articles and updates.
                </p>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <button 
                    type="submit"
                    className="w-full bg-white text-[var(--primary-color)] font-medium py-2.5 px-4 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
              
              {/* Categories */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Categories</h3>
                <div className="space-y-2">
                  {allTags.filter(tag => tag !== 'all').map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(tag)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedTag === tag
                          ? 'bg-[var(--primary-color)] text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                    >
                      <span className="flex items-center justify-between">
                        <span>{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
                        <span className="bg-white/20 dark:bg-gray-700 text-xs px-2 py-0.5 rounded-full">
                          {blogs.filter(b => b.tags && b.tags.includes(tag)).length}
                        </span>
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
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="article-title" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeArticle}
            aria-hidden="true"
          />

          <div className="flex items-center justify-center min-h-screen p-4 sm:p-6">
            <motion.div 
              className="relative w-[80vw] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-10">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white line-clamp-1 pr-4">
                  {selectedArticle.title}
                </h2>
                <button 
                  onClick={closeArticle}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto">
                <div className="relative h-64 md:h-96 w-full">
                  <img 
                    src={selectedArticle.image || '/images/services/fertility.jpg'} 
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/services/fertility.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(selectedArticle.tags || []).map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {selectedArticle.title}
                  </h1>

                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center mr-6">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {selectedArticle.date || 'Unknown date'}
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {selectedArticle.readTime || '5 min'} read
                    </div>
                  </div>

                  <div className="prose dark:prose-invert max-w-none">
                    {selectedArticle.content || selectedArticle.excerpt}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden mr-4">
                        <img 
                          src={selectedArticle.author?.avatar || 
                            `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedArticle.author?.name || 'A')}&background=random`} 
                          alt={selectedArticle.author?.name || 'Author'}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://ui-avatars.com/api/?name=A&background=random';
                          }}
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {selectedArticle.author?.name || 'Anonymous'}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {selectedArticle.author?.title || 'Content Writer'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
                      Share this article
                    </h4>
                    <div className="flex space-x-4">
                      {['Twitter', 'Facebook', 'LinkedIn', 'Copy Link'].map((platform) => (
                        <button
                          key={platform}
                          className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                          onClick={() => handleShare(platform.toLowerCase())}
                        >
                          <span className="sr-only">Share on {platform}</span>
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>
                  {selectedArticle.content && selectedArticle.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="mb-4">{paragraph}</p>
                  ))}
                </div>

                  {/* Comments Section */}
                  <div className="mt-12 mb-8 pt-8 border-t border-white/10">
                    <h3 className="text-2xl font-bold mb-8 text-center">Join the Conversation</h3>
                    
                    <form onSubmit={handleCommentSubmit} className="space-y-6 max-w-3xl mx-auto">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            required
                            value={commentForm.name}
                            onChange={(e) => setCommentForm({...commentForm, name: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200"
                            placeholder="Your name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={commentForm.email}
                            onChange={(e) => setCommentForm({...commentForm, email: e.target.value})}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Your Comment <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="comment"
                          rows="5"
                          required
                          value={commentForm.comment}
                          onChange={(e) => setCommentForm({...commentForm, comment: e.target.value})}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[var(--primary-color)] focus:border-transparent transition-all duration-200 resize-none"
                          placeholder="Share your thoughts..."
                        ></textarea>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="px-8 py-3 bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/90 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]"
                        >
                          Post Comment
                        </button>
                      </div>
                    </form>

                    {/* Comments List */}
                    <div className="mt-12 space-y-6">
                      <h4 className="text-lg font-semibold mb-6">
                        {comments[selectedArticle.id]?.length || 'No'} Comments
                      </h4>
                      
                      {comments[selectedArticle.id]?.map((comment, i) => (
                        <div key={i} className="bg-[var(--dark-color)] p-4 rounded-lg border border-[var(--primary-color)]/20">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 rounded-full bg-[var(--primary-color)]/80 flex items-center justify-center text-[var(--light-color)] font-bold">
                              {comment.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <h5 className="font-semibold">{comment.name}</h5>
                              <span className="text-xs text-[var(--light-color)]/60">
                                {comment.timestamp?.toDate 
                                  ? formatDistance(comment.timestamp.toDate(), new Date(), { addSuffix: true })
                                  : 'Just now'}
                              </span>
                            </div>
                          </div>
                          <p className="text-[var(--light-color)]/80 pl-[52px]">{comment.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
               
              </div>
            </motion.div>
          </div>
        </div>
      )}
      
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
                transition={{ type: 'spring', damping: 25, stiffness: 400 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Create New Blog Post</h2>
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
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                          Title <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="title"
                          value={newPost.title}
                          onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter post title"
                          required
                        />
                      </div>
                      
                      {/* Excerpt */}
                      <div>
                        <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                          Excerpt
                        </label>
                        <textarea
                          id="excerpt"
                          rows="2"
                          value={newPost.excerpt}
                          onChange={(e) => setNewPost({...newPost, excerpt: e.target.value})}
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
                            <label htmlFor="authorName" className="block text-xs font-medium text-gray-500 mb-1">
                              Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="authorName"
                              value={newPost.author?.name || ''}
                              onChange={(e) => setNewPost({
                                ...newPost,
                                author: {
                                  ...newPost.author,
                                  name: e.target.value
                                }
                              })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="Author's full name"
                              required
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="authorTitle" className="block text-xs font-medium text-gray-500 mb-1">
                                Title/Role
                              </label>
                              <input
                                type="text"
                                id="authorTitle"
                                value={newPost.author?.title || ''}
                                onChange={(e) => setNewPost({
                                  ...newPost,
                                  author: {
                                    ...newPost.author,
                                    title: e.target.value
                                  }
                                })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="e.g. Fertility Specialist"
                              />
                            </div>
                            <div>
                              <label htmlFor="authorAvatar" className="block text-xs font-medium text-gray-500 mb-1">
                                Avatar URL (optional)
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <ImageIcon className="h-4 w-4 text-gray-400" />
                                </div>
                                <input
                                  type="url"
                                  id="authorAvatar"
                                  value={newPost.author?.avatar || ''}
                                  onChange={(e) => setNewPost({
                                    ...newPost,
                                    author: {
                                      ...newPost.author,
                                      avatar: e.target.value
                                    }
                                  })}
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
                          <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
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
                              onChange={(e) => setNewPost({...newPost, image: e.target.value})}
                              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="https://example.com/image.jpg"
                            />
                          </div>
                        </div>
                        
                        {/* Tag */}
                        <div>
                          <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-1">
                            Category
                          </label>
                          <select
                            id="tag"
                            value={newPost.tag}
                            onChange={(e) => setNewPost({...newPost, tag: e.target.value})}
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
                          <label htmlFor="readTime" className="block text-sm font-medium text-gray-700 mb-1">
                            Read Time
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              id="readTime"
                              value={newPost.readTime}
                              onChange={(e) => setNewPost({...newPost, readTime: e.target.value})}
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
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                          Content <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="content"
                          rows="8"
                          value={newPost.content}
                          onChange={(e) => setNewPost({...newPost, content: e.target.value})}
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
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Publishing...
                          </>
                        ) : 'Publish Post'}
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
  )
}

export default Blog;
