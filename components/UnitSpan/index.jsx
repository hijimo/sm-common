import React from 'react';
import classNames from 'classnames';
import { formatMessage } from 'umi-plugin-react/locale';
import styles from './style.less';

const UnitTextMap = {
  day: formatMessage({ id: 'common.unitSpan.unit.days' }),
  day_plural: formatMessage({ id: 'common.unitSpan.unit.days.plural' }),
  hour: formatMessage({ id: 'common.unitSpan.unit.hours' }),
  hour_plural: formatMessage({ id: 'common.unitSpan.unit.hours.plural' }),
  sqm: formatMessage({ id: 'common.unitSpan.unit.sqm' }),
  sqm_plural: formatMessage({ id: 'common.unitSpan.unit.sqm.plural' }),
  store: formatMessage({ id: 'common.unitSpan.unit.stores' }),
  store_plural: formatMessage({ id: 'common.unitSpan.unit.stores.plural' }),
  pa: formatMessage({ id: 'common.unitSpan.unit.pa' }),
  pa_plural: formatMessage({ id: 'common.unitSpan.unit.pa.plural' }),
  annualRevenue: formatMessage({ id: 'common.unitSpan.unit.annualRevenue' }),
  annualRevenue_plural: formatMessage({ id: 'common.unitSpan.unit.annualRevenue.plural' }),
};

export const getUnitText = (type, plural = false) => {
  return plural ? UnitTextMap[`${type}_plural`] : UnitTextMap[type];
};
export const UnitEnums = {
  day: 'day',
  hour: 'hour',
  sqm: 'sqm',
  store: 'store',
  pa: 'pa',
  annualRevenue: 'annualRevenue',
};

const UnitSpan = props => {
  const { className, type, plural, ...otherProps } = props;

  return (
    <span className={classNames(classNames, styles.span)} {...otherProps}>
      {getUnitText(type, plural)}
    </span>
  );
};

export default UnitSpan;
