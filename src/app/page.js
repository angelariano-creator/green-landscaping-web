"use client";
import React, { useState, useEffect } from 'react';

// 1. COMPONENTE PARA LAS TARJETAS DE PROYECTOS
function ProjectCard({ images, title }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

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
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', margin: 0, padding: 0, fontFamily: 'sans-serif' }}>
      
      {/* 1. NAVBAR CORREGIDO */}
      <nav style={{ 
        backgroundColor: '#FFFFFF',        
        minHeight: '80px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '10px 20px', 
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
        flexWrap: 'wrap', 
        gap: '15px'
      }}>
        
        {/* LOGO AREA - Ahora sin absolute para que no se encime */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src="/Imagenlogo.png" 
            alt="Logo Icon" 
            style={{ height: '50px', width: 'auto' }} 
          />
          <img 
            src="/Letralogo.png" 
            alt="Green Landscaping" 
            style={{ height: '40px', width: 'auto', filter: 'brightness(0.1)' }} 
          />
        </div>

        {/* CONTACT & ACTION - Se alinean solos a la derecha */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '20px', 
          flexWrap: 'wrap',
          justifyContent: 'flex-end'
        }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '10px', color: '#6B7280', fontWeight: 'bold' }}>FREE ESTIMATE:</div>
            <div style={{ fontSize: '14px', color: '#0B2219', fontWeight: '900' }}>+1 (762) 244-0708</div>
          </div>
          <button 
            onClick={() => scrollToSection('estimate-section')}
            style={{ 
              backgroundColor: '#FFB703', 
              color: '#0B2219', 
              padding: '10px 20px', 
              borderRadius: '8px', 
              fontWeight: '900', 
              fontSize: '13px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            BOOK NOW
          </button>
        </div>
      </nav>

      {/* 2. HERO SECTION CORREGIDO */}
      <section style={{ padding: '20px', backgroundColor: '#F9FAFB' }}>
        <div style={{ 
          position: 'relative', 
          maxWidth: '1400px', 
          margin: '0 auto', 
          minHeight: '65vh', // Altura mínima flexible
          borderRadius: '40px', 
          overflow: 'hidden', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          border: '8px solid #FFFFFF',
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
            <p style={{ color: '#FFFFFF', fontSize: '18px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
              Your home is your sanctuary. We provide the expert care your landscape deserves.
            </p>
            
            {/* Botones responsivos: En móvil se ponen uno bajo el otro */}
            <div style={{ 
              display: 'flex', 
              gap: '15px', 
              justifyContent: 'center',
              flexWrap: 'wrap' // Crucial para móvil
            }}>
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
      {/* 3. TRUST BAR */}
      <div style={{ textAlign: 'center', padding: '30px', color: '#6B7280', fontSize: '14px', letterSpacing: '1px', fontWeight: 'bold' }}>
        <span style={{ color: '#FFB703' }}>★★★★★</span> 5-STAR GOOGLE RATING • PROFESSIONAL IRRIGATION & SOD
      </div>

      {/* 4. GET ESTIMATE SECTION */}
      <section id="estimate-section" style={{ padding: '80px 20px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
          
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: '900', color: '#0B2219', lineHeight: '1.2', marginBottom: '25px' }}>
              Ready to Transform <br/> 
              <span style={{ color: '#FFB703' }}>Your Landscape?</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#4B5563', lineHeight: '1.6', marginBottom: '30px' }}>
              Tell us about your project. Whether it's a new irrigation system, sod installation, or a complete garden redesign, our experts are ready to help.
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
            minWidth: '350px', 
            backgroundColor: '#F9FAFB', 
            padding: '40px', 
            borderRadius: '30px', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
            border: '1px solid #E5E7EB'
          }}>
            <form action="https://formspree.io/f/xeevogog" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="text" name="name" placeholder="Full Name" required 
                style={inputStyle} 
              />
              <input 
                type="email" name="email" placeholder="Email Address" required 
                style={inputStyle}
              />
              <input type="tel" name="phone" placeholder="Phone Number" style={inputStyle} />
              <select name="service" style={inputStyle}>
                <option value="">Select Service</option>
                <option value="irrigation">Irrigation System</option>
                <option value="sod">Sod Installation</option>
                <option value="maintenance">Lawn Maintenance</option>
                <option value="design">Landscape Design</option>
              </select>
              <textarea name="message" placeholder="Tell us about your project..." rows="3" style={inputStyle}></textarea>
              
              <button type="submit" style={{ 
                backgroundColor: '#0B2219', 
                color: '#FFFFFF', 
                padding: '18px', 
                borderRadius: '12px', 
                fontWeight: '900', 
                fontSize: '16px', 
                border: 'none', 
                cursor: 'pointer',
                marginTop: '10px',
                transition: 'background 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#153e2e'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0B2219'}
              >
                SEND REQUEST
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 5. PROJECTS SECTION */}
      <section id="projects-section" style={{ padding: '100px 20px', backgroundColor: '#F3F4F6', borderRadius: '60px 60px 0 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '42px', color: '#0B2219', fontWeight: '900', marginBottom: '15px' }}>Our Latest Work</h2>
          <p style={{ textAlign: 'center', color: '#6B7280', marginBottom: '50px', fontSize: '18px' }}>Quality landscaping that speaks for itself.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              <ProjectCard 
                title="Sod Installation" 
                images={['/Sod1.JPG', '/Sod2.JPG', '/Sod3.JPG', '/Sod4.JPG']} 
              />
              <ProjectCard 
                title="Irrigation Systems" 
                images={['/Irrigation1.JPG', '/Irrigation2.JPG', '/Irrigation3.JPG', '/Irrigation4.JPG']} 
              />
              <ProjectCard 
                title="Landscape Design" 
                images={['/Land1.JPG', '/Land2.JPG', '/Imagen2.JPG', '/Land3.JPG']} 
              />
          </div>
        </div>
      </section>

    </main>
  );
}

// --- ESTILOS ---
const inputStyle = {
  padding: '15px 20px',
  borderRadius: '12px',
  border: '1px solid #D1D5DB',
  fontSize: '16px',
  outline: 'none',
  width: '100%',
  backgroundColor: '#FFFFFF',
  fontFamily: 'sans-serif',
  transition: 'border-color 0.3s'
};

const cardStyle = {
  height: '400px',
  backgroundColor: '#FFFFFF',
  borderRadius: '30px',
  overflow: 'hidden',
  position: 'relative',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'opacity 1s ease-in-out',
  position: 'absolute',
  inset: 0
};

const badgeStyle = {
  position: 'absolute',
  bottom: '20px',
  left: '20px',
  backgroundColor: '#FFFFFF',
  color: '#0B2219',
  padding: '10px 20px',
  borderRadius: '12px',
  fontWeight: '900',
  fontSize: '14px',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  zIndex: 30
};