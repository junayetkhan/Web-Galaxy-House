"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PortfolioManagement() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Web Development');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [client, setClient] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    setIsAuthorized(true);
    fetchProjects();
  }, [router]);

  const fetchProjects = async () => {
    const res = await fetch('http://localhost:5005/api/v1/portfolio');
    if (res.ok) {
      const data = await res.json();
      setProjects(data);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newProject = { title, category, image, description, client, date };
    
    await fetch('http://localhost:5005/api/v1/portfolio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProject),
    });

    setShowForm(false);
    fetchProjects();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      await fetch(`http://localhost:5005/api/v1/portfolio/${id}`, { method: 'DELETE' });
      fetchProjects();
    }
  };

  if (!isAuthorized) return null;

  return (
    <div style={{ padding: '40px', background: '#f8fafc', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <div>
            <h1 style={{ fontSize: '2rem', color: '#0b132b' }}>Portfolio Management</h1>
            <p style={{ color: '#64748b' }}>Create, edit and delete portfolio projects.</p>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button onClick={() => setShowForm(!showForm)} style={{ padding: '10px 20px', background: '#ff6b00', color: 'white', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
              {showForm ? 'Close Form' : '+ Add New Project'}
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
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Project Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Category</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>UI/UX Design</option>
                  <option>Branding</option>
                </select>
              </div>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Image URL</label>
              <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required placeholder="https://..." style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={3} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Client Name</label>
                <input type="text" value={client} onChange={(e) => setClient(e.target.value)} required style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600' }}>Date</label>
                <input type="text" value={date} onChange={(e) => setDate(e.target.value)} required placeholder="e.g. Jan 2025" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
              </div>
            </div>
            <button type="submit" style={{ padding: '12px 30px', background: '#ff6b00', color: 'white', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
              Save Project
            </button>
          </form>
        )}

        <div style={{ background: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #f1f5f9' }}>
                <th style={{ textAlign: 'left', padding: '15px 10px', color: '#64748b' }}>Title</th>
                <th style={{ textAlign: 'left', padding: '15px 10px', color: '#64748b' }}>Category</th>
                <th style={{ textAlign: 'left', padding: '15px 10px', color: '#64748b' }}>Client</th>
                <th style={{ textAlign: 'left', padding: '15px 10px', color: '#64748b' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.length === 0 ? (
                <tr><td colSpan={4} style={{ textAlign: 'center', padding: '30px', color: '#64748b' }}>No projects found.</td></tr>
              ) : (
                projects.map((project) => (
                  <tr key={project._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '15px 10px', fontWeight: '600', color: '#0b132b' }}>{project.title}</td>
                    <td style={{ padding: '15px 10px', color: '#475569' }}>{project.category}</td>
                    <td style={{ padding: '15px 10px', color: '#475569' }}>{project.client}</td>
                    <td style={{ padding: '15px 10px' }}>
                      <button onClick={() => handleDelete(project._id)} style={{ padding: '6px 12px', background: '#fef2f2', color: '#dc2626', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}>Delete</button>
                    </td>
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