import React from 'react';
import { Empty, ConfigProvider } from 'antd';
import noDataImage from '../../assets/no-data@2x.png';

const renderEmpty = () => <Empty image={noDataImage} />;

const CommonConfigProvider = ({ children, ...restProps }) => (
  <ConfigProvider renderEmpty={renderEmpty} {...restProps}>
    {children}
  </ConfigProvider>
);

export default CommonConfigProvider;
