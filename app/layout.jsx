import './globals.css';

export const metadata = {
  title: 'Riventra | Intelligent Retail, AI Automation & Digital Solutions',
  description:
    'Riventra builds intelligent retail, AI automation, reporting, and digital transformation solutions for communities and organizations.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
