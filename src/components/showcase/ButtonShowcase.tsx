
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Heart, Download, Trash2 } from 'lucide-react';
import './ButtonShowcase.css';

export const ButtonShowcase = () => {
  const [loading, setLoading] = useState(false);

  const handleLoadingDemo = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="button-showcase">
      <div className="showcase-group">
        <h3 className="group-title">Variants</h3>
        <div className="button-group">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className="showcase-group">
        <h3 className="group-title">Sizes</h3>
        <div className="button-group align-center">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="showcase-group">
        <h3 className="group-title">With Icons</h3>
        <div className="button-group">
          <Button>
            <Heart className="mr-2 h-4 w-4" />
            Like
          </Button>
          <Button variant="secondary">
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      <div className="showcase-group">
        <h3 className="group-title">States</h3>
        <div className="button-group">
          <Button disabled>Disabled</Button>
          <Button onClick={handleLoadingDemo} disabled={loading}>
            {loading ? 'Loading...' : 'Click for Loading'}
          </Button>
        </div>
      </div>
    </div>
  );
};
