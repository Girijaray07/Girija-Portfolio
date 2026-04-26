// ./svgIcons.js
// 1. Glob all SVG files in the directory
const svgModules = import.meta.glob('./*.svg', { eager: true });

// 2. Convert modules into { iconName: ReactComponent }
const svgIcons = Object.entries(svgModules).reduce((acc, [filePath, module]) => {
    // Extract icon name (e.g., 'home' from './home.svg')
    const iconName = filePath.split('/').pop().replace(/\.svg$/, '');
    acc[iconName] = module.default;
    return acc;
}, {});

export default svgIcons;