/**
 * 将 Lucide 图标的属性和子节点转换为 SVG 字符串
 */
export const createSvgString = (
  iconNode: [string, Record<string, string>][],
  attrs: Record<string, string | number>
) => {
  const children = iconNode
    .map(([tag, properties]) => {
      const attrStr = Object.entries(properties)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');
      return `<${tag} ${attrStr}></${tag}>`;
    })
    .join('');

  // 关键优化：内部 width/height 固定为 100%，由外部 Image 组件控制 rpx 尺寸
  return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="${attrs.color}" stroke-width="${attrs.strokeWidth}" stroke-linecap="round" stroke-linejoin="round">${children}</svg>`;
};

/**
 * 全局 DataURL 缓存
 */
const dataUrlCache = new Map<string, string>();

/**
 * 将 SVG 字符串转为 DataURL
 */
export const svgToDataUrl = (svg: string) => {
  // 使用 encodeURIComponent 保证全平台（微信、支付宝、iOS、Android）的解析兼容性
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

/**
 * 高性能获取图标数据 URL 的入口
 */
export const getIconDataUrl = (
  iconNode: [string, Record<string, string>][],
  attrs: Record<string, string | number>
) => {
  // 缓存 Key 排除 size，因为内部是 100%，size 的变化由 CSS 处理，不需要重新生成 DataURL
  const cacheKey = `${JSON.stringify(iconNode)}-${attrs.color}-${attrs.strokeWidth}`;
  
  if (dataUrlCache.has(cacheKey)) {
    return dataUrlCache.get(cacheKey)!;
  }

  const svg = createSvgString(iconNode, attrs);
  const dataUrl = svgToDataUrl(svg);
  
  dataUrlCache.set(cacheKey, dataUrl);
  return dataUrl;
};
