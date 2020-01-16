### 简述

Iconflag 的新版本，更易使用、兼容显示图片

### 为什么会有这个组件

1. 原来的使用不是很方便
2. 有些国家的国旗 svg 高达 170k+ ,使用 svg 不合适。只能使用 Png 来解决这些国家的国旗显示

### 基本使用

```jsx

const countryId = 1
<CountryFlag type={countryId}  />
// 添加style
<CountryFlag type={countryId} style={{fontSize: 30}}  />
// 添加className
<CountryFlag type={countryId} className={className}  />

```
