import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features',
  description: 'Uptime checks, cron heartbeats, status pages and on-call alerting.',
};

export default function Features() {
  return (
    <>
      <h1>Features</h1>
      <h2>Uptime checks</h2>
      <p>HTTP, TCP, DNS and keyword checks every 30 seconds, confirmed from two regions before alerting.</p>
      <h2>Cron heartbeats</h2>
      <p>Ping a URL at the end of each job. Ferrowind alerts when a ping is late or missing.</p>
      <h2>Status pages</h2>
      <p>Public or private status pages with incident history and subscriber emails.</p>
      <h2>Alerting</h2>
      <p>Slack, SMS, email, PagerDuty and Opsgenie, with on-call schedules and escalation.</p>
    </>
  );
}
