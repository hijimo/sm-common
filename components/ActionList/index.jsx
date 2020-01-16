/* eslint react/no-array-index-key: 0 */

import React from 'react';
import classNames from 'classnames';
import _compact from 'lodash/compact';
import _head from 'lodash/head';
import _tail from 'lodash/tail';
import { Divider, Icon, Dropdown, Menu } from 'antd';
import styles from './index.less';

const OtherActionList = ({ actions = [] }) => {
  const menu = (
    <Menu>
      {actions.map((action, index) => (
        <Menu.Item key={index}>{action}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <>
      <Divider type='vertical' />
      <Dropdown placement='bottomCenter' overlay={menu} trigger={['click']}>
        <a className={classNames('ant-dropdown-link', styles.actionLink)} href='#'>
          <Icon type='down' />
        </a>
      </Dropdown>
    </>
  );
};

const ActionList = ({ actions = [] }) => {
  const computedActions = _compact(actions);
  const firstAction = _head(computedActions);
  const otherActions = _tail(computedActions);

  return (
    <>
      {firstAction}
      {otherActions.length > 0 && <OtherActionList actions={otherActions} />}
    </>
  );
};

export default ActionList;
