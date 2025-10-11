import React, { useState } from 'react';
import './css/Dashboard.css';

const Dashboard = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Express API Server',
      language: 'nodejs',
      lastModified: '2 hours ago',
      icon: 'fab fa-node-js'
    },
    {
      id: 2,
      name: 'Data Analysis Tool',
      language: 'python',
      lastModified: '1 day ago',
      icon: 'fab fa-python'
    },
    {
      id: 3,
      name: 'React Todo App',
      language: 'javascript',
      lastModified: '3 days ago',
      icon: 'fab fa-js-square'
    },
    {
      id: 4,
      name: 'Portfolio Website',
      language: 'html',
      lastModified: '1 week ago',
      icon: 'fas fa-file-code'
    },
    {
      id: 5,
      name: 'E-commerce Backend',
      language: 'nodejs',
      lastModified: '2 weeks ago',
      icon: 'fab fa-node-js'
    },
    {
      id: 6,
      name: 'Machine Learning Model',
      language: 'python',
      lastModified: '3 weeks ago',
      icon: 'fab fa-python'
    }
  ]);

  const [activeNav, setActiveNav] = useState('dashboard');

  const handleCreateProject = () => {
    const newProject = {
      id: projects.length + 1,
      name: `New Project ${projects.length + 1}`,
      language: 'javascript',
      lastModified: 'Just now',
      icon: 'fas fa-code'
    };
    setProjects([newProject, ...projects]);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== projectId));
    }
  };

  const handleOpenProject = (projectId) => {
    // In a real app, this would navigate to the IDE workspace
    alert(`Opening project ${projectId}`);
  };

  const handleRenameProject = (projectId) => {
    const newName = prompt('Enter new project name:');
    if (newName && newName.trim()) {
      setProjects(projects.map(project => 
        project.id === projectId 
          ? { ...project, name: newName.trim() }
          : project
      ));
    }
  };

  return (
    <div className="dashboard">
      <DashboardHeader />
      <div className="dashboard-content">
        <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />
        <MainContent 
          projects={projects}
          onCreateProject={handleCreateProject}
          onOpenProject={handleOpenProject}
          onRenameProject={handleRenameProject}
          onDeleteProject={handleDeleteProject}
        />
      </div>
    </div>
  );
};

// Dashboard Header Component
const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">CloudIDE</div>
          <div className="header-user">
            <span className="user-email">john.doe@example.com</span>
            <div className="user-avatar">JD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ activeNav, setActiveNav }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fas fa-th-large' },
    { id: 'settings', label: 'Settings', icon: 'fas fa-cog' },
    { id: 'logout', label: 'Log Out', icon: 'fas fa-sign-out-alt' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <i className="fas fa-code"></i>
        <span>CloudIDE</span>
      </div>
      <ul className="sidebar-nav">
        {navItems.map(item => (
          <li key={item.id}>
            <a 
              href="#" 
              className={activeNav === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                if (item.id === 'logout') {
                  alert('Logging out...');
                } else {
                  setActiveNav(item.id);
                }
              }}
            >
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <div className="user-info">
          <div className="user-avatar-small">JD</div>
          <div className="user-details">
            <div className="user-name">John Doe</div>
            <div className="user-status">Online</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Content Component
const MainContent = ({ projects, onCreateProject, onOpenProject, onRenameProject, onDeleteProject }) => {
  return (
    <div className="main-content">
      <div className="content-header">
        <h1>Your Projects</h1>
        <button className="btn btn-primary" onClick={onCreateProject}>
          <i className="fas fa-plus"></i> Create New Project
        </button>
      </div>
      
      <div className="projects-grid">
        {projects.length === 0 ? (
          <div className="empty-state">
            <i className="fas fa-folder-open"></i>
            <h3>No projects yet</h3>
            <p>Create your first project to get started</p>
            <button className="btn btn-primary" onClick={onCreateProject}>
              Create Project
            </button>
          </div>
        ) : (
          projects.map(project => (
            <ProjectCard 
              key={project.id}
              project={project}
              onOpen={onOpenProject}
              onRename={onRenameProject}
              onDelete={onDeleteProject}
            />
          ))
        )}
      </div>

      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <i className="fas fa-code activity-icon"></i>
            <div className="activity-content">
              <p>You created <strong>Express API Server</strong></p>
              <span className="activity-time">2 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <i className="fas fa-edit activity-icon"></i>
            <div className="activity-content">
              <p>You modified <strong>Data Analysis Tool</strong></p>
              <span className="activity-time">1 day ago</span>
            </div>
          </div>
          <div className="activity-item">
            <i className="fas fa-play activity-icon"></i>
            <div className="activity-content">
              <p>You ran <strong>React Todo App</strong></p>
              <span className="activity-time">3 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, onOpen, onRename, onDelete }) => {
  const getLanguageColor = (language) => {
    const colors = {
      nodejs: '#68a063',
      python: '#3572A5',
      javascript: '#f1e05a',
      html: '#e34c26'
    };
    return colors[language] || '#007ACC';
  };

  return (
    <div className="project-card">
      <div className="project-header">
        <div 
          className="project-icon"
          style={{ color: getLanguageColor(project.language) }}
        >
          <i className={project.icon}></i>
        </div>
        <div className="project-actions">
          <button 
            className="btn-icon"
            onClick={() => onRename(project.id)}
            title="Rename project"
          >
            <i className="fas fa-edit"></i>
          </button>
          <button 
            className="btn-icon"
            onClick={() => onDelete(project.id)}
            title="Delete project"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
      <div className="project-name">{project.name}</div>
      <div className="project-meta">
        <i className="fas fa-clock"></i>
        Last edited {project.lastModified}
      </div>
      <div className="project-actions-main">
        <button 
          className="btn btn-primary btn-sm"
          onClick={() => onOpen(project.id)}
        >
          <i className="fas fa-folder-open"></i> Open
        </button>
        <button className="btn btn-secondary btn-sm">
          <i className="fas fa-share"></i> Share
        </button>
      </div>
    </div>
  );
};

export default Dashboard;