
import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import './InputShowcase.css';

export const InputShowcase = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    search: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="input-showcase">
      <div className="showcase-group">
        <h3 className="group-title">Basic Inputs</h3>
        <div className="input-group">
          <div className="input-field">
            <label className="input-label">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="input-field">
            <label className="input-label">Password</label>
            <Input
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="showcase-group">
        <h3 className="group-title">States</h3>
        <div className="input-group">
          <div className="input-field">
            <label className="input-label">Normal</label>
            <Input placeholder="Type something..." />
          </div>
          <div className="input-field">
            <label className="input-label">Disabled</label>
            <Input placeholder="Disabled input" disabled />
          </div>
        </div>
      </div>

      <div className="showcase-group">
        <h3 className="group-title">Form Example</h3>
        <form onSubmit={handleSubmit} className="form-example">
          <div className="input-field">
            <label className="input-label">Search</label>
            <Input
              type="search"
              placeholder="Search..."
              value={formData.search}
              onChange={(e) => setFormData({ ...formData, search: e.target.value })}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};
