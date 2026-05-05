"use client";
import React, { useState } from "react";

export default function Promo() {

  const [submitted, setSubmitted] = useState(false);

  const [reviews, setReviews] = useState([
    { name: "John D.", rating: 5, comment: "Excellent service! My garden in Buckhead looks amazing." },
    { name: "Sarah M.", rating: 5, comment: "Very professional team and high-quality irrigation system." }
  ]);

  const [newReview, setNewReview] = useState({ name: '', rating: 5, comment: '' });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews([newReview, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '' });
    alert("Thank you for your review!");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

      {/* OFERTA */}
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

        <p style={{ 
          fontSize: '17px', 
          opacity: 0.9, 
          maxWidth: '400px', 
          margin: '0 auto 40px' 
        }}>
          Sign up below and we will contact you to transform your garden in Atlanta.
        </p>

        {/* FORM */}
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
                  required 
                  style={{ width: '100%', padding: '15px', marginTop: '5px', borderRadius: '10px', border: '1px solid #CCC' }}
                />
              </div>

              <div style={{ textAlign: 'left' }}>
                <label style={{ color: '#0B2219', fontSize: '14px', fontWeight: 'bold' }}>Phone Number</label>
                <input 
                  type="tel" 
                  required 
                  style={{ width: '100%', padding: '15px', marginTop: '5px', borderRadius: '10px', border: '1px solid #CCC' }}
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
                  cursor: 'pointer'
                }}>
                GET MY DISCOUNT NOW
              </button>

            </form>
          ) : (
            <div style={{ color: '#0B2219', padding: '20px 0' }}>
              <div style={{ fontSize: '50px' }}>✅</div>
              <h3>Perfect!</h3>
              <p>We'll call you soon to schedule your free estimate.</p>
            </div>
          )}
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: '60px 20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '30px' }}>
          What our clients say
        </h2>
        
        <div style={{ display: 'grid', gap: '20px', marginBottom: '50px' }}>
          {reviews.map((rev, index) => (
            <div key={index} style={{ backgroundColor: '#163a2c', padding: '20px', borderRadius: '15px' }}>
              <div style={{ color: '#FFB703' }}>{"★".repeat(rev.rating)}</div>
              <p>"{rev.comment}"</p>
              <p>— {rev.name}</p>
            </div>
          ))}
        </div>

        {/* FORM REVIEW */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', padding: '30px', color: '#0B2219' }}>
          <h3 style={{ textAlign: 'center' }}>Leave your review</h3>

          <form onSubmit={handleReviewSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            
            <input 
              type="text" 
              placeholder="Your Name"
              required 
              value={newReview.name}
              onChange={(e) => setNewReview({...newReview, name: e.target.value})}
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #CCC' }}
            />

            <textarea 
              placeholder="Your recommendation..."
              required
              value={newReview.comment}
              onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #CCC' }}
            />

            <button type="submit" style={{ backgroundColor: '#0B2219', color: '#FFF', padding: '15px', borderRadius: '8px' }}>
              POST REVIEW
            </button>

          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center' }}>
        <a href="tel:+17622440708" style={{ color: '#FFB703', fontSize: '20px' }}>
          +1 (762) 244-0708
        </a>
        <p style={{ fontSize: '11px', opacity: 0.5 }}>
          © 2026 Green Landscaping & Irrigation LLC.
        </p>
      </footer>

    </div>
  );
}