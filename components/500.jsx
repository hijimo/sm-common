import React from 'react';
import { Result } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';

const ErrorPage = () => (
  <Result
    status='500'
    title='500'
    subTitle={formatMessage({ id: 'common.exception.status.description.500' })}
  ></Result>
);

export default ErrorPage;
