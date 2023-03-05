import '../styles/globals.css';
import { ReactNode } from 'react';

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

      <body>{children}</body>
    </html>
  );
}

export default Layout;
