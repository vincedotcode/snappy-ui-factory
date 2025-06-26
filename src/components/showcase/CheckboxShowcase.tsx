
import React, { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import './CheckboxShowcase.css';

export const CheckboxShowcase = () => {
  const [checked, setChecked] = useState(false);
  const [items, setItems] = useState([
    { id: 'apple', label: 'Apple', checked: true },
    { id: 'banana', label: 'Banana', checked: false },
    { id: 'orange', label: 'Orange', checked: true },
  ]);

  const handleItemChange = (id: string, isChecked: boolean) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, checked: isChecked } : item
    ));
  };

  return (
    <div className="checkbox-showcase">
      <div className="showcase-group">
        <h3 className="group-title">Basic Checkbox</h3>
        <div className="checkbox-group">
          <div className="checkbox-item">
            <Checkbox 
              id="basic" 
              checked={checked} 
              onCheckedChange={setChecked}
            />
            <Label htmlFor="basic">Accept terms and conditions</Label>
          </div>
          <div className="checkbox-item">
            <Checkbox id="disabled" disabled />
            <Label htmlFor="disabled">Disabled checkbox</Label>
          </div>
          <div className="checkbox-item">
            <Checkbox id="disabled-checked" disabled checked />
            <Label htmlFor="disabled-checked">Disabled checked</Label>
          </div>
        </div>
      </div>

      <div className="showcase-group">
        <h3 className="group-title">Checkbox List</h3>
        <div className="checkbox-list">
          {items.map((item) => (
            <div key={item.id} className="checkbox-item">
              <Checkbox
                id={item.id}
                checked={item.checked}
                onCheckedChange={(checked) => handleItemChange(item.id, checked as boolean)}
              />
              <Label htmlFor={item.id}>{item.label}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
