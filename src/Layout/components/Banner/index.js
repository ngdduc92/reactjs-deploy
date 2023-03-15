import React from 'react';
import style from './Banner.module.scss';
import clsx from 'clsx';
import Share from '../../../assets/img/share.png';
import Mail from '../../../assets/img/mail.png';
import Support from '../../../assets/img/support.png';
import Rating from '../../../assets/img/rating.png';
import Nintendo from '../../../assets/img/nintendo.png';
import Microsoft from '../../../assets/img/microsoft.png';
import Steam from '../../../assets/img/steam.png';
function Banner() {
  return (
    <div className={clsx(style.BannerWrapper)}>
      <div className={clsx(style.Banner)}>
        <div className={clsx(style.WrapperDescription)}>
          <div className={clsx(style.Description)}>
            <div className={clsx(style.DescriptionTitle)}>
              <h2>Asphalt 9: Legends</h2>
              <div className={clsx(style.DescriptionAction)}>
                <span>Racing / Action</span>
                <div className={clsx(style.Rating)}>
                  <img src={Rating} alt="Rating" />
                </div>
              </div>
            </div>
            <div className={clsx(style.DescriptionContent)}>
              Here is a game that breaks the rules. A game for all the dreamers, the outsiders and the rebels who refuse
              to follow guidelines and who cannot accept the status quo.
            </div>
          </div>
          <ul className={clsx(style.Social)}>
            <li className={clsx(style.SocialItem)}>
              <img src={Share} />
            </li>
            <li className={clsx(style.SocialItem)}>
              <img src={Mail} />
            </li>
            <li className={clsx(style.SocialItem)}>
              <img src={Support} />
            </li>
          </ul>
        </div>
      </div>
      <div className={clsx(style.WrapperStore)}>
        <div className={clsx(style.Store)}>
          <span className={clsx(style.StoreDownload)}>Download latest version</span>
          <div className={clsx(style.StoreTrademark)}>
            <div className={clsx(style.TrademarkItem)}>
              <img src={Nintendo} alt="nintendo" />
            </div>
            <div className={clsx(style.TrademarkItem)}>
              <img src={Microsoft} alt="Microsoft" />
            </div>
            <div className={clsx(style.TrademarkItem)}>
              <img src={Steam} alt="steam" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
