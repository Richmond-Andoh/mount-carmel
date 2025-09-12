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
      {/* Hero & Introduction Section */}
      <div className="w-100" style={{
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        background: `linear-gradient(rgba(75,20,56,0.85), rgba(111,51,72,0.85)), url('/images/about-bg.jpg') center/cover no-repeat`,
        backgroundAttachment: 'fixed',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '420px',
        margin: 0
      }}>
        <div className="container py-5">
          <h1 className="display-3 text-white animated slideInDown fw-bold tracking-wider mb-3" style={{textShadow: '0 2px 16px #000'}}>Blog – Insights, Teachings, and Guidelines from Our Medical Experts</h1>
          <h3 className="text-white mb-3" style={{fontWeight:600}}>Welcome to Our Knowledge Hub</h3>
          <p className="lead text-white mb-4" style={{maxWidth:600}}>At Mount Carmel Hospital and Fertility Center, we believe knowledge is the first step to better health. Our team of medical specialists shares trusted insights on fertility, reproductive health, maternal care, and overall wellness—to guide you and your loved ones toward healthier choices.</p>
          <button
            className="mt-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-200"
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

      {/* Featured Categories Section */}
      <div className="container-xxl py-4">
        <div className="container">
          <h4 className="mb-4 fw-bold" style={{color:'#6f3348'}}>Featured Categories</h4>
          <div className="row g-3">
            <div className="col-md-4 col-lg-3">
              <div className="p-3 rounded-3 shadow bg-white d-flex align-items-center gap-3">
                <span className="fs-2">🔹</span>
                <div>
                  <div className="fw-semibold" style={{color:'#6f3348'}}>Fertility & Reproductive Health</div>
                  <small className="text-muted">Expert guidance for your fertility journey.</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="p-3 rounded-3 shadow bg-white d-flex align-items-center gap-3">
                <span className="fs-2">🔹</span>
                <div>
                  <div className="fw-semibold" style={{color:'#6f3348'}}>Maternal & Child Care</div>
                  <small className="text-muted">Tips for every stage of motherhood.</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="p-3 rounded-3 shadow bg-white d-flex align-items-center gap-3">
                <span className="fs-2">🔹</span>
                <div>
                  <div className="fw-semibold" style={{color:'#6f3348'}}>General Health & Wellness</div>
                  <small className="text-muted">Balance, energy, and well-being.</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="p-3 rounded-3 shadow bg-white d-flex align-items-center gap-3">
                <span className="fs-2">🔹</span>
                <div>
                  <div className="fw-semibold" style={{color:'#6f3348'}}>Lifestyle & Preventive Care</div>
                  <small className="text-muted">Nutrition, fitness, and prevention.</small>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="p-3 rounded-3 shadow bg-white d-flex align-items-center gap-3">
                <span className="fs-2">🔹</span>
                <div>
                  <div className="fw-semibold" style={{color:'#6f3348'}}>Hospital News & Updates</div>
                  <small className="text-muted">Latest initiatives and innovations.</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Latest Articles Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <h3 className="fw-bold mb-4" style={{color:'#6f3348'}}>Latest Articles</h3>
          <div className="row g-4">
            {loading ? (
              <div className="col-12 text-center">Loading blogs...</div>
            ) : blogs.length === 0 ? (
              <div className="col-12 text-center">No blog posts yet.</div>
            ) : (
              blogs.map((blog, index) => (
                <div key={blog.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                  <div className="blog-card rounded-4 shadow-lg bg-white h-100 d-flex flex-column animate-blog-card" style={{
                    backdropFilter: 'blur(8px)',
                    background: 'rgba(255,255,255,0.97)',
                    border: '1px solid #e0e0e0',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    boxShadow: '0 4px 24px rgba(111,51,72,0.10)',
                    cursor: 'pointer',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(111,51,72,0.18)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(111,51,72,0.10)';
                  }}>
                    {blog.image && (
                      <img src={blog.image} alt={blog.title} className="mb-3 rounded-3 shadow" style={{width:'100%',maxHeight:180,objectFit:'cover',borderTopLeftRadius:'1rem',borderTopRightRadius:'1rem'}} />
                    )}
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <span className="badge bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-pill">{blog.category || 'General'}</span>
                      <span className="badge bg-gradient-to-r from-pink-600 to-purple-600 text-white px-3 py-1 rounded-pill">{blog.tags?.join(', ')}</span>
                    </div>
                    <h4 className="mb-2 fw-bold" style={{color: '#6f3348'}}>{blog.title}</h4>
                    <div className="mb-2 text-muted" style={{fontSize: '0.95rem'}}>
                      By <span style={{color:'#4B1438'}}>{blog.author}</span> &middot; {blog.date}
                    </div>
                    <p className="mb-3 flex-grow-1">{blog.summary}</p>
                    <a href={`/blog/${blog.id}`} className="btn btn-outline-primary mt-auto rounded-pill">Read More</a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <style>{`
          @keyframes blogCardFadeIn { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
          .animate-blog-card { animation: blogCardFadeIn 0.5s; }
        `}</style>
      </div>
      <Footer />
    </div>
  );
}
export default Blog;
