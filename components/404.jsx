import React from 'react';
import { Result } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';

const NoFoundPage = () => (
  <Result
    status='404'
    title='404'
    subTitle={formatMessage({ id: 'common.exception.status.description.404' })}
  ></Result>
);

export default NoFoundPage;
