# react 中后台项目模板

## 使用规范

### 自定义配置信息

- .env.development 放开发、联调信息

- .env.production 放生产配置，接口地址以 // 开头

### 本地开发如何使用 mock

1. 在 mock 文件中增加 api 文件

```
// 比如商品，新增goods.js
const data = {
  'GET /goods/list': [{id: 2, name: '123'}],
}

module.exports = data;
```

2. 修改.env.development

```
REACT_APP_API改为''
```

###
