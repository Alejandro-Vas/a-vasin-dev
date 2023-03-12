import '@styles/globals.scss';
import { ReactNode } from 'react';
import Footer from '@components/Footer';
import Header from '@components/Header';
import { Roboto } from 'next/font/google';

export const metadata = {
  title: 'Aleksandr Vasin\'s portfolio',
  description: 'Aleksandr Vasin\'s portfolio',
};

interface ILayoutProps {
  children: ReactNode
}

const roboto = Roboto({
  weight: '300',
  subsets: ['cyrillic', 'cyrillic-ext'],
});

function Layout({ children }: ILayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className={roboto.className}>
          <Header />

          {children}

          <Footer />
        </div>
      </body>

    </html>
  );
}

export default Layout;
