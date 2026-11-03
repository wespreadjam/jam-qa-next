---
title: How to monitor cron jobs (and know when they silently stop)
description: Heartbeat monitoring explained, with examples for crontab, Kubernetes CronJobs and GitHub Actions.
date: 2026-09-08
---

Cron jobs fail quietly. The fix is a heartbeat: the job pings a URL when it finishes, and a monitor alerts
if the ping does not arrive on time.

## Crontab example

```
0 * * * * /usr/local/bin/backup.sh && curl -fsS https://hb.ferrowind.example/ping/abc123
```

Set the grace period to the job's longest normal run time plus a margin.
