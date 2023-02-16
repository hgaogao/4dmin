/// <reference types="vite/client" /> //覆盖默认的类型定义 https://cn.vitejs.dev/guide/features.html#typescript

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
declare module '*.vue' {

  import type { DefineComponent } from 'vue';
 
  const vueComponent: DefineComponent<{}, {}, any>;
 
  export default vueComponent;
}
