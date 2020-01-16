import { Icon } from 'antd';
import classNames from 'classnames';
import { isImage } from '../../utils/file';
import { countryIdFlag } from '../../enums/flag';
import icons from '../../public/iconfont-flag.js';
import styles from './style.less';

const FlagIcon = Icon.createFromIconfontCN({
  scriptUrl: icons,
});

const CountryFlag = props => {
  const { type, className, ...otherProps } = props;

  const flag = countryIdFlag[type];

  if (isImage(flag)) {
    return (
      <div className={classNames(className, styles.img)} {...otherProps}>
        <img src={flag} />
      </div>
    );
  }
  return <FlagIcon type={flag} className={className} {...otherProps} />;
};

export default CountryFlag;
