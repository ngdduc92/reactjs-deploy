import React from 'react';
import Banner from '../../Layout/components/Banner';
import RegisterForm from '../../Layout/components/RegisterForm';
import style from './Home.module.scss';
import clsx from 'clsx';
import EventsPromotions from '../../Layout/components/EventsPromotions';
function Home() {
  return (
    <>
      <Banner />
      <div className={clsx(style.BgSubColor)}>
        <RegisterForm />
      </div>
      <div className={clsx(style.BgWhiteColor)}></div>
      <div className={clsx(style.BgSubColor)}>
        <EventsPromotions />
      </div>
    </>
  );
}

export default Home;
