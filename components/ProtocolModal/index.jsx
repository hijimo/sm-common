import React, { Suspense } from 'react';
import { Modal } from 'antd';
import classNames from 'classnames';
import { getLocale, formatMessage } from 'umi-plugin-react/locale';
import styles from './index.less';

export const ProtocolTypeEnums = {
  registerTpl: 'tpl',
  privacyPolicy: 'privacyPolicy',
};

const ProtocolModal = props => {
  const { className, type = 'tpl', ...otherProps } = props;

  const titleMap = {
    [ProtocolTypeEnums.registerTpl]: formatMessage({ id: 'component.tplmodal.label.title' }),
    [ProtocolTypeEnums.privacyPolicy]: formatMessage({ id: 'component.tplmodal.label.title2' }),
  };
  const CompoentTpl = React.lazy(() => import(`./${getLocale()}/${type}`));

  return (
    <Modal
      title={titleMap[type]}
      footer={null}
      {...otherProps}
      className={classNames(className, styles.modal)}
    >
      <Suspense fallback={<div>Loading...</div>}>
        <CompoentTpl />
      </Suspense>
    </Modal>
  );
};
export default ProtocolModal;
