import React, { useState } from 'react';
import '../css/CreateProjectPage.css';
import { projectCreateRequest } from '../../services/project.service';
import { AllState } from '../../context/Context';
import constantData from '../../utils/constant.utils';


const CreateProjectForm = () => {
const { dispatch } = AllState();
  const [formData, setFormData] = useState({
    name: '',
    language: 'nodejs',
    template: 'blank',
    visibility: 'public'
  });

  const [errors, setErrors] = useState({});

  const languages = [
    { value: 'javascript', label: 'JavaScript', icon: 'fab fa-js' },
    { value: 'python', label: 'Python', icon: 'fab fa-python' },
    { value: 'nodejs', label: 'Node.js', icon: 'fab fa-node-js' },
    { value: 'html', label: 'HTML/CSS', icon: 'fab fa-html5' }
  ];


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Project name is required';
    } else if (formData.name.length < 3) {
      newErrors.name = 'Must be at least 3 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    if (validateForm()) {
        const crateData={
            name:formData.name,
            language:formData.language
        }
       const apiRes=await projectCreateRequest(crateData);
       dispatch({ type: constantData.reducerActionType.notification, payload: { notification: { message: apiRes.message, type: apiRes.status } } });
    }
  };

  return (
    <div className="create-project-form-container">
      <div className="form-header">
        <div className="header-icon">
          <i className="fas fa-plus"></i>
        </div>
        <div className="header-text">
          <h2>Create New Project</h2>
          <p>Get started in seconds</p>
        </div>
      </div>

      <form className="create-project-form" onSubmit={handleSubmit}>
        {/* Project Name */}
        <div className="form-row">
          <div className="form-group compact">
            <label htmlFor="project-name" className="form-label">
              Project Name *
            </label>
            <div className="input-wrapper compact">
              <i className="fas fa-folder input-icon"></i>
              <input
                type="text"
                id="project-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`form-input compact ${errors.name ? 'error' : ''}`}
                placeholder="my-project"
                autoFocus
              />
            </div>
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
        </div>

        {/* Language and Template */}
        <div className="form-row columns">
          <div className="form-group compact">
            <label className="form-label">Language</label>
            <div className="option-grid compact">
              {languages.map(lang => (
                <label key={lang.value} className="option-item compact">
                  <input
                    type="radio"
                    name="language"
                    value={lang.value}
                    checked={formData.language === lang.value}
                    onChange={handleInputChange}
                    className="option-input"
                  />
                  <div className="option-card compact">
                    <i className={lang.icon}></i>
                    <span>{lang.label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Visibility */}
        <div className="form-row">
          <div className="form-group compact">
            <label className="form-label">Visibility</label>
            <div className="visibility-options compact">
              <label className="visibility-option compact">
                <input
                  type="radio"
                  name="visibility"
                  value="private"
                  checked={formData.visibility === 'private'}
                  onChange={handleInputChange}
                />
                <div className="visibility-card compact">
                  <i className="fas fa-lock"></i>
                  <div>
                    <div className="visibility-title">Private</div>
                    <div className="visibility-description">Only you</div>
                  </div>
                </div>
              </label>
              <label className="visibility-option compact">
                <input
                  type="radio"
                  name="visibility"
                  value="public"
                  checked={formData.visibility === 'public'}
                  onChange={handleInputChange}
                />
                <div className="visibility-card compact">
                  <i className="fas fa-globe"></i>
                  <div>
                    <div className="visibility-title">Public</div>
                    <div className="visibility-description">Everyone</div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="quick-tips">
          <div className="tip">
            <i className="fas fa-lightbulb"></i>
            <span>Use lowercase letters and hyphens for project names</span>
          </div>
        </div>

        {/* Form Actions */}
        <div className="form-actions compact">
          <button type="button" className="btn-secondary compact">
            Cancel
          </button>
          <button type="submit" className="btn-primary compact">
            <i className="fas fa-plus"></i>
            Create Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProjectForm;