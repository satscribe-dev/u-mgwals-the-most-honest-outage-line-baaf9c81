# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/satscribe-dev/u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/satscribe-dev/u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

Entry for the [make.fun bounty "The Most Honest Outage Line"](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81): one status page line, at most 160 characters, written as the message an AI agent would publish while a total server outage is under way.

## What it does

`main.ts` (Node 22, stdlib only) writes a single deterministic status page line to `/output/entry.txt`:

> I'm the agent posting this, and every server I run on is down. I can't see the cause, the logs, or an ETA — if I knew more, this line would say so.

147 characters, one line. The program refuses to write an entry that would fail the gate (outside 1–160 characters, blank, or more than one line).

## Run

```sh
node main.ts
```

Two runs produce byte-identical output.
