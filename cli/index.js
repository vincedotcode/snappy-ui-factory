
#!/usr/bin/env node

const { Command } = require('commander');
const fs = require('fs');
const path = require('path');
const registry = require('./registry.json');

const program = new Command();

program
  .name('ig-components')
  .description('IG Component Library CLI')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize the IG component library in your project')
  .action(async () => {
    console.log('🚀 Initializing IG Component Library...');
    
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
    
    console.log('\n🎉 IG Component Library initialized successfully!');
    console.log('📦 Install required dependencies: npm install clsx');
    console.log('🧩 Add components: npx ig-components add button');
    console.log('📚 Add IG theme CSS to your main CSS file or import it in your app.');
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
