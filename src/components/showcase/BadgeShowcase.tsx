
import React from 'react';
import { Badge } from '../ui/badge';
import './BadgeShowcase.css';

export const BadgeShowcase = () => {
  return (
    <div className="badge-showcase">
      <div className="showcase-group">
        <h3 className="group-title">Variants</h3>
        <div className="badge-group">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      <div className="showcase-group">
        <h3 className="group-title">Usage Examples</h3>
        <div className="usage-examples">
          <div className="example-item">
            <span>Status: </span>
            <Badge variant="secondary">Active</Badge>
          </div>
          <div className="example-item">
            <span>Priority: </span>
            <Badge variant="destructive">High</Badge>
          </div>
          <div className="example-item">
            <span>Category: </span>
            <Badge variant="outline">Design</Badge>
          </div>
          <div className="example-item">
            <span>Version: </span>
            <Badge variant="default">v2.1.0</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
