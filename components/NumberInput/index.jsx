import React from 'react';
import classNames from 'classnames';
import NumberInput from 'zent/es/number-input';
import 'zent/css/input.css';
import 'zent/css/number-input.css';
import styles from './index.less';

const GlobalNumberInput = (props, ref) => {
  const { className, ...restProps } = props;

  return (
    <NumberInput className={classNames(styles.numberInput, className)} {...restProps} ref={ref} />
  );
};

export default React.forwardRef(GlobalNumberInput);
