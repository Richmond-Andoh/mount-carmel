import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Modal from '../components/Modal';
import BlogForm from '../components/BlogForm';
import { db } from '../lib/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

function Blog() {
  const [open, setOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize WOW.js for animations
    if (window.WOW) {
      new window.WOW().init();
    }
    // Real-time Firestore blog fetch
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogs(data);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <Header />
      {/* Hero Section with Background Image and Overlay */}
      <div 
        className="container-fluid page-header py-5 wow fadeIn relative shadow-lg bg-cover bg-center bg-no-repeat bg-fixed" 
        data-wow-delay="0.1s" 
        style={{ 
          backgroundImage: `url('/images/about-bg.jpg')`,
          height: '400px'
        }}
      >
        <div className="absolute inset-0 bg-mount-carmel-primary/85"></div>
        <div className="container py-5 relative">
          <h1 className="display-3 text-white animated slideInDown fw-bold tracking-wider">Blog</h1>
          <p className="lead text-white">Insights, teachings, and guidelines from our medical experts.</p>
          <button
            className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200"
            style={{ fontSize: '1.1rem', letterSpacing: '0.02em' }}
            onClick={() => setOpen(true)}
          >
            <i className="fa fa-plus-circle me-2"></i> Post a Blog
          </button>
          <Modal isOpen={open} onClose={() => setOpen(false)}>
            <BlogForm onClose={() => setOpen(false)} />
          </Modal>
        </div>
      </div>

      {/* Brand Marquee Section */}
      <section className="container-fluid py-5" style={{
        background: 'linear-gradient(90deg, #4B1438 0%, #6f3348 100%)',
        color: '#fff',
        margin: 0,
        padding: 0
      }}>
        <div className="container overflow-hidden" style={{'--gap':'48px', '--duration':'22s'}}>
          <div className="d-flex align-items-center gap-4 animate-marquee text-xl" style={{whiteSpace:'nowrap'}}>
            <span className="fw-semibold" style={{opacity:0.95}}>Compassionate Care</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Trusted by Families</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Expert Team</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Patient First</span>
            <span className="fw-semibold" style={{opacity:0.95}}>World-Class Facilities</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Exceptional Outcomes</span>
            {/* duplicate for seamless loop */}
            <span className="fw-semibold" style={{opacity:0.95}}>Compassionate Care</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Trusted by Families</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Expert Team</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Patient First</span>
            <span className="fw-semibold" style={{opacity:0.95}}>World-Class Facilities</span>
            <span className="fw-semibold" style={{opacity:0.95}}>Exceptional Outcomes</span>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {loading ? (
              <div className="col-12 text-center">Loading blogs...</div>
            ) : blogs.length === 0 ? (
              <div className="col-12 text-center">No blog posts yet.</div>
            ) : (
              blogs.map((blog, index) => (
                <div key={blog.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                  <div className="blog-card rounded-4 p-4 shadow-lg bg-white h-100 d-flex flex-column" style={{
                    backdropFilter: 'blur(8px)',
                    background: 'rgba(255,255,255,0.95)',
                    border: '1px solid #e0e0e0',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    boxShadow: '0 4px 24px rgba(111,51,72,0.08)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(111,51,72,0.18)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(111,51,72,0.08)';
                  }}>
                    {blog.image && (
                      <img src={blog.image} alt={blog.title} className="mb-3 rounded-3 shadow" style={{width:'100%',maxHeight:180,objectFit:'cover'}} />
                    )}
                    <div className="mb-2">
                      <span className="badge bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-pill">{blog.tags?.join(', ')}</span>
                    </div>
                    <h4 className="mb-2" style={{color: '#6f3348'}}>{blog.title}</h4>
                    <div className="mb-2 text-muted" style={{fontSize: '0.95rem'}}>
                      By <span style={{color:'#4B1438'}}>{blog.author}</span> &middot; {blog.date}
                    </div>
                    <p className="mb-3 flex-grow-1">{blog.summary}</p>
                    <a href={`/blog/${blog.id}`} className="btn btn-outline-primary mt-auto">Read More</a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Blog;
