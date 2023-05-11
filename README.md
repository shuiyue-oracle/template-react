# template-react

prettier

```
{
  "printWidth": 100, //单行长度
  "tabWidth": 2, //缩进长度
  "useTabs": false, //使用空格代替tab缩进
  "semi": true, //句末使用分号
  "singleQuote": true, //使用单引号
  "bracketSpacing": true, //在对象前后添加空格-eg: { foo: bar }
  "arrowParens": "avoid" //单参数箭头函数参数周围使用圆括号-eg: (x) => x
}
```

快捷键
mac:
shift+option+F


husky:
安装包
husky,lint-staged
"@commitlint/cli",
"@commitlint/config-conventional",

在"scripts"中添加
"prepare": "husky install"
执行pnpm run prepare

执行npx husky add .husky/pre-commit "npm run lint"


## TODO
eslint未生效
husky存在问题