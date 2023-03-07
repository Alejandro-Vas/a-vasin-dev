import '@styles/globals.scss';
import { ReactNode } from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';

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

        {children}

        <Footer />
      </body>

    </html>
  );
}

export default Layout;
