import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as lucide from 'lucide-static';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 获取真正的图标对象
const icons = (lucide as any).icons || (lucide as any).default?.icons || lucide;

const ICONS_DIR = path.resolve(__dirname, '../src/icons');
console.log('Target Icons Directory:', ICONS_DIR);

// 确保目录存在
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

function toPascalCase(str: string) {
  return str
    .replace(/(^\w|-\w)/g, (match) => match.replace(/-/, '').toUpperCase());
}

function generateIconComponent(name: string, iconNode: any) {
  const componentName = toPascalCase(name);
  const nodesStr = JSON.stringify(iconNode);
  const content = `import React from 'react';
import LucideIcon, { LucideIconProps } from '../components/LucideIcon';

const iconNode = ${nodesStr};

const ${componentName} = (props: LucideIconProps) => (
  <LucideIcon
    {...props}
    iconNode={iconNode as any}
  />
);

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;

  const filePath = path.join(ICONS_DIR, `${componentName}.tsx`);
  fs.writeFileSync(filePath, content);
  return componentName;
}

const allEntries = Object.keys(icons);
console.log(`Found ${allEntries.length} entries in lucide-static`);

const exportStatements: string[] = [];
const generatedComponents = new Set<string>();
let count = 0;

/**
 * 简单的 SVG 字符串转 JSON 节点解析器
 * 专门针对 Lucide 的 SVG 格式设计
 */
function parseSvgToNodes(svg: string): [string, Record<string, string>][] {
  const nodes: [string, Record<string, string>][] = [];
  // 匹配所有自闭合标签或者包含内容的简单标签 (Lucide 的图标没有嵌套)
  const tagRegex = /<(path|circle|rect|line|polyline|polygon|ellipse)\s+([^>]+)\/?>/g;
  let match;

  while ((match = tagRegex.exec(svg)) !== null) {
    const tag = match[1];
    const attrStr = match[2];
    const attrs: Record<string, string> = {};
    const attrRegex = /([a-z0-0-]+)="([^"]*)"/g;
    let attrMatch;
    while ((attrMatch = attrRegex.exec(attrStr)) !== null) {
      const attrName = attrMatch[1];
      // 过滤掉我们会在运行时动态注入的属性
      if (!['stroke', 'stroke-width', 'width', 'height', 'xmlns', 'fill', 'class'].includes(attrName)) {
        attrs[attrName] = attrMatch[2];
      }
    }
    nodes.push([tag, attrs]);
  }
  return nodes;
}

allEntries.forEach((name, index) => {
  const svgContent = (icons as any)[name];
  
  if (typeof svgContent === 'string' && svgContent.includes('<svg')) {
    const nodes = parseSvgToNodes(svgContent);
    if (nodes.length > 0) {
      const componentName = toPascalCase(name);
      const normalizedName = componentName.toLowerCase();
      
      if (generatedComponents.has(normalizedName)) {
        console.warn(`Skipping duplicate component (case collision): ${componentName} (from ${name})`);
        return;
      }
      
      generateIconComponent(name, nodes);
      exportStatements.push(`export { default as ${componentName} } from './icons/${componentName}';`);
      generatedComponents.add(normalizedName);
      count++;
    }
  }
});

// 生成导出文件
const indexPath = path.resolve(__dirname, '../src/index.ts');
fs.writeFileSync(
  indexPath,
  `export { default as LucideIcon } from './components/LucideIcon';\nexport * from './components/LucideIcon';\n${exportStatements.join('\n')}\n`
);

console.log(`Successfully generated ${count} icons at ${ICONS_DIR}`);
console.log(`Index file created at ${indexPath}`);
