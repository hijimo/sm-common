import React, { useState } from 'react';
import classNames from 'classnames';
import { Layout } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import ProtocolModal, { ProtocolTypeEnums } from '../ProtocolModal';
import logoBlackRed from '../../assets/logo-lite-black-red@2x.png';
import styles from './GlobalFooter.less';

const { Footer } = Layout;

const GlobalFooter = props => {
  const { className, noLogo } = props;
  const rootClassNames = classNames(styles.footer, className);
  const [modalVisiable, setModalVisiable] = useState(false);
  const [modalType, setModalType] = useState(ProtocolTypeEnums.privacyPolicy);
  return (
    <Footer className={rootClassNames}>
      <div className={styles.copyright}>
        {/* {noLogo ? null : <img className={styles.logoRed} src={logoBlackRed} alt='logo-red' />} */}

        <div className={styles.copyrightInfo}>
          <p className={classNames(styles.copyrightPolicy, noLogo ? styles.center : '')}>
            <a
              onClick={() => {
                setModalType(ProtocolTypeEnums.registerTpl);
                setModalVisiable(true);
              }}
            >
              <FormattedMessage id='common.footer.homefooter.label.copyRight1Part1' />
            </a>
            {' - '}
            <a
              onClick={e => {
                setModalType(ProtocolTypeEnums.privacyPolicy);
                setModalVisiable(true);
              }}
            >
              <FormattedMessage id='common.footer.homefooter.label.copyRight1Part2' />
            </a>
          </p>
          <p className={classNames(styles.copyrightText, noLogo ? styles.center : '')}>
            {`Copyright © 2019 - ${new Date().getFullYear()} All Rights Reserved.`}
            {/* <a
              rel='noopener noreferrer'
              target='_blank'
              href='http://idinfo.zjamr.zj.gov.cn/bscx.do?method=lzxx&id=3301063301840000480096'
            >
              <img
                src='https://img.yeeorder.com/default/i_lo2.gif'
                className={styles.copyrightTextImag}
                alt='ic ico'
              />
            </a> */}
          </p>
          <p>
            <a
              rel='noopener noreferrer'
              target='_blank'
              href='http://beian.miit.gov.cn/'
              style={{ color: 'rgb(80, 80, 80)', fontSize: '12px' }}
            >
              浙ICP备xxxxxx号
            </a>
          </p>
        </div>
      </div>
      <ProtocolModal
        type={modalType}
        visible={modalVisiable}
        width={772}
        onCancel={() => {
          setModalVisiable(false);
        }}
      />
    </Footer>
  );
};

export default GlobalFooter;
