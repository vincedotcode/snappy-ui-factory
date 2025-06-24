
import React from 'react';
import { ButtonShowcase } from './showcase/ButtonShowcase';
import { CardShowcase } from './showcase/CardShowcase';
import { InputShowcase } from './showcase/InputShowcase';
import { BadgeShowcase } from './showcase/BadgeShowcase';
import './ShadcnShowcase.css';

export const ShadcnShowcase = () => {
  const sections = [
    { title: 'Button', component: <ButtonShowcase /> },
    { title: 'Card', component: <CardShowcase /> },
    { title: 'Input', component: <InputShowcase /> },
    { title: 'Badge', component: <BadgeShowcase /> },
  ];

  return (
    <div className="showcase">
      {sections.map((section, index) => (
        <section key={section.title} className="showcase-section">
          <h2 className="showcase-title">{section.title}</h2>
          <div className="showcase-content">
            {section.component}
          </div>
        </section>
      ))}
    </div>
  );
};
