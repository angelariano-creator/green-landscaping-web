"use client";
import React, { useState } from 'react';

export default function PromoLanding() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de envío
    setSubmitted(true);
  };

  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      color: '#FFFFFF', 
      backgroundColor: '#0B2219', 
      minHeight: '100vh',
      paddingBottom: '50px' 
    }}>
      
      {/* HEADER */}
      <header style={{ padding: '30px 20px', textAlign: 'center' }}>
        <img 
          src="/Logocompleto.png" 
          alt="Green Landscaping Logo" 
          style={{ height: '60px', filter: 'brightness(0) invert(1)' }} 
        />
      </header>

      {/* SECCIÓN DE OFERTA */}
      <section style={{ padding: '20px', textAlign: 'center' }}>
        <div style={{
          backgroundColor: '#FFB703', 
          color: '#0B2219', 
          padding: '6px 15px', 
          borderRadius: '20px', 
          fontWeight: 'bold', 
          fontSize: '12px',
          display: 'inline-block',
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>
          Limited Time Offer
        </div>

        <h1 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '15px' }}>
          Get 10% Off & A Free Estimate
        </h1>
        <p style={{ fontSize: '17px', opacity: 0.9, marginBottom: '40px', maxWidth: '400px', margin: '0 auto 40px' }}>
          Sign up below and we will contact you to transform your garden in Atlanta.
        </p>

        {/* TARJETA DEL FORMULARIO */}
        <div style={{ 
          backgroundColor: '#FFFFFF', 
          borderRadius: '20px', 
          padding: '35px 25px', 
          maxWidth: '400px', 
          margin: '0 auto',
          boxShadow: '0 15px 35px rgba(0,0,0,0.4)'
        }}>
          {!submitted ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ textAlign: 'left' }}>
                <label style={{ color: '#0B2219', fontSize: '14px', fontWeight: 'bold' }}>Full Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your name" 
                  required 
                  style={{ width: '100%', padding: '15px', marginTop: '5px', borderRadius: '10px', border: '1px solid #CCC', fontSize: '16px', color: '#333', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ color: '#0B2219', fontSize: '14px', fontWeight: 'bold' }}>Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="(000) 000-0000" 
                  required 
                  style={{ width: '100%', padding: '15px', marginTop: '5px', borderRadius: '10px', border: '1px solid #CCC', fontSize: '16px', color: '#333', boxSizing: 'border-box' }}
                />
              </div>

              <button 
                type="submit" 
                style={{ 
                  backgroundColor: '#FFB703', 
                  color: '#0B2219', 
                  padding: '20px', 
                  borderRadius: '10px', 
                  border: 'none', 
                  fontWeight: '900', 
                  fontSize: '18px', 
                  cursor: 'pointer',
                  marginTop: '10px'
                }}>
                GET MY DISCOUNT NOW
              </button>
            </form>
          ) : (
            <div style={{ color: '#0B2219', padding: '20px 0' }}>
              <div style={{ fontSize: '50px', marginBottom: '10px' }}>✅</div>
              <h3 style={{ fontSize: '24px', margin: '0 0 10px 0' }}>Perfect!</h3>
              <p>We'll call you soon to schedule your free estimate.</p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ marginTop: '50px', textAlign: 'center' }}>
        <a href="tel:+17622440708" style={{ color: '#FFB703', textDecoration: 'none', fontWeight: '800', fontSize: '20px' }}>
          +1 (762) 244-0708
        </a>
        <p style={{ fontSize: '11px', marginTop: '10px', opacity: 0.5 }}>
          © 2026 Green Landscaping & Irrigation LLC.
        </p>
      </footer>
    </div>
  );
}