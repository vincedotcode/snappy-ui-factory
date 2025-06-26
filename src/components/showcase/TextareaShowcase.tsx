
import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import './TextareaShowcase.css';

export const TextareaShowcase = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="textarea-showcase">
      <div className="showcase-group">
        <h3 className="group-title">Basic Textarea</h3>
        <div className="textarea-group">
          <div className="textarea-field">
            <Label htmlFor="default-textarea">Default Textarea</Label>
            <Textarea 
              id="default-textarea"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          
          <div className="textarea-field">
            <Label htmlFor="disabled-textarea">Disabled Textarea</Label>
            <Textarea 
              id="disabled-textarea"
              placeholder="This textarea is disabled"
              disabled
            />
          </div>
        </div>
      </div>

      <div className="showcase-group">
        <h3 className="group-title">Sizes & Variants</h3>
        <div className="textarea-variants">
          <div className="textarea-field">
            <Label htmlFor="small-textarea">Small Textarea</Label>
            <Textarea 
              id="small-textarea"
              placeholder="Small textarea..."
              className="min-h-[60px]"
            />
          </div>
          
          <div className="textarea-field">
            <Label htmlFor="large-textarea">Large Textarea</Label>
            <Textarea 
              id="large-textarea"
              placeholder="Large textarea for longer content..."
              className="min-h-[120px]"
            />
          </div>
        </div>
      </div>

      <div className="showcase-group">
        <h3 className="group-title">Form Example</h3>
        <div className="form-example">
          <div className="textarea-field">
            <Label htmlFor="feedback">Feedback</Label>
            <Textarea 
              id="feedback"
              placeholder="Please share your feedback..."
              className="min-h-[100px]"
            />
            <p className="help-text">Your feedback helps us improve our service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
