import React from 'react';
import styles from '../index.less';

const PrivacyPolicy = () => (
  <div className={styles.ptl}>
    {/* <p className={styles.ptlTitle}>隐私政策</p> */}
    <p>
      友创科技有限公司(以下简称“友创”)非常重视用户的隐私保护。友创科技有限公司隐私权保护声明是本网站对用户隐私权保护的承诺，适用于您与Yeeorder.com的互动以及您通过Yeeorder.com注册和使用的在线服务，请务必仔细阅读。
    </p>
    <ul className={styles.ul}>
      {/* 第一点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>收集会员资料</span>
        <p>
          友创仅出于合法目的并在得到用户同意的情况下以合法方式收集用户的必要个人数据。平台将根据用户提供的真实有效的联系信息，致电用户并与会员联系，以进行信息审核和确认等。我们对会员随意处置促销信息或拒绝接听我们的电话所造成的损失不承担任何责任。会员在平台上注册时，应提供自己和公司的真实，准确，完整的信息，并确保及时更新会员信息。对于会员提供的信息不正确或不完整或未能及时更新而造成的任何损失，我们概不负责。如果会员提供的信息不正确，不完整或未及时更新导致友创的损失，则友创保留追索权。
        </p>
      </li>
      {/* 第二点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>会员信息的使用</span>
        <p>
          友创有权将用户提供的信息用于内部管理，行政和统计目的，包括但不限于友创向会员提供的服务和产品的日常管理，以监控本网站的安全使用进行内部调查，对访问数据进行统计和研究；促进更新服务和产品以供会员使用；确认并检查联系和消费清单以进行促销；为了解决争端和执行本声明。
        </p>
      </li>
      {/* 第三点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>会员信息的披露</span>
        <p>
          友创将采取合理的安全措施来保护其成员提供的信息。未经用户事先许可，平台不会向任何非会员披露会员信息（包括会员数据），但以下情况之一除外：
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <p>主管当局根据法律程序要求提供信息。</p>
          </li>
          <li className={styles.li}>
            <p>为了公共安全。</p>
          </li>
          <li className={styles.li}>
            <p>经会员许可，与其他会员或单位共享会员信息。</p>
          </li>
          <li className={styles.li}>
            <p>由于对自己信息的保密性不当而导致的会员信息泄露。</p>
          </li>
          <li className={styles.li}>
            <p>由于网络线路，黑客攻击，计算机病毒等导致的数据泄漏，丢失，被盗或篡改等。</p>
          </li>
          <li className={styles.li}>
            <p>为了保护本网站其他成员的更重要的权利或财产。</p>
          </li>
          <li className={styles.li}>
            <p>其他特殊或紧急情况。</p>
          </li>
        </ul>
      </li>
      {/* 第四点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>Cookies技术的使用</span>
        <p>
          当用户使用Cookie设置访问平台时，平台服务器将自动将Cookie发送到用户的浏览器，并将其存储在用户的计算机硬盘中，该Cookie负责记录用户的各种操作，浏览和使用情况他们将来访问平台时的习惯和信用记录。通过使用Cookies技术，友创可以为您提供更周到的个性化服务。
          友创将使用Cookies技术为用户提供他们感兴趣的信息或为他们保存密码。
        </p>
      </li>
      {/* 第五点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>信息的使用</span>
        <p>
          用户同意，友创有权对与用户公司的身份和交易有关的数据进行全面的统计分析，并出于友创认为合理的目的和用途向广告商披露此类分析。但是，在这种情况下，除了通过分析用户名或用户的其他可披露信息获得的信息之外，我们不会向任何实体透露任何可用于识别用户的个人身份的信息。
        </p>
        <p>
          您同意我们可以披露或使用您的个人信息来改善和使我们的服务更好地满足您的需求，以便您在使用我们的服务时获得更好的使用体验。
        </p>
        <p>
          您同意我们可以使用您的个人信息与您联系，并为您提供您可能感兴趣的信息，例如与产品和服务的引入和营销，促销优惠或商业投资机会有关的商业短信。您接受友创使用条款和本隐私政策即表示您明确同意接收此类消息。如果您拒绝接收此类消息，则可以按照此类文本消息中的说明或通过友创提供的任何其他方法取消订阅文本消息。
        </p>
        <p>会员提交的商机和报价均发布在我们的网站上，其他会员也可以访问。</p>
      </li>
      {/* 第六点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>外部链接</span>
        <p>
          该网站包含其他网站的链接。
          友创对这些网站的隐私保护措施概不负责。必要时，某些新链接可能会添加到我们的业务合作伙伴或常见品牌的平台中。
        </p>
      </li>
      {/* 第七点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>安全</span>
        <p>
          我们的网站采取了安全措施，以保护我们拥有的信息不会丢失，滥用或更改。
          此类安全措施包括将数据备份到其他服务器和加密用户密码。
        </p>
        <p>
          尽管有上述规定，请注意，不能保证通过互联网或任何无线网络进行的数据传输都是绝对安全的。
        </p>
      </li>
    </ul>
  </div>
);
export default PrivacyPolicy;
