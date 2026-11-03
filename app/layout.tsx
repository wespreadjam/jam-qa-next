import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Ferrowind', template: '%s | Ferrowind' },
  description: 'Ferrowind is uptime and cron monitoring for small engineering teams.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 720, margin: '2rem auto', padding: '0 1rem', lineHeight: 1.6 }}>
        {children}
      </body>
    </html>
  );
}
