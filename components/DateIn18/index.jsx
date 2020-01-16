import React from 'react';
import moment from 'moment';
import { getLocale } from 'umi-plugin-react/locale';
import classNames from 'classnames';
import styles from './index.less';

const DateIn18 = props => {
  const { className, date, lang, format, fullTime = false } = props;
  const formatString = fullTime ? 'LL HH:mm:ss' : format ? format : 'LL';

  return (
    <span className={classNames(className, styles.dateIn18)}>
      {moment(date)
        .locale(lang || getLocale())
        .format(formatString)}
    </span>
  );
};
export default DateIn18;
