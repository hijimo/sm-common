import React from 'react';
import styles from '../index.less';

const PrivacyPolicy = () => (
  <div className={styles.ptl}>
    {/* <p className={styles.ptlTitle}>Privacy Policy</p> */}
    <p>
      Ucharm Technology Co., Ltd. (Referred to as UCHARM hereinafter) attaches great importance to
      privacy of users. Statement of Protection of Privacy Right by UCHARM Technology Co., Ltd. is a
      commitment this website makes to the users to protect their privacy, which is applicable to
      your interactions with Yeeorder.com and online services that you register and use through
      Yeeorder.com, and please be sure to read it carefully.
    </p>
    <ul className={styles.ul}>
      {/* 第一点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>Collection of Member's Information</span>
        <p>
          UCHARM collects the necessary personal data of users only for legitimate purposes, and
          with the consent of the users, in a lawful manner. The Platform will call the users and
          contact the members according to the real and effective contact information that the users
          have provided for information audit and confirmation and so on. We will not be liable for
          damages that may be incurred by members who arbitrarily dispose the promotional messages
          or refuse to answer our phone calls. When registering with the Platform, the members shall
          provide real, accurate and complete information of their own and their units and ensure
          the timely updating of member information. We will not be liable for any damage that may
          be caused by the inaccurate or incomplete information provided by members or the failure
          of timely updating. If the information provided by members is inaccurate, incomplete or
          not updated in time leads to the loss of UCHARM, UCHARM reserves the right to recourse.
        </p>
      </li>
      {/* 第二点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>Use of Member's Information</span>
        <p>
          UCHARM shall have the right to use the information provided by users for purposes of
          internal management, administration and statistics, including, but not limited to, daily
          management of services and products that UCHARM has provided to the members, monitoring
          the safe use of this website, carrying out internal survey, conducting statistics and
          research on visiting data; promoting the updating of services and products for members'
          use; confirming and checking contact and consumption lists for promotional purposes; for
          the purpose of resolving disputes and enforcing this Statement.
        </p>
      </li>
      {/* 第三点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>Disclosure of Member's Information</span>
        <p>
          UCHARM will take reasonable security measures to protect the information provided by its
          members. The Platform will not disclose the members' information (including the members'
          data) to any nonmembers without the prior permission of the users, except for one of the
          following circumstances:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <p>
              The competent authorities request the information in accordance with legal procedures.
            </p>
          </li>
          <li className={styles.li}>
            <p>For the purpose of public safety.</p>
          </li>
          <li className={styles.li}>
            <p>
              Share the members' information with other members or units upon the permission of the
              member.
            </p>
          </li>
          <li className={styles.li}>
            <p>
              Disclosure of members' information as a result of improper confidentiality maintenance
              for their own information.
            </p>
          </li>
          <li className={styles.li}>
            <p>
              Data leakage, loss, theft or tampering and so on as a result of network lines, hacker
              attacks, computer viruses and so on.
            </p>
          </li>
          <li className={styles.li}>
            <p>To protect more important rights or property of other members of this website.</p>
          </li>
          <li className={styles.li}>
            <p>Other special or emergency situations.</p>
          </li>
        </ul>
      </li>
      {/* 第四点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>Use of Cookies technology</span>
        <p>
          When the users access the Platform with the Cookie setting, the Platform server will
          automatically send Cookies to the users' browser, and store it in users' computer hard
          drive, and this Cookie will be responsible for recording users' various operations, browse
          and consumption habits as well as credit records when they visit the Platform in future.
          By using the Cookies technology, UCHARM can provide you with more thoughtful personalized
          service. UCHARM will use Cookies technology to provide users with the information they are
          interested in or save passwords for them.
        </p>
      </li>
      {/* 第五点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>Use of Information</span>
        <p>
          Users agree that UCHARM has the right to conduct comprehensive statistical analysis on the
          data relating to user companys identity and transactions and disclose such analysis to
          advertisers for purpose and use that UCHARM determines reasonable. However, in such cases,
          we will not disclose to such entities any information that may be used to identify our
          users personal identity, except for that information obtained through analyzing the
          username or other disclosable information of our users.
        </p>
        <p>
          You agree that we may disclose or use your personal information for improving and enabling
          our services to better suit your needs, so that you can have better usage experience when
          using our services.
        </p>
        <p>
          You agree that we may use your personal information to contact you and provide you with
          information that may be of any interest to you, such as commercial short messages relating
          to the introduction and marketing of products and services, promotional offers or business
          investment opportunities. Your acceptance of UCHARM Terms of Use and this Privacy Policy
          constitutes your express consent to receive such messages. If you refuse to receive such
          messages, you may unsubscribe by text message following the instructions in such text
          messages or in any other method provided by UCHARM.
        </p>
        <p>
          Business opportunities and quotations submitted by our members are posted on our website,
          which are accessible by our other members.
        </p>
      </li>
      {/* 第六点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>External Links</span>
        <p>
          This website contains links to other websites. UCHARM shall not be liable in any way for
          the privacy protection measures of those websites. Some new links may be added to the
          Platform of our business partners or common brands when necessary.
        </p>
      </li>
      {/* 第七点 */}
      <li className={styles.li}>
        <span className={styles.subTitle}>Safety</span>
        <p>
          Our website has in place security measures to protect the information we possess from
          being lost, misused or altered. Such security measures include backing up data to other
          servers and encrypting user passwords.
        </p>
        <p>
          Notwithstanding the foregoing, please note no data transmission over the internet or any
          wireless network can be guaranteed to be perfectly secure.
        </p>
      </li>
    </ul>
  </div>
);
export default PrivacyPolicy;
