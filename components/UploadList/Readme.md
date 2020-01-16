### 简述

`UploadList` 组件是 `Antd` `Upload` 组件的再封装，主要是上传方面使用了 oss 直传。另外添加了几个便捷 api。其他使用方式可参照 原`Upload`绷件

### 使用前注意

`multiple` 多选模式下会产生 bug。未解决。

### 新加的 api

#### maxSize

整数型。最大上传文件数据，超过后不再显示上传按钮

### maxLength

单位 kb。文件上传大小。

### 新的 accpet

现 accpet 列表同时可以验证文件格式

### 被删除的属性

`filename`，请使用`name`属性 `onChange`， 为友好表单，使用`onOriginChange`代替了`onChange`事件，

### 文件大小限制

```jsx
<UploadList accpet='.jpg,.png' maxSize={3072} listType='picture-card' />
```

### 多文件大小限制

```jsx
<UploadList
            accpet='.jpg,.png,.mp4'
            maxLength={10}
            maxSize={{
              'image/jpeg': 3072,
              'image/png': 3072,
              'video/mp4': 10240,
            }}
            listType='picture-card'
          />,
```

### 一般使用

```jsx
<UploadList accpet='.jpg' maxLength={2} maxSize={2048} listType='picture-card' />
```

### 在 form 表单中使用

```jsx
<FormItem label={formatMessage({ id: 'page.qc.label.zjCertification' })}>
  {getFieldDecorator('files', {
    validateFirst: true,
    initialValue: [],
  })(<UploadList accpet='.jpg' maxLength={2} maxSize={2048} listType='picture-card' />)}
</FormItem>
```
