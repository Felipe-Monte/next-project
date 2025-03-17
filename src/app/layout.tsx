import type { Metadata } from 'next';
import './globals.css';
import Menu from '@/components/menu';

export const metadata: Metadata = {
  title: 'Carteira wallet',
  description: 'Criado por Felipe',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-lt-installed="true">
      <body cz-shortcut-listen="true">
        <Menu />
        {children}
      </body>
    </html>
  );
}
