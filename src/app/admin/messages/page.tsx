"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Messages() {
  const [messages, setMessages] = useState<any[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    setIsAuthorized(true);
    
    fetch('http://localhost:5005/api/v1/contact')
      .then(res => res.json())
      .then(data => setMessages(data))
      .catch(err => console.error(err));
  }, [router]);

  if (!isAuthorized) return null;

  return (
    <div style={{ padding: '40px', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ fontSize: '2rem', color: '#0b132b' }}>Contact Messages</h1>
            <p style={{ color: '#64748b' }}>Manage all inquiries from the contact form.</p>
          </div>
          <Link href="/admin/dashboard" style={{ padding: '10px 20px', background: '#0b132b', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>
            ← Back to Dashboard
          </Link>
        </div>

        <div style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                <th style={{ textAlign: 'left', padding: '15px 10px', color: '#64748b' }}>Name</th>
                <th style={{ textAlign: 'left', padding: '15px 10px', color: '#64748b' }}>Email</th>
                <th style={{ textAlign: 'left', padding: '15px 10px', color: '#64748b' }}>Subject</th>
                <th style={{ textAlign: 'left', padding: '15px 10px', color: '#64748b' }}>Message</th>
                <th style={{ textAlign: 'left', padding: '15px 10px', color: '#64748b' }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {messages.length === 0 ? (
                <tr><td colSpan={5} style={{ textAlign: 'center', padding: '30px', color: '#64748b' }}>No messages found.</td></tr>
              ) : (
                messages.map((msg, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '15px 10px', fontWeight: '600', color: '#0b132b' }}>{msg.name}</td>
                    <td style={{ padding: '15px 10px', color: '#475569' }}>{msg.email}</td>
                    <td style={{ padding: '15px 10px' }}><span style={{ background: '#fff7ed', color: '#ff6b00', padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600' }}>{msg.subject}</span></td>
                    <td style={{ padding: '15px 10px', color: '#64748b', maxWidth: '300px' }}>{msg.message}</td>
                    <td style={{ padding: '15px 10px', color: '#94a3b8', fontSize: '0.9rem' }}>{new Date(msg.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}