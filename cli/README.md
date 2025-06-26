
# Test SD UI CLI

A CLI tool for adding Test SD UI Component Library components to your React projects.

## Installation

```bash
npm install -g @vincedotcode/test-sd-ui-cli
```

## Usage

### Initialize the library in your project

```bash
npx test-sd-ui init
```

This will:
- Create the necessary directory structure (`src/components/ui`, `src/lib`)
- Add the utility functions (`src/lib/utils.ts`)
- Configure TypeScript path mapping
- Add theme CSS variables (`src/theme.css`)

### Add components

```bash
npx test-sd-ui add button
npx test-sd-ui add card
npx test-sd-ui add input
npx test-sd-ui add badge
```

### List available components

```bash
npx test-sd-ui list
```

## Requirements

- React 18+
- TypeScript (recommended)
- Your project should have `src/` directory structure

## Dependencies

The CLI will tell you which dependencies to install for each component. Common dependencies include:

- `clsx` (required for all components)
- `@radix-ui/react-slot` (for button component)
- `class-variance-authority` (for button and badge components)

## CSS Styling

After running `npx test-sd-ui init`, make sure to import the theme CSS in your main application file:

```tsx
// In your main.tsx or App.tsx
import './theme.css'
```

Or add it to your main CSS file:

```css
@import './theme.css';
```

## Example Usage

After adding components:

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to Test SD UI</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Enter your name" />
        <div className="flex gap-2">
          <Button>Primary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
        <Badge>New Feature</Badge>
      </CardContent>
    </Card>
  )
}
```

## Publishing

To publish this CLI:

1. Update the version in `package.json`
2. Run `npm publish` in the `cli` directory
3. Users can then install with `npm install -g @vincedotcode/test-sd-ui-cli`
