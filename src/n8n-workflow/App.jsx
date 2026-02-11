import { useState, useEffect } from 'react';
import { RefreshCw, Play, Pause, BarChart3, Activity, AlertCircle, Search } from 'lucide-react';
import './App.css';

export default function WorkflowManager() {
  const [workflows, setWorkflows] = useState([]);
  const [filteredWorkflows, setFilteredWorkflows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [stats, setStats] = useState({ total: 0, active: 0, inactive: 0 });
  const [actionInProgress, setActionInProgress] = useState(null);

  // Use environment variable for API URL - defaults to relative path for Vercel
  // For local development with backend server, set REACT_APP_API_URL=http://localhost:5000
  const API_URL = process.env.REACT_APP_API_URL || '';

 
  const fetchWorkflows = async () => {
  setLoading(true);
  setError('');
  try {
    const response = await fetch(`${API_URL}/api/workflows`);
    if (!response.ok) throw new Error('Failed to fetch workflows');

    const raw = await response.json();

   
    const workflowList = Array.isArray(raw) ? raw : raw.data || [];

    console.log('Frontend received workflows:', workflowList);

    setWorkflows(workflowList);
    setFilteredWorkflows(workflowList);
    updateStats(workflowList);
  } catch (err) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
};


 
  const updateStats = (workflowList) => {
    const active = workflowList.filter(w => w.active).length;
    setStats({
      total: workflowList.length,
      active,
      inactive: workflowList.length - active,
    });
  };

 
  const handleSearch = (value) => {
    setSearch(value);
    if (value.trim() === '') {
      setFilteredWorkflows(workflows);
    } else {
      const filtered = workflows.filter(w =>
        w.name.toLowerCase().includes(value.toLowerCase()) ||
        w.id.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredWorkflows(filtered);
    }
  };

  
  const toggleWorkflow = async (workflowId, action) => {
    setActionInProgress(workflowId);
    try {
      const response = await fetch(`${API_URL}/api/workflows?id=${workflowId}&action=${action}`, { 
        method: 'POST' 
      });
      if (!response.ok) throw new Error(`Failed to ${action} workflow`);
      
      await fetchWorkflows();
    } catch (err) {
      setError(`Error: ${err.message}`);
    } finally {
      setActionInProgress(null);
    }
  };

  const bulkToggle = async (action) => {
    setActionInProgress('bulk');
    try {
      const toToggle = workflows.filter(w => 
        action === 'activate' ? !w.active : w.active
      );
      
      for (const workflow of toToggle) {
        await fetch(`${API_URL}/api/workflows?id=${workflow.id}&action=${action}`, { 
          method: 'POST' 
        });
      }
      
      await fetchWorkflows();
    } catch (err) {
      setError(`Bulk ${action} failed`);
    } finally {
      setActionInProgress(null);
    }
  };

  useEffect(() => {
    fetchWorkflows();
    const interval = setInterval(fetchWorkflows, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {}
      <header className="header">
        <div className="header-container">
          <div className="header-title">
            <div className="icon-wrapper">
              <BarChart3 size={32} />
            </div>
            <div>
              <h1>Workflow Management</h1>
              <p>Mulla Ai ON TOP</p>
            </div>
          </div>
          <button 
            className="btn-refresh"
            onClick={fetchWorkflows}
            disabled={loading}
          >
            <RefreshCw size={18} className={loading ? 'spinning' : ''} />
            Refresh
          </button>
        </div>

        {}
        <div className="stats-grid">
          <div className="stat-card total">
            <div className="stat-icon">
              <Activity size={24} />
            </div>
            <div>
              <div className="stat-value">{stats.total}</div>
              <div className="stat-label">Total Workflows</div>
            </div>
          </div>
          <div className="stat-card active">
            <div className="stat-icon">
              <Play size={24} />
            </div>
            <div>
              <div className="stat-value">{stats.active}</div>
              <div className="stat-label">Active</div>
            </div>
          </div>
          <div className="stat-card inactive">
            <div className="stat-icon">
              <Pause size={24} />
            </div>
            <div>
              <div className="stat-value">{stats.inactive}</div>
              <div className="stat-label">Inactive</div>
            </div>
          </div>
        </div>

        {}
        <div className="controls">
          <button 
            className="btn btn-activate"
            onClick={() => bulkToggle('activate')}
            disabled={actionInProgress}
          >
            <Play size={16} />
            Activate All
          </button>
          <button 
            className="btn btn-deactivate"
            onClick={() => bulkToggle('deactivate')}
            disabled={actionInProgress}
          >
            <Pause size={16} />
            Deactivate All
          </button>
        </div>
      </header>

      {}
      <main className="main">
        {}
        {error && (
          <div className="alert alert-error">
            <AlertCircle size={20} />
            <span>{error}</span>
            <button onClick={() => setError('')} className="alert-close">×</button>
          </div>
        )}

        {}
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search workflows by name or ID..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
          {search && (
            <button 
              className="search-clear"
              onClick={() => handleSearch('')}
            >
              ×
            </button>
          )}
        </div>

        {}
        {loading && (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading workflows...</p>
          </div>
        )}

        {}
        {!loading && filteredWorkflows.length > 0 && (
          <div className="workflows-grid">
            {filteredWorkflows.map(workflow => (
              <div key={workflow.id} className={`workflow-card ${workflow.active ? 'active' : 'inactive'}`}>
                <div className="card-header">
                  <div className="card-title-section">
                    <h3>{workflow.name}</h3>
                    <span className={`status-badge ${workflow.active ? 'active' : 'inactive'}`}>
                      {workflow.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="card-icon">
                    {workflow.active ? (
                      <Play size={24} className="icon-active" />
                    ) : (
                      <Pause size={24} className="icon-inactive" />
                    )}
                  </div>
                </div>

                <div className="card-meta">
                  <div className="meta-item">
                    <span className="meta-label">ID:</span>
                    <code>{workflow.id}</code>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Created:</span>
                    <span>{workflow.createdAt ? new Date(workflow.createdAt).toLocaleDateString() : 'N/A'}</span>
                  </div>
                </div>

                <div className="card-actions">
                  {!workflow.active ? (
                    <button
                      className="btn-action btn-activate-workflow"
                      onClick={() => toggleWorkflow(workflow.id, 'activate')}
                      disabled={actionInProgress === workflow.id}
                    >
                      <Play size={16} />
                      Activate
                    </button>
                  ) : (
                    <button
                      className="btn-action btn-deactivate-workflow"
                      onClick={() => toggleWorkflow(workflow.id, 'deactivate')}
                      disabled={actionInProgress === workflow.id}
                    >
                      <Pause size={16} />
                      Deactivate
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {}
        {!loading && filteredWorkflows.length === 0 && (
          <div className="empty-state">
            <AlertCircle size={48} />
            <h3>{search ? 'No workflows found' : 'No workflows available'}</h3>
            <p>{search ? `Try a different search term` : 'Your workflows will appear here'}</p>
          </div>
        )}
      </main>
    </div>
  );
}
