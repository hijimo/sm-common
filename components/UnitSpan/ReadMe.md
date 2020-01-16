### 概述

统一显示单位的 span

### 基本用法

```jsx
import UnitSpan, { UnitEnums } from '@common/components/UnitSpan';
<UnitSpan type={UnitEnums.day} />;
```

### props

##### type

单位类型，如`day`、`hour`,具体查看 `UnitSpan` 组件里的枚举

```jsx
import UnitSpan, { UnitEnums } from '@common/components/UnitSpan';
<UnitSpan type={UnitEnums.day} />;
```

##### plural

是否复数， `Boolean`

```jsx
import UnitSpan, {UnitEnums} from '@common/components/UnitSpan'
<UnitSpan type={UnitEnums.day} plural={true} />
<UnitSpan type={UnitEnums.day}  />
```
