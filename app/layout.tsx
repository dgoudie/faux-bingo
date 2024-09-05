import './globals.css';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import SideBar from '@/components/SideBar';
import classNames from 'classnames';
import styles from './layout.module.css';
import { teams } from '@/app/team-data';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Faux Bingo',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional'
          rel='stylesheet'
        />
      </head>
      <body className={classNames(inter.className, styles.root)}>
        <h1 className={classNames('title', styles.title)}>
          Faux Bingo<hr className={styles.hr}></hr>
        </h1>

        <SideBar />
        <div className={styles.main}>{children}</div>
      </body>
    </html>
  );
}
