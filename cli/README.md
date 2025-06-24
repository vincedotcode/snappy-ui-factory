
# IG Components CLI

A CLI tool for adding IG Component Library components to your React projects.

## Installation

```bash
npm install -g ig-components-cli
```

## Usage

### Initialize the library in your project

```bash
npx ig-components init
```

This will:
- Create the necessary directory structure (`src/components/ui`, `src/lib`)
- Add the utility functions (`src/lib/utils.ts`)
- Configure TypeScript path mapping

### Add components

```bash
npx ig-components add button
npx ig-components add card
npx ig-components add input
npx ig-components add badge
```

### List available components

```bash
npx ig-components list
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

Make sure to include the IG theme CSS in your project. You can either:

1. Copy the CSS variables from the IG theme
2. Import the CSS file in your main application file
3. Add the CSS to your existing stylesheet

## Example Usage

After adding components:

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  )
}
```
