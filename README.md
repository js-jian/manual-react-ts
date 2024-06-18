# .editorconfig 文件
  - 作用：统一编辑器默认的代码格式
  - 使用：VS Code中安装EditorConfig for VS Code插件

# .env.development 和 .env.production 文件
  - vite会根据不同mode加载对应的文件，变量默认情况下必须以VITE_作为前缀，也可以通过vite.config.js中的envPrefix自定义配置
  - 通过meta.env.VITE_XXX获取

# .nvmrc文件
  - 作用：我们在终端没有指定版本时执行nvm use，nvm install，nvm exec，nvm run，nvm which 等命令时会使用.nvmrc文件指定的node版本

# .prettierrc.ts文件
  - 作用：配置代码格式化规则
  - 使用：yarn add -D prettier

# eslint.config.js文件
  - 作用：代码质量，纠正语法等问题
  - 使用；yarn add -D eslint
  - 配合husky，lint-staged，prettier使用

# 记录
1、 执行完yarn add less -g之后，就可以通过lessc命令将.less文件编译成.css文件，例：lessc a.less b.css
2、 
