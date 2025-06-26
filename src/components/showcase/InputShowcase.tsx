
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const InputShowcase = () => {
  const [value, setValue] = useState('');

  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="default">Default Input</Label>
        <Input
          id="default"
          placeholder="Enter some text..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="disabled">Disabled Input</Label>
        <Input
          id="disabled"
          placeholder="This is disabled"
          disabled
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="email">Email Input</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="password">Password Input</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
    </div>
  );
};
