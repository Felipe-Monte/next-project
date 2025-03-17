import type { Metadata } from 'next';
import './globals.css';

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
      <body cz-shortcut-listen="true">{children}</body>
    </html>
  );
}
