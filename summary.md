# 文档说明
这是一个使用 Next.js、React、TypeScript 和 Tailwind CSS 构建的现代化 Web 应用程序。项目集成了 shadcn/ui 组件库，并使用了多种工具来优化开发流程和代码质量。

## 目录树说明
my-app/
├── public/ 存放静态资源文件 
│   ├── index.html index.html: 主HTML文件,作为应用的入口点
│   ├── vite.svg  占位图
│   └── placeholder.svg  占位图
├── src/ 包含应用的源代码
│   ├── assets/ 存放项目使用的静态资源
│   │   └── react.svg  React logo文件
│   ├── components/  存放React组件
│   │   ├── Component.tsx 主要组件文件
│   │   └── ui/ 存放UI组件
│   │       ├── badge.tsx 徽章组件
│   │       ├── button.tsx 按钮组件
│   │       ├── card.tsx 卡片组件
│   │       └── tabs.tsx 标签页组件
│   ├── lib/ 存放公共工具函数
│   │   └── utils.ts 包含通用工具函数,如样式合并函数
│   ├── pages/ 存放页面组件
│   │   ├── index.js  主页面组件
│   │   └── index.css  主页面样式文件
│   └── styles/  存放全局样式文件
│       └── globals.css 全局CSS样式,包含Tailwind CSS的基础样式和自定义变量
├── .gitignore 指定Git版本控制需要忽略的文件
├── components.json shadcn/ui组件库的配置文件
├── eslint.config.js  ESLint配置文件,用于代码质量检查
├── next-env.d.ts Next.js类型声明文件
├── next.config.js Next.js配置文件
├── package.json 项目依赖和脚本配置文件
├── postcss.config.js PostCSS配置文件,用于CSS处理
├── summary.md 项目摘要或说明文件
├── tailwind.config.js Tailwind CSS配置文件
└── tsconfig.json TypeScript配置文件

## 配置环境说明
1. 核心环境:
Node.js (推荐版本: 14.x 或更高)
npm (通常随Node.js一起安装)

2. 全局工具:
create-next-app (用于创建Next.js项目)
typescript (全局安装,版本4.9.5)

3.项目依赖、开发依赖:: @package.json

4.配置文件:
next.config.js (Next.js配置)
tailwind.config.js (Tailwind CSS配置)
postcss.config.js (PostCSS配置)
tsconfig.json (TypeScript配置)
eslint.config.js (ESLint配置)

5.样式工具:
Tailwind CSS 
PostCSS

6.UI组件库:
shadcn/ui

7.版本控制:
Git

## 安装依赖

- 安装必要的依赖：
npm install @radix-ui/react-slot @radix-ui/react-tabs @shadcn/ui class-variance-authority clsx framer-motion lucide-react tailwind-merge tailwindcss-animate

- 安装开发依赖：
npm install -D @types/react @types/react-dom autoprefixer eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-refresh postcss tailwindcss typescript

- 初始化 Tailwind CSS：
npx tailwindcss init -p

- 安装 shadcn/ui 组件：
npx shadcn-ui@latest init

- 安装特定的 shadcn/ui 组件（可以根据你的需要选择）：
npx shadcn-ui@latest add button card badge tabs

- 完成上述步骤后，可以启动开发服务器：
npm run build

npm run dev

- 如果shadcn/ui安装不成功请访问使用 npm install shadcn-cli 后再运行 npx shadcn-cli init 
- shadcn/ui网站：https://ui.shadcn.com/




