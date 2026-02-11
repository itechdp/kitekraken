import React, { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [workflows, setWorkflows] = useState([]);
  const [filteredWorkflows, setFilteredWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [processingIds, setProcessingIds] = useState(new Set());

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  // Fetch workflows on mount
  useEffect(() => {
    fetchWorkflows();
  }, []);

  // Auto-dismiss messages
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Fetch all workflows
  const fetchWorkflows = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('📥 Fetching workflows...');
      
      const response = await fetch(`${API_URL}/api/n8n/workflows`);
      
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      const workflows = data.data || [];
      
      setWorkflows(workflows);
      setFilteredWorkflows(workflows);
      console.log(`✅ Loaded ${workflows.length} workflows`);
      setSuccess(`✅ Loaded ${workflows.length} workflows`);
    } catch (err) {
      console.error('❌ Error:', err);
      setError(`Failed to load workflows: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Toggle workflow status
  const toggleWorkflow = async (workflowId, currentActive) => {
    try {
      setProcessingIds(prev => new Set(prev).add(workflowId));
      const action = currentActive ? 'deactivate' : 'activate';
      
      console.log(`🔄 ${action}ing: ${workflowId}`);
      
      const response = await fetch(
        `${API_URL}/api/n8n/workflows/${workflowId}/${action}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' } }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `Failed to ${action}`);
      }

      // Update local state
      const updated = workflows.map(w =>
        w.id === workflowId ? { ...w, active: !currentActive } : w
      );
      setWorkflows(updated);
      setFilteredWorkflows(updated.filter(w =>
        w.name.toLowerCase().includes(searchQuery.toLowerCase())
      ));

      console.log(`✅ ${action}d: ${workflowId}`);
      setSuccess(`✅ Workflow ${action}d`);
    } catch (err) {
      console.error('❌ Error:', err);
      setError(err.message);
    } finally {
      setProcessingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(workflowId);
        return newSet;
      });
    }
  };

  // Search filter
  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = workflows.filter(w =>
      w.name.toLowerCase().includes(query.toLowerCase()) ||
      w.id.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredWorkflows(filtered);
  };

  // Bulk actions
  const activateAll = async () => {
    if (!confirm('Activate all inactive workflows?')) return;
    const inactive = workflows.filter(w => !w.active);
    for (const w of inactive) {
      await toggleWorkflow(w.id, false);
      await new Promise(r => setTimeout(r, 200));
    }
  };

  const deactivateAll = async () => {
    if (!confirm('Deactivate all active workflows?')) return;
    const active = workflows.filter(w => w.active);
    for (const w of active) {
      await toggleWorkflow(w.id, true);
      await new Promise(r => setTimeout(r, 200));
    }
  };

  // Stats
  const stats = {
    total: workflows.length,
    active: workflows.filter(w => w.active).length,
    inactive: workflows.filter(w => !w.active).length,
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div>
            <h1>🚀 n8n Workflow Manager</h1>
            <p>Manage and control your workflows</p>
          </div>

          {/* Stats */}
          <div className="stats">
            <div className="stat">
              <div className="stat-value">{stats.total}</div>
              <div className="stat-label">Total</div>
            </div>
            <div className="stat active">
              <div className="stat-value">{stats.active}</div>
              <div className="stat-label">Active</div>
            </div>
            <div className="stat inactive">
              <div className="stat-value">{stats.inactive}</div>
              <div className="stat-label">Inactive</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <button onClick={fetchWorkflows} disabled={loading} className="btn btn-primary">
            🔄 Refresh
          </button>
          <button onClick={activateAll} className="btn btn-success">
            ✓ Activate All
          </button>
          <button onClick={deactivateAll} className="btn btn-danger">
            ✗ Deactivate All
          </button>
        </div>
      </header>

      {/* Messages */}
      {error && <div className="message error">❌ {error}</div>}
      {success && <div className="message success">{success}</div>}

      {/* Search */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="search-input"
        />
        <span className="result-count">
          {filteredWorkflows.length} / {workflows.length}
        </span>
      </div>

      {/* Content */}
      <main className="main">
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Loading workflows...</p>
          </div>
        ) : filteredWorkflows.length === 0 ? (
          <div className="empty">
            <p>📋 No workflows found</p>
          </div>
        ) : (
          <div className="grid">
            {filteredWorkflows.map((workflow) => (
              <div key={workflow.id} className={`card ${workflow.active ? 'active' : 'inactive'}`}>
                <div className="card-header">
                  <div>
                    <h3>{workflow.name}</h3>
                    <code>{workflow.id}</code>
                  </div>
                  <span className={`badge ${workflow.active ? 'active' : 'inactive'}`}>
                    {workflow.active ? '● Active' : '○ Inactive'}
                  </span>
                </div>

                <div className="card-meta">
                  <div>Created: {new Date(workflow.createdAt).toLocaleDateString()}</div>
                  <div>Updated: {new Date(workflow.updatedAt).toLocaleDateString()}</div>
                </div>

                <button
                  onClick={() => toggleWorkflow(workflow.id, workflow.active)}
                  disabled={processingIds.has(workflow.id)}
                  className={`btn-action ${workflow.active ? 'deactivate' : 'activate'}`}
                >
                  {processingIds.has(workflow.id) ? '⏳ Processing...' : 
                   workflow.active ? '🔴 Deactivate' : '🟢 Activate'}
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
