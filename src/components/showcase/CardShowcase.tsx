
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import './CardShowcase.css';

export const CardShowcase = () => {
  return (
    <div className="card-showcase">
      <Card className="showcase-card">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            Card Description
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the card content area where you can place any content.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>

      <Card className="showcase-card">
        <CardHeader>
          <div className="card-header-with-badge">
            <div>
              <CardTitle>Featured Card</CardTitle>
              <CardDescription>
                This card has a featured badge
              </CardDescription>
            </div>
            <Badge variant="secondary">New</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p>Featured content with additional styling and components.</p>
        </CardContent>
        <CardFooter className="card-footer-buttons">
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </CardFooter>
      </Card>

      <Card className="showcase-card">
        <CardHeader>
          <CardTitle>Stats Card</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">2,543</div>
              <div className="stat-label">Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">12.5k</div>
              <div className="stat-label">Views</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">573</div>
              <div className="stat-label">Downloads</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
