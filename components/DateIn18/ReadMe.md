### 简述

`DateIn18` 组件用于显示多国语言的日期， 语言取于当前页面的 `antd` 语言环境.即。

```jsx
import { getLocale } from 'umi-plugin-react/locale';
console.log('current  langua is:', getLocale());
```

### Demo

```jsx
const dateStr = '2019-10-14 15:21:31'
<DateIn18 fullTime date={dateStr} />

// in cs-CZ 17. říjen 2019
// in zh-CN 2019年10月17日
// in en-US October 17, 2019

```

#### fullTime

显示完整日期时间格式

```jsx
const dateStr = '2019-10-14 15:21:31'
<DateIn18 fullTime date={dateStr} />

// in cs-CZ 17. říjen 2019 10:07
// in zh-CN 2019年10月17日上午10点07分
// in en-US October 17, 2019 10:07 AM

```

### format

显示自定义格式, 详见 moment.js 官方文档： http://momentjs.cn/docs/#/i18n/

```jsx
const dateStr = '2019-10-14 15:21:31'
const format ='LLLL'
<DateIn18 format={format} date={dateStr} />

// in cs-CZ čtvrtek 17. říjen 2019 10:07
// in zh-CN 2019年10月17日星期四上午10点07分
// in en-US Thursday, October 17, 2019 10:07 AM

```
