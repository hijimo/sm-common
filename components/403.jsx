import React from 'react';
import { Result } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';

const ForbiddenPage = () => (
  <Result
    status='403'
    title='403'
    subTitle={formatMessage({ id: 'common.exception.status.description.403' })}
  ></Result>
);

export default ForbiddenPage;
