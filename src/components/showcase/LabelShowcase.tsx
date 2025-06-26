
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import './LabelShowcase.css';

export const LabelShowcase = () => {
  return (
    <div className="label-showcase">
      <div className="showcase-group">
        <h3 className="group-title">Label Variants</h3>
        <div className="label-group">
          <div className="label-example">
            <Label>Default Label</Label>
          </div>
          <div className="label-example">
            <Label className="text-sm">Small Label</Label>
          </div>
          <div className="label-example">
            <Label className="text-lg font-semibold">Large Bold Label</Label>
          </div>
        </div>
      </div>

      <div className="showcase-group">
        <h3 className="group-title">Form Labels</h3>
        <div className="form-examples">
          <div className="form-field">
            <Label htmlFor="email-input">Email Address</Label>
            <Input id="email-input" type="email" placeholder="Enter your email" />
          </div>
          <div className="form-field">
            <Label htmlFor="password-input">Password</Label>
            <Input id="password-input" type="password" placeholder="Enter your password" />
          </div>
          <div className="form-field-inline">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
        </div>
      </div>
    </div>
  );
};
