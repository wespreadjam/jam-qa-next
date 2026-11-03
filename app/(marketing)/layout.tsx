import Link from 'next/link';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav style={{ display: 'flex', gap: '1rem' }}>
        <Link href="/">Ferrowind</Link>
        <Link href="/features/">Features</Link>
        <Link href="/pricing/">Pricing</Link>
        <Link href="/blog/">Blog</Link>
      </nav>
      <main>{children}</main>
      <footer><p>&copy; 2026 Ferrowind, Inc. Fictional company used for testing.</p></footer>
    </>
  );
}
