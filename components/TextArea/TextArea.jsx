import React, { useState, useEffect } from 'react';
import { Input } from 'antd';
import classNames from 'classnames';
import styles from './TextArea.less';

const { TextArea: AntdTextArea } = Input;

const TextArea = (props, ref) => {
  const { className, value, onChange, maxLength = 0, showWordLimit = true, ...otherProps } = props;
  const [currentValue, setCurrentValue] = useState(value);
  const handleChange = e => {
    const { value: val } = e.target;
    setCurrentValue(val);
    if (onChange) {
      onChange(val);
    }
  };
  useEffect(() => {
    setCurrentValue(value);
  }, [value]);
  return (
    <div className={classNames(className, styles.textArea)}>
      <AntdTextArea
        ref={ref}
        value={currentValue}
        onChange={handleChange}
        maxLength={maxLength}
        {...otherProps}
      />
      <span className={styles.wordLimit}>
        {currentValue ? currentValue.length : 0}/{maxLength}
      </span>
    </div>
  );
};

export default React.forwardRef(TextArea);
