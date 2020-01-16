import React, { PureComponent } from 'react';
import { Table } from 'antd';
import styles from './index.less';

export default class GeneralTable extends PureComponent {
  handleTableChange = (pagination, filters, sorter) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(pagination, filters, sorter);
    }
  };

  componentDidUpdate() {
    const resizeEvent = window.document.createEvent('UIEvents');
    resizeEvent.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(resizeEvent);
  }

  render() {
    const { pagination = {}, rowKey, ...rest } = this.props;

    const paginationProps = {
      showSizeChanger: true,
      showQuickJumper: true,
      defaultCurrent: 1,
      defaultPageSize: 20,
      // showTotal: total => `共${total}条`,
      ...pagination,
    };

    return (
      <div className={styles.generalTable}>
        <Table
          rowKey={rowKey || 'id'}
          pagination={pagination && paginationProps}
          onChange={this.handleTableChange}
          {...rest}
        />
      </div>
    );
  }
}
