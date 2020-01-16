 <!-- CKEditor 文档 -->
 <!-- https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html -->

### 简述

基于 CKEditor 封装的 编辑器组件。主要是为了 支持项目自身的文件上传，处理视频播放的 providers 以及方便 form 表单使用

### 关于功能添加

现在只使用了默认功能，如果需要扩展其他功能，请查看官方文档。

### 基本使用

```jsx
<UcharmEditor value='<img src="https://images.opencollective.com/fbopensource/fbb8a5b/logo.png" alt="hello" /><strong style="color:#f00">asdf</strong>' />
```

### 表单使用

```
<FormItem label={formatMessage({ id: 'page.qc.label.zjCertification' })}>
        {getFieldDecorator('editor', {
          validateFirst: true,
          initialValue:
            '<img src="https://images.opencollective.com/fbopensource/fbb8a5b/logo.png" alt="hello" /><strong style="color:#f00">asdf</strong>',
        })(<UcharmEditor />)}
      </FormItem>
```

### language

```jsx
<UcharmEditor language={getLocale().toLowerCase()} />
```
