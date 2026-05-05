"use client";
import React, { useState, useEffect } from 'react';

function ProjectCard({ images, title }) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  if (!mounted) return <div style={cardStyle}></div>;

  return (
    <div style={cardStyle}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${title} ${i}`}
          style={{
            ...imageStyle,
            opacity: index === i ? 1 : 0,
          }}
        />
      ))}
      <div style={badgeStyle}>{title}</div>
    </div>
  );
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  // Estado para el año (evita error de hidratación)
  const [currentYear, setCurrentYear] = useState("");
  
  // ESTADOS PARA REVIEWS
  const [reviews, setReviews] = useState([
    { name: "John D.", rating: 5, comment: "Excellent irrigation service. My lawn has never looked better!" },
    { name: "Sarah M.", rating: 5, comment: "Fast and professional sod installation. Highly recommended." }
  ]);
  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const scrollToSection = (id) => {
    if (typeof document !== 'undefined') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([newReview, ...reviews]);
    setReviewSubmitted(true);
    setNewReview({ name: '', rating: 5, comment: '' });
    setTimeout(() => setReviewSubmitted(false), 5000);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 600px) {
          .footer-container {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .footer-data-container {
            flex-direction: column !important;
            align-items: center !important;
            gap: 20px !important;
            width: 100% !important;
          }
          .split-section {
            grid-template-columns: 1fr !important;
          }
        }
      `}} />

      <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', margin: 0, padding: 0, fontFamily: 'sans-serif', overflowX: 'hidden' }}>      
        <nav style={{ 
          backgroundColor: '#FFFFFF',
          padding: '5px clamp(15px, 5vw, 40px)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          display: 'flex',
          alignItems: 'center',
          minHeight: '70px'
        }}>

          <div style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '15px'
          }}>

            <div 
              onClick={() => typeof window !== 'undefined' && window.scrollTo({top: 0, behavior: 'smooth'})}
              style={{ 
                flex: '1 1 auto', 
                display: 'flex', 
                justifyContent: 'flex-start',
                cursor: 'pointer'
              }}
            >
              <img 
                src="/Logocompleto.png" 
                alt="Green Landscaping and Irrigation LLC" 
                style={{ 
                  height: 'auto',
                  width: 'clamp(180px, 25vw, 280px)',
                  maxHeight: '90px',
                  objectFit: 'contain'
                }} 
              />
            </div>

            <div style={{ 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              
              <div style={{ textAlign: 'right', marginBottom: '4px' }}>
                <p style={{ 
                  fontSize: 'clamp(8px, 1vw, 10px)', 
                  color: '#6B7280', 
                  fontWeight: 'bold', 
                  margin: 0, 
                  textTransform: 'uppercase' 
                }}>
                  Free Estimate
                </p>
                <a 
                  href="tel:+17622440708"
                  style={{ 
                    fontSize: 'clamp(12px, 1.5vw, 15px)', 
                    fontWeight: '900', 
                    color: '#0B2219',
                    textDecoration: 'none'
                  }}
                >
                  +1 (762) 244-0708
                </a>
              </div>

              <a 
                href="tel:+17622440708" 
                style={{ 
                  backgroundColor: '#FFB703', 
                  color: '#0B2219', 
                  padding: '6px 16px', 
                  borderRadius: '8px', 
                  fontWeight: '900', 
                  fontSize: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(255,183,3,0.3)',
                  whiteSpace: 'nowrap'
                }}
              >
                CALL NOW
              </a>
            </div>
          </div>
        </nav>

        <section style={{ padding: 'clamp(10px, 3vw, 20px)', backgroundColor: '#F9FAFB' }}>
          <div style={{ 
            position: 'relative', 
            maxWidth: '1400px', 
            margin: '0 auto', 
            minHeight: 'clamp(50vh, 65vh, 80vh)', 
            borderRadius: 'clamp(20px, 5vw, 40px)', 
            overflow: 'hidden', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            border: 'clamp(4px, 1vw, 8px) solid #FFFFFF',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <img 
              src="/premium-garden.png" 
              alt="Garden Background"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 10 }}></div>

            <div style={{ position: 'relative', zIndex: 20, textAlign: 'center', padding: '40px 20px' }}>
              <h1 style={{ 
                color: '#FFFFFF', 
                fontSize: 'clamp(1.8rem, 6vw, 3.5rem)', 
                lineHeight: '1.2', 
                marginBottom: '20px',
                fontWeight: '900'
              }}>
                Where <span style={{ color: '#FFB703' }}>Memories</span> Grow <br/>
                and Lawns Flourish.
              </h1>
              <p style={{ color: '#FFFFFF', fontSize: 'clamp(14px, 3vw, 18px)', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                Your home is your sanctuary. We provide the expert care your landscape deserves.
              </p>
              
              <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => scrollToSection('estimate-section')}
                  style={{ 
                    backgroundColor: '#FFB703', color: '#0B2219', padding: '15px 30px', 
                    borderRadius: '12px', fontWeight: '900', fontSize: '16px', 
                    border: 'none', cursor: 'pointer', flex: '1', minWidth: '160px'
                  }}>
                  GET ESTIMATE
                </button>
                <button 
                  onClick={() => scrollToSection('projects-section')}
                  style={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', padding: '15px 30px', 
                    borderRadius: '12px', border: '2px solid #FFFFFF', fontWeight: '900', 
                    fontSize: '16px', backdropFilter: 'blur(5px)', cursor: 'pointer', flex: '1', minWidth: '160px'
                  }}>
                  OUR PROJECTS
                </button>
              </div>
            </div>
          </div>
        </section>

        <div style={{ textAlign: 'center', padding: '25px 10px', color: '#6B7280', fontSize: 'clamp(11px, 2vw, 14px)', letterSpacing: '1px', fontWeight: 'bold' }}>
          <span style={{ color: '#FFB703' }}>★★★★★</span> PROFESSIONAL IRRIGATION & SOD SERVICES
        </div>

        <section id="estimate-section" style={{ padding: 'clamp(40px, 8vw, 80px) 20px', backgroundColor: '#FFFFFF' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap' }}>
            
            <div style={{ flex: '1', minWidth: '300px' }}>
              <h2 style={{ fontSize: 'clamp(30px, 5vw, 48px)', fontWeight: '900', color: '#0B2219', lineHeight: '1.2', marginBottom: '25px' }}>
                Ready to Transform <br/> 
                <span style={{ color: '#FFB703' }}>Your Landscape?</span>
              </h2>
              <p style={{ fontSize: '17px', color: '#4B5563', lineHeight: '1.6', marginBottom: '30px' }}>
                Tell us about your project. Our experts are ready to help.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#0B2219', fontWeight: 'bold' }}>
                  <span style={{ backgroundColor: '#FFB703', padding: '8px', borderRadius: '50%', fontSize: '10px' }}>✓</span> 
                  Free Professional Estimates
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#0B2219', fontWeight: 'bold' }}>
                  <span style={{ backgroundColor: '#FFB703', padding: '8px', borderRadius: '50%', fontSize: '10px' }}>✓</span> 
                  Licensed & Insured Team
                </div>
              </div>
            </div>

            <div style={{ 
              flex: '1', 
              width: '100%',
              maxWidth: '500px', 
              backgroundColor: '#F9FAFB', 
              padding: 'clamp(20px, 5vw, 40px)', 
              borderRadius: '30px', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
              border: '1px solid #E5E7EB',
              margin: '0 auto'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <h3 style={{ color: '#0B2219', fontWeight: '900' }}>Thank you!</h3>
                  <p>We have received your request and will contact you soon.</p>
                </div>
              ) : (
                <form action="https://formspree.io/f/xeevogog" method="POST" onSubmit={() => setSubmitted(true)} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <input type="text" name="name" placeholder="Full Name" required style={inputStyle} />
                  <input type="email" name="email" placeholder="Email Address" required style={inputStyle} />
                  <input type="tel" name="phone" placeholder="Phone Number" style={inputStyle} />
                  <select name="service" style={inputStyle}>
                    <option value="">Select Service</option>
                    <option value="irrigation">Irrigation System</option>
                    <option value="sod">Sod Installation</option>
                    <option value="maintenance">Lawn Maintenance</option>
                    <option value="design">Landscape Design</option>
                  </select>
                  <textarea name="message" placeholder="Tell us about your project..." rows="3" style={inputStyle}></textarea>
                  <button type="submit" style={submitButtonStyle}>
                    SEND REQUEST
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section id="projects-section" style={{ padding: 'clamp(40px, 8vw, 100px) 20px', backgroundColor: '#F3F4F6', borderRadius: '60px 60px 0 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(30px, 5vw, 42px)', color: '#0B2219', fontWeight: '900', marginBottom: '15px' }}>Our Latest Work</h2>
            <p style={{ textAlign: 'center', color: '#6B7280', marginBottom: '40px', fontSize: '17px' }}>Quality landscaping that speaks for itself.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px' }}>
                <ProjectCard title="Sod Installation" images={['/Sod1.JPG', '/Sod2.JPG', '/Sod3.JPG', '/Sod4.JPG']} />
                <ProjectCard title="Irrigation Systems" images={['/Irrigation1.JPG', '/Irrigation2.JPG', '/Irrigation3.JPG', '/Irrigation4.JPG']} />
                <ProjectCard title="Landscape Design" images={['/Land1.JPG', '/Land2.JPG', '/Imagen2.JPG', '/Land3.JPG']} />
            </div>
          </div>
        </section>

        {/* --- SECCIÓN DIVIDIDA: REVIEWS & BLOG TIPS --- */}
        <section style={{ padding: '60px 20px', backgroundColor: '#FFFFFF' }}>
          <div className="split-section" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px' }}>
            
            {/* LADO IZQUIERDO: REVIEWS */}
            <div>
              <h2 style={{ fontSize: '28px', color: '#0B2219', fontWeight: '900', marginBottom: '25px' }}>Client Reviews</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '30px' }}>
                {reviews.slice(0, 3).map((rev, i) => (
                  <div key={i} style={reviewCardStyle}>
                    <div style={{ color: '#FFB703', marginBottom: '5px' }}>{"★".repeat(rev.rating)}</div>
                    <p style={{ fontStyle: 'italic', color: '#4B5563', fontSize: '14px' }}>"{rev.comment}"</p>
                    <p style={{ fontWeight: 'bold', marginTop: '10px', fontSize: '14px' }}>- {rev.name}</p>
                  </div>
                ))}
              </div>
              <div style={reviewFormWrapperStyle}>
                <h3 style={{ marginBottom: '15px', fontWeight: '900', fontSize: '18px' }}>Leave a Review</h3>
                {reviewSubmitted ? (
                  <p style={{ color: '#059669', fontWeight: 'bold' }}>Thanks for your feedback!</p>
                ) : (
                  <form onSubmit={handleReviewSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <input type="text" placeholder="Name" required style={{...inputStyle, padding: '10px'}} value={newReview.name} onChange={(e) => setNewReview({...newReview, name: e.target.value})} />
                      <select style={{...inputStyle, padding: '10px', width: 'auto'}} value={newReview.rating} onChange={(e) => setNewReview({...newReview, rating: parseInt(e.target.value)})}>
                        <option value="5">5 ★</option>
                        <option value="4">4 ★</option>
                      </select>
                    </div>
                    <textarea placeholder="Experience..." required style={{...inputStyle, padding: '10px'}} rows="2" value={newReview.comment} onChange={(e) => setNewReview({...newReview, comment: e.target.value})}></textarea>
                    <button type="submit" style={{...submitButtonStyle, padding: '10px'}}>POST</button>
                  </form>
                )}
              </div>
            </div>

            {/* LADO DERECHO: BLOG TIPS */}
            <div style={{ backgroundColor: '#F3F4F6', padding: '30px', borderRadius: '30px', alignSelf: 'start' }}>
              <h2 style={{ fontSize: '24px', color: '#0B2219', fontWeight: '900', marginBottom: '20px' }}>Pro Tips of the Week</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={blogCardStyle}>
                  <span style={blogTagStyle}>Watering</span>
                  <h4 style={blogTitleStyle}>Best Time to Water</h4>
                  <p style={blogTextStyle}>Water your lawn between 4 AM and 10 AM to reduce evaporation and fungal growth.</p>
                </div>

                <div style={blogCardStyle}>
                  <span style={blogTagStyle}>Mowing</span>
                  <h4 style={blogTitleStyle}>The One-Third Rule</h4>
                  <p style={blogTextStyle}>Never cut more than 1/3 of the grass blade at once to keep the roots strong and healthy.</p>
                </div>

                <div style={blogCardStyle}>
                  <span style={blogTagStyle}>Sod Care</span>
                  <h4 style={blogTitleStyle}>New Sod Maintenance</h4>
                  <p style={blogTextStyle}>Keep new sod moist for the first 2 weeks. Avoid heavy foot traffic until it takes root.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <footer style={{ 
        backgroundColor: '#0B2219', 
        color: '#FFFFFF', 
        padding: '30px 20px', 
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div className="footer-container" style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            alignItems: 'center',
            justifyContent: 'space-between', 
            gap: '20px', 
            marginBottom: '30px' 
          }}>
            
            <div style={{ flex: '0 0 auto', margin: '0 auto 0 0' }}>
              <img 
                src="/Logocompleto.png" 
                alt="Logo" 
                style={{ 
                  height: 'auto', 
                  width: '130px', 
                  filter: 'brightness(0) invert(1)' 
                }} 
              />
            </div>

            <div className="footer-data-container" style={{ 
              display: 'flex', 
              flexDirection: 'row', 
              flexWrap: 'wrap', 
              gap: 'clamp(15px, 3vw, 50px)', 
              alignItems: 'center',
              justifyContent: 'flex-end',
              flex: '1'
            }}>
              
              <div style={{ minWidth: '100px' }}>
                <h4 style={{ color: '#FFB703', margin: '0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Location</h4>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>Atlanta, GA</p>
              </div>

              <div style={{ minWidth: '140px' }}>
                <h4 style={{ color: '#FFB703', margin: '0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Phone</h4>
                <a href="tel:+17622440708" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '16px', fontWeight: '900' }}>
                  +1 (762) 244-0708
                </a>
              </div>

              <div style={{ minWidth: '150px' }}>
                <h4 style={{ color: '#FFB703', margin: '0', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Email</h4>
                <a href="mailto:usalandgl@gmail.com" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>
                  usalandgl@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div style={{ 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            paddingTop: '20px', 
            fontSize: '10px', 
            color: '#9CA3AF',
            textAlign: 'center'
          }}>
            © {currentYear || '2026'} Green Landscaping & Irrigation LLC. All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}

// --- ESTILOS ---
const inputStyle = { padding: '15px', borderRadius: '12px', border: '1px solid #D1D5DB', fontSize: '16px', outline: 'none', width: '100%', boxSizing: 'border-box', backgroundColor: '#FFFFFF', fontFamily: 'sans-serif' };
const submitButtonStyle = { backgroundColor: '#0B2219', color: '#FFFFFF', padding: '18px', borderRadius: '12px', fontWeight: '900', fontSize: '16px', border: 'none', cursor: 'pointer', marginTop: '10px' };
const cardStyle = { height: 'clamp(300px, 40vh, 400px)', backgroundColor: '#FFFFFF', borderRadius: '30px', overflow: 'hidden', position: 'relative', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' };
const imageStyle = { width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 1s ease-in-out', position: 'absolute', inset: 0 };
const badgeStyle = { position: 'absolute', bottom: '20px', left: '20px', backgroundColor: '#FFFFFF', color: '#0B2219', padding: '10px 20px', borderRadius: '12px', fontWeight: '900', fontSize: '14px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)', zIndex: 30 };

const reviewCardStyle = { backgroundColor: '#F9FAFB', padding: '15px', borderRadius: '15px', border: '1px solid #E5E7EB' };
const reviewFormWrapperStyle = { backgroundColor: '#F3F4F6', padding: '20px', borderRadius: '20px', border: '1px solid #D1D5DB' };

const blogCardStyle = { backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' };
const blogTagStyle = { backgroundColor: '#FFB703', color: '#0B2219', padding: '2px 8px', borderRadius: '5px', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase' };
const blogTitleStyle = { margin: '8px 0 5px 0', fontSize: '16px', fontWeight: '900', color: '#0B2219' };
const blogTextStyle = { margin: 0, fontSize: '13px', color: '#4B5563', lineHeight: '1.4' };