import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Ferrowind pricing: Hobby free, Team $24 per month, Business $99 per month.',
};

export default function Pricing() {
  return (
    <>
      <h1>Pricing</h1>
      <table>
        <thead><tr><th>Plan</th><th>Price</th><th>Monitors</th></tr></thead>
        <tbody>
          <tr><td>Hobby</td><td>$0</td><td>10 monitors, 3-minute checks</td></tr>
          <tr><td>Team</td><td>$24 / month</td><td>100 monitors, 30-second checks, status page</td></tr>
          <tr><td>Business</td><td>$99 / month</td><td>500 monitors, SSO, audit log, SLA reports</td></tr>
        </tbody>
      </table>
    </>
  );
}
