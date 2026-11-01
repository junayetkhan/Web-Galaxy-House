"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function BlogManagement() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Published');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    setIsAuthorized(true);
    fetchBlogs();
  }, [router]);

  const fetchBlogs = async () => {
    const res = await fetch('http://localhost:5005/api/v1/blog');
    if (res.ok) {
      const data = await res.json();
      setBlogs(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newBlog = { title, category, image, description, content: description, status };
    
    await fetch('http://localhost:5005/api/v1/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlog),
    });

    setShowForm(false);
    fetchBlogs();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      await fetch(`http://localhost:5005/api/v1/blog/${id}`, { method: 'DELETE' });
      fetchBlogs();
    }
  };

  if (!isAuthorized) return null;

  return (
    <div style={{ padding: '40px', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ fontSize: '2rem', color: '#0b132b' }}>Blog Management</h1>
            <p style={{ color: '#64748b' }}>Create, edit and delete blog posts.</p>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button onClick={() => setShowForm(!showForm)} style={{ padding: '10px 20px', background: '#ff6b00', color: 'white', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
              {showForm ? 'Close Form' : '+ Add New Post'}
            </button>
            <Link href="/admin/dashboard" style={{ padding: '10px 20px', background: '#0b132b', color: 'white', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>
              ← Back
            </Link>
          </div>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} style={{ background: 'white', padding: '30px', borderRadius: '16px', marginBottom: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Post Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <option>Web Development</option>
                  <option>Digital Marketing</option>
                  <option>UI/UX Design</option>
                  <option>Business Tips</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Image URL</label>
              <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required placeholder="https://..." style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Short Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={3} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            </div>
            <button type="submit" style={{ padding: '12px 30px', background: '#ff6b00', color: 'white', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
              Save Post
            </button>
          </form>
        )}

        <div style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                <th style={{ textAlign: 'left', padding: '15px 10px', color: '#64748b' }}>Title</th>
                <th style={{ textAlign: 'left', padding: '15px 10px', color: '#64748b' }}>Category</th>
                <th style={{ textAlign: 'left', padding: '15px 10px', color: '#64748b' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '15px 10px', fontWeight: '600', color: '#0b132b' }}>{blog.title}</td>
                  <td style={{ padding: '15px 10px', color: '#475569' }}>{blog.category}</td>
                  <td style={{ padding: '15px 10px' }}>
                    <button onClick={() => handleDelete(blog._id)} style={{ padding: '6px 12px', background: '#fef2f2', color: '#dc2626', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}