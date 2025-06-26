#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const registry = require('./registry.json');

const program = new Command();

program
  .name('test-sd-ui')
  .description('Test SD UI Component Library CLI')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize the Test SD UI component library in your project')
  .action(async () => {
    console.log('🚀 Initializing Test SD UI Component Library...');
    
    // Create necessary directories
    const dirs = ['src/components/ui', 'src/lib'];
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
        console.log(`✅ Created directory: ${dir}`);
      }
    });

    // Create utils.ts
    const utilsContent = `import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
`;

    if (!fs.existsSync('src/lib/utils.ts')) {
      fs.writeFileSync('src/lib/utils.ts', utilsContent);
      console.log('✅ Created src/lib/utils.ts');
    }

    // Create tsconfig paths (if tsconfig.json exists)
    if (fs.existsSync('tsconfig.json')) {
      const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
      if (!tsconfig.compilerOptions) tsconfig.compilerOptions = {};
      if (!tsconfig.compilerOptions.paths) tsconfig.compilerOptions.paths = {};
      tsconfig.compilerOptions.paths["@/*"] = ["./src/*"];
      fs.writeFileSync('tsconfig.json', JSON.stringify(tsconfig, null, 2));
      console.log('✅ Updated tsconfig.json with path mapping');
    }

    // Create base CSS with theme variables
    const themeCSS = `/* Test SD UI Theme Variables */
:root {
  --ig-border-radius: 0.5rem;
  --ig-border-radius-large: 0.75rem;
  --ig-border-radius-input: 0.375rem;
  --ig-border-width: 1px;
  --ig-border-width-input: 1px;
  --ig-size-025: 0.125rem;
  --ig-size-100: 0.5rem;
  --ig-size-150: 0.625rem;
  --ig-size-200: 0.75rem;
  --ig-size-300: 1rem;
  --ig-size-400: 1.25rem;
  --ig-component-size-medium: 2rem;
  --ig-component-size-large: 2.5rem;
  --ig-component-size-xlarge: 3rem;
  --ig-component-input-medium-vertical-padding: 0.5rem;
  --ig-component-input-medium-horizontal-padding: 0.75rem;
  --ig-font-size-body: 0.875rem;
  --ig-font-size-body-small: 0.75rem;
  --ig-font-size-body-large: 1rem;
  --ig-font-weight-medium: 500;
  --ig-font-family-body: system-ui, -apple-system, sans-serif;
  --ig-opacity-disabled: 0.5;
  --ig-background-primary-bold: #3b82f6;
  --ig-background-primary-bold-hover: #2563eb;
  --ig-background-primary-bold-pressed: #1d4ed8;
  --ig-background-secondary-bold: #6b7280;
  --ig-background-secondary-bold-hover: #4b5563;
  --ig-background-secondary-bold-pressed: #374151;
  --ig-background-error-bold: #ef4444;
  --ig-background-error-bold-hover: #dc2626;
  --ig-background-error-bold-pressed: #b91c1c;
  --ig-background-neutral: #ffffff;
  --ig-background-neutral-hover: #f9fafb;
  --ig-background-neutral-pressed: #f3f4f6;
  --ig-background-neutral-subtler: #f9fafb;
  --ig-text-bold: #111827;
  --ig-text-subtle: #6b7280;
  --ig-text-subtler: #9ca3af;
  --ig-text-on-color: #ffffff;
  --ig-text-primary: #3b82f6;
  --ig-text-primary-hover: #2563eb;
  --ig-text-primary-pressed: #1d4ed8;
  --ig-text-decoration-link: underline;
  --ig-border: #e5e7eb;
  --ig-border-bold: #d1d5db;
  --ig-border-focus: #3b82f6;
  --ig-box-shadow-focus: 0 0 0 2px rgba(59, 130, 246, 0.5);
  --ig-elevation-level-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --ig-typography-heading-small-bold: 500 1.25rem/1.75rem system-ui, -apple-system, sans-serif;
  --ig-typography-body-medium-regular: 400 0.875rem/1.25rem system-ui, -apple-system, sans-serif;
  --ig-typography-body-small-medium: 500 0.75rem/1rem system-ui, -apple-system, sans-serif;
  --ig-typography-caption-medium-bold: 700 0.75rem/1rem system-ui, -apple-system, sans-serif;
}
`;

    if (!fs.existsSync('src/theme.css')) {
      fs.writeFileSync('src/theme.css', themeCSS);
      console.log('✅ Created src/theme.css with Test SD UI theme variables');
    }
    
    console.log('\n🎉 Test SD UI Component Library initialized successfully!');
    console.log('📦 Install required dependencies: npm install clsx');
    console.log('🧩 Add components: npx test-sd-ui add button');
    console.log('📚 Import src/theme.css in your main CSS file or app entry point.');
  });

program
  .command('add')
  .argument('<component>', 'component to add')
  .description('Add a component to your project')
  .action(async (component) => {
    console.log(`📦 Adding ${component} component...`);
    
    const componentConfig = registry.components[component];
    if (!componentConfig) {
      console.error(`❌ Component "${component}" not found.`);
      console.log(`Available components: ${Object.keys(registry.components).join(', ')}`);
      return;
    }

    // Ensure ui directory exists
    if (!fs.existsSync('src/components/ui')) {
      fs.mkdirSync('src/components/ui', { recursive: true });
    }

    // Create component files
    for (const file of componentConfig.files) {
      const filePath = `src/components/ui/${file.name}`;
      fs.writeFileSync(filePath, file.content);
      console.log(`✅ Created ${filePath}`);
    }

    // Show dependencies that need to be installed
    if (componentConfig.dependencies.length > 0) {
      console.log('\n📋 Install these dependencies:');
      console.log(`npm install ${componentConfig.dependencies.join(' ')}`);
    }

    console.log(`\n🎉 ${component} component added successfully!`);
  });

program
  .command('list')
  .description('List all available components')
  .action(() => {
    console.log('📋 Available components:');
    Object.keys(registry.components).forEach(component => {
      console.log(`  - ${component}`);
    });
  });

program.parse();
