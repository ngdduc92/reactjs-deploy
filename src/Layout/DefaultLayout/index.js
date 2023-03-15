import clsx from 'clsx';
import style from './DefaultLayout.module.scss';
import Header from './Header';
import Footer from './Footer';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={clsx(style.Container)}>
        <div className={clsx(style.Content)}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
