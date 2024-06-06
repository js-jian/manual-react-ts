# 项目创建步骤

1. 创建 manual_react18_ts 文件夹
2. 进入 manual_react18_ts 文件夹，然后执行 yarn init
3. yarn add react@^18.3.1 react-dom@^18.3.1
4. yarn add -D typescript@^5.4.5 @types/react@^18.3.3 @types/react-dom@^18.3.0
5. yarn tsc --init
6. 创建 src 文件夹，并创建 App.tsx 文件

```
import React from "react";

const App: React.FC = () => {
  return (
	<div>
	  <h1>111</h1>
	</div>
  );
};

export default App;
```

7. 创建入口文件 index.tsx

```
import React  from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

```

8. 创建 public 文件夹，并创建HTML模板文件 index.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React TS App</title>
  </head>
  <body>
    <div id="root"></div>
    <noscript>You need to enable JavaScript to run this app</noscript>
	<script type="module" src="../src/index.tsx"></script>
  </body>
</html>
```

9. yarn add -D vite@^5.2.12 @vitejs/plugin-react@^4.3.0
10. package.json 文件增加 scripts 配置

```
"scripts": {
  "dev": "vite",
  "build": "vite build"
}
```

11. 创建 vite.config.ts 文件

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react() ],
});
```

12. package.json 文件中添加 "type": "module" **【原因在下方问题3】**
13. 将 index.html 文件移到项目根目录，与 vite.config.ts 文件同级，并更新文件中 script 标签的 src 路径 **【原因在下方问题4】**
14. 增加 .gitignore 文件

# 遇到的问题

#### 1. 无法使用 JSX，除非提供了 "--jsx" 标志

【解决办法】：tsconfig.json 文件中配置 **"jsx": "react-jsx"** &nbsp;&nbsp;&nbsp; [配置解释](https://www.typescriptlang.org/tsconfig/#jsx)

#### 2. 此模块是使用 “export =” 声明的，只能在使用“esModuleInterop”标志时用于默认导入。

【解决办法】 tsconfig.json 文件中配置 **"esModuleInterop": true** &nbsp;&nbsp;&nbsp; [配置解释](https://www.typescriptlang.org/tsconfig/#esModuleInterop)

#### <a id="question3"></a>3. 第11步后执行 yarn dev 命令，提示：The CJS build of Vite's Node API is deprecated

【解决办法】[官方解释](https://vitejs.dev/guide/troubleshooting.html#vite-cjs-node-api-deprecated)

1. package.json 文件中添加 "type": "module" 【默认情况下 Node.js 默认将 .js 文件作为 CommonJS (CJS) 模块来处理。当将 “type”: “module” 添加到 package.json 中，Node.js 会将 .js 文件作为 ECMAScript Modules (ESM) 来处理】
2. 将 vite.config.ts 文件改名为 vite.config.mts【文件扩展名 .mts 明确地指示 Node.js 将该文件作为一个 ECMAScript Module (ESM) 来处理。这与在 package.json 中设置 “type”: “module” 相类似，都是为了确保 Node.js 以 ESM 格式解析和执行模块】

#### 4. 第12步后执行 yarn dev 命令，访问 http://localhost:5173/，提示：vite 找不到此 localhost 页面

【解决办法】将 index.html 文件移到项目根目录，与 vite.config.ts 文件同级
