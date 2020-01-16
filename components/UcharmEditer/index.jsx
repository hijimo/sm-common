// CKEditor 文档
// https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html

import React, { useEffect, useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import '@ucharm/ckeditor-build-classic/build/translations/zh-cn';
import '@ucharm/ckeditor-build-classic/build/translations/cs';
import '@ucharm/ckeditor-build-classic/build/translations/en-au';
import { formatMessage } from 'umi-plugin-react/locale';
import classNames from 'classnames';
import ClassicEditor from '@ucharm/ckeditor-build-classic';
import { AliOSSUploadAdapterPlugin } from '../../ckeditor/adapter/UploadAdapter';
import extraProviders from '../../ckeditor/providers/index';
import styles from './style.less';

const LANGUAGE_MAP = {
  'en-us': 'en',
  'cs-cz': 'cs',
  'zh-cn': 'zh-cn',
};
const DEFAULT_LANGUAGE = 'en-us';

const UcharmEditer = React.forwardRef((props, ref) => {
  const {
    value = '',
    onChange,
    maxLength = 0,
    language,
    onOriginChange,
    showWordCount = true,
    className,
    ...otherProps
  } = props;

  const [currentCharacterLen, setCurrentCharacterLen] = useState(0);

  const handleChange = (event, editor) => {
    const valueHtml = editor.getData();
    if (onChange) {
      onChange(valueHtml, currentCharacterLen);
    }
    if (onOriginChange) {
      onOriginChange(event, editor);
    }
  };
  const config = {
    wordCount: {
      onUpdate: stats => {
        // const {words, characters} = stats;
        const { characters } = stats;
        setCurrentCharacterLen(characters);
      },
    },
    extraPlugins: [AliOSSUploadAdapterPlugin],
    mediaEmbed: {
      extraProviders,
    },
    language: LANGUAGE_MAP[language],
  };
  const chartOverflow = maxLength && maxLength < currentCharacterLen;
  return (
    <div className={classNames(styles.ucharmEditor, className)}>
      <CKEditor
        ref={ref}
        editor={ClassicEditor}
        data={value}
        config={config}
        onChange={handleChange}
        {...otherProps}
      />
      {showWordCount && (
        <span className={classNames(styles.wordCount, chartOverflow && 'overflow')}>
          {maxLength
            ? `${currentCharacterLen}/${maxLength}`
            : `${formatMessage({
                id: 'component.ucharmeditor.label.wordCount',
              })}：${currentCharacterLen}`}
        </span>
      )}
    </div>
  );
});

export default UcharmEditer;
