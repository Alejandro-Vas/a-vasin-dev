import '@styles/globals.scss';
import { ReactNode } from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import styles from './page.module.scss';

export const metadata = {
  title: 'Aleksandr Vasin\'s portfolio',
  description: 'Aleksandr Vasin\'s portfolio',
};

interface ILayoutProps {
  children: ReactNode
}

function Layout({ children }: ILayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className={styles.container}>
          {children}
        </div>

        <Footer />
      </body>

    </html>
  );
}

export default Layout;
