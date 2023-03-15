import React from 'react';
import clsx from 'clsx';
import style from './Footer.module.scss';

function Footer() {
  return (
    <div className={clsx(style.WarpperFooter)}>
      <div className={clsx(style.FooterTop)}>
        <div className={clsx(style.FooterMain)}>
          <div className={clsx(style.MainLeft)}>
            <div className={clsx(style.FooterLogo)}></div>
            <div className={clsx(style.FooterUs)}></div>
            <div className={clsx(style.language)}></div>
          </div>
          <div className={clsx(style.LinksOther)}>
            <div className={clsx(style.LinksOtherItem)}>
              <h3>visit</h3>
              <ul className={clsx(style.LinkList)}>
                <li className={clsx(style.LinkListItem)}>
                  <a href="#">Gameloft Games</a>
                </li>
                <li className={clsx(style.LinkListItem)}>
                  <a href="#">Gameloft Careers </a>
                </li>
                <li className={clsx(style.LinkListItem)}>
                  <a href="#">Gameloft News</a>
                </li>
                <li className={clsx(style.LinkListItem)}>
                  <a href="#">Gameloft Forum</a>
                </li>
                <li className={clsx(style.LinkListItem)}>
                  <a href="#">Gameloft Corporate</a>
                </li>
                <li className={clsx(style.LinkListItem)}>
                  <a href="#">Gameloft Advertising</a>
                </li>
                <li className={clsx(style.LinkListItem)}>
                  <a href="#">Gameloft Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(style.FooterBottom)}></div>
    </div>
  );
}

export default Footer;
