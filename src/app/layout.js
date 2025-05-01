import { Providers } from './provider';
import './globals.css';

export const metadata = {
  title: 'Joshua Pautanes - Potfolio',
  description: 'My personal website and portfolio. Know more about me and lets talk',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
