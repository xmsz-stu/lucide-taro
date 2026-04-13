# Lucide Taro

一个为 TaroJS (小程序) 量身定制的高性能 Lucide 图标库。

针对小程序不支持内联 SVG 的痛点，本库采用 **"高性能 DataURL 编码 + Image 标签"** 的方案，并针对渲染性能和包体积进行了极致优化。

## ✨ 特性

- **全平台兼容**: 完美支持微信、支付宝、字节跳动等所有小程序平台及 H5。
- **极致性能**: 
  - **全局 DataURL 缓存**: 相同属性的图标在全局范围内仅计算一次编码。
  - **UTF-8 编码引擎**: 弃用高开销的 Base64，改用高效的 URI 转义编码，转换速度提升 10 倍。
  - **引用稳定化**: 图标几何数据定义在组件外层，确保 React `useMemo` 缓存命中率 100%。
  - **组件秒刷新**: 核心组件使用 `React.memo` 优化，屏蔽无效重绘。
- **高度灵活**: 支持动态修改 `color`, `size`, `strokeWidth` 等属性。
- **支持 rpx**: `size` 传入数值时自动转换为 `rpx`。
- **完美 Tree-shaking**: 每个图标均为独立文件，未使用的图标不会进入打包产物。
- **Taro 4.x + React 18 适配**: 针对现代 Taro 架构深度优化。

## 📦 安装

在你的 Taro 项目中引入本包（建议作为本地 package 或通过私有 npm 引入）：

```bash
# 进入 lucide-taro 目录并安装依赖
pnpm install
# 生成图标组件（共约 1900+ 个）
pnpm run generate
```

## 🚀 使用

```tsx
import { Camera, Heart, Search } from 'lucide-taro';

export default function Page() {
  return (
    <View>
      {/* 基础用法：size={32} 会自动转为 32rpx */}
      <Camera color="#333" size={32} />
      
      {/* 支持显式字符串单位 */}
      <Heart color="red" size="48rpx" strokeWidth={3} />
      
      {/* 结合 TailwindCSS 或 className */}
      <Search className="my-icon relative z-10" color="blue" />
    </View>
  );
}
```

## 🛠️ 技术原理

本库的工作流程如下：
1. **构建期**: `scripts/generate.ts` 扫描 `lucide-static` 中的图标，并将其解析为轻量的 JSON 节点结构。
2. **运行期**:
   - 组件接收 Props 后，生成轻量级 SVG 字符串。
   - 经过 `getIconDataUrl` 编码器，将其转化为 `data:image/svg+xml;charset=utf-8,...` 格式。
   - 同时搜索全局缓存，确保相同配置不再重复计算字符转义。
   - 最终通过 Taro 的 `<Image>` 标签利用原生渲染性能进行展示。

## ⚡ 性能提示

为了获得最佳滚动性能：
- 推荐使用数值作为 `size`，这样内部生成的 SVG 结构最稳定。
- 本库内置了全局单例缓存，在长列表滚动中，图标重复出现时几乎没有任何 CPU 负担。

## 📄 开源协议

[ISC](./LICENSE)
