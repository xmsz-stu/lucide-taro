import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/icons/*.tsx'],
  format: ['esm'],
  dts: true,
  splitting: true,
  clean: true,
  minify: false,
  target: 'es2020',
  external: ['react', '@tarojs/components'],
  outDir: 'dist',
  bundle: true,
  skipNodeModulesBundle: true,
  treeshake: true,
  outExtension() {
    return {
      js: '.js',
    };
  },
});
