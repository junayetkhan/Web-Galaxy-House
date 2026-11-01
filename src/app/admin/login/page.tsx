"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5005/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token); // টোকেন সেভ
        // 🛑 এখানে replace ব্যবহার করছি, যাতে লগইন পেজ হিস্ট্রি থেকে মুছে যায়
        window.location.replace('/admin/dashboard'); 
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('Server connection failed. Please check backend.');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0b132b', padding: '0 20px' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 25px 50px rgba(0,0,0,0.25)', width: '100%', maxWidth: '420px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <h1 style={{ fontSize: '1.8rem', color: '#0b132b', fontFamily: 'Outfit, sans-serif', fontWeight: '700' }}>Admin Login</h1>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginTop: '8px' }}>Sign in to manage your website</p>
        </div>

        {error && (
          <div style={{ background: '#fef2f2', color: '#dc2626', padding: '12px 16px', borderRadius: '10px', marginBottom: '20px', fontSize: '0.9rem', border: '1px solid #fecaca', textAlign: 'center' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#334155', marginBottom: '8px' }}>Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #e2e8f0', fontSize: '1rem', outline: 'none', background: '#f8fafc' }}
              placeholder="admin@webgalaxyhouse.com"
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', color: '#334155', marginBottom: '8px' }}>Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1.5px solid #e2e8f0', fontSize: '1rem', outline: 'none', background: '#f8fafc' }}
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            style={{ width: '100%', padding: '16px', borderRadius: '12px', border: 'none', background: 'linear-gradient(135deg, #ff8c00, #ff6b00)', color: 'white', fontSize: '1rem', fontWeight: '700', cursor: 'pointer', boxShadow: '0 8px 20px rgba(255,107,0,0.3)', marginTop: '10px' }}
          >
            Sign In
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '25px' }}>
          <a href="/" style={{ color: '#64748b', fontSize: '0.9rem', textDecoration: 'none', fontWeight: '500' }}>← Back to Website</a>
        </div>

      </div>
    </div>
  );
}