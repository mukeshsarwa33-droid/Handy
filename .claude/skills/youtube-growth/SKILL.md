---
name: youtube-growth
description: Autonomous YouTube growth workflow focused on engagement. Use when asked to generate video ideas, titles, thumbnail concepts, or hooks for a channel, review channel performance, run a recurring ideation cycle, or plan the next batch of videos. Works from a channel profile and analytics exports placed in the repo. Never publishes or uploads anything.
---

# YouTube Growth Workflow (engagement-first)

This skill runs one growth cycle for a channel: read the channel's state, find
outlier patterns, produce ranked video briefs, and log the results so the next
cycle learns from this one. It produces plans and drafts only. A human approves
and uploads every video.

## Inputs (read these first)

All paths are relative to the repo root.

| Path | What it is | Required |
|---|---|---|
| `youtube/channel-profile.md` | Niche, audience, brand voice, tone limits, past wins, things to avoid | Yes |
| `youtube/analytics/*.csv` | YouTube Studio exports (per video: views, CTR, average view duration, impressions) | Recommended |
| `youtube/outliers/*.md` | Notes on outlier videos (3x+ channel average) in any niche, with what made them work | Optional |
| `youtube/runs/` | Output of previous cycles, used to avoid repeats and to measure what worked | Created automatically |

If `channel-profile.md` is missing or still has placeholder text, stop and ask
the user to fill it in from `channel-profile.template.md`. Do not invent a niche.

If there are no analytics exports, say so in the output and base the ideas on the
profile and outlier notes only. Mark every idea's confidence accordingly.

## Core method

Read `reference.md` in this folder for the detailed rules. In short:

1. **Measure the floor and ceiling.** From the analytics, estimate the floor (typical
   views of the core audience on an average video) and the ceiling (best recent video).
   An idea is only worth making if its possible reach beats the floor clearly.
2. **Find outliers, then borrow the winning parts.** Take the parts that made an
   outlier work (format, title shape, thumbnail composition, stakes) and recombine
   them with this channel's topic. Never copy another creator's title, script, or
   thumbnail. Describe the mechanism in your own words and build something new.
3. **Keep topic overlap near 80%.** Each idea must sit in the channel's core topic.
   A bridge topic is allowed only if it is labeled as a stretch with a reason.
4. **Target one audience tier per video.** Label each idea Core (superfans), Casual
   (regular viewers), or New (broad market). Aim for a mix across a batch, with
   more New ideas when the channel's growth is the goal.
5. **Write titles for the homepage, not just search.** Give three levels for each
   idea: a plain version, a version with a story and a superlative, and a version
   with a contradiction or curiosity gap. Recommend one. Use title case. No all-caps.
6. **Manufacture proportional stakes.** Each idea needs a clear reason to care about
   the outcome, matched to the channel's tone (for example, a challenge with a
   visible goal, or a stated cost of not knowing something).
7. **Check the pendulum.** Ideas should fix watchability first, then packaging. Do not
   recommend expensive production unless the profile says packaging is already strong.

## Output for each cycle

Create `youtube/runs/YYYY-MM-DD/` and write:

- `summary.md`: what the analytics showed (or that none were provided), the floor
  and ceiling estimates, and the top 3 recommendations.
- `ideas.md`: 8 to 12 ideas. For each: audience tier, one-line concept, why it should
  beat the floor, three title levels with the recommended one marked, thumbnail
  concept (what is visible, the emotion, the text, if any), the stakes, a hook for
  the first 10 seconds, and a confidence level (high, medium, low) with the reason.
- `calendar.md`: a suggested order for the next 4 uploads that mixes tiers and formats,
  and avoids repeating the same format more than twice in a row.
- `questions.md`: anything that needs the user's input (missing data, brand decisions,
  people or locations that would need consent).

Then update `youtube/runs/LOG.md` with one line per cycle: date, number of ideas,
top pick, and the open questions. Read the previous cycle's log first, and do not
repeat an idea that was already proposed unless the new data supports it.

## Measuring what worked

At the start of each cycle, if the analytics include videos from earlier cycles'
recommendations, compare their CTR and average view duration against the channel
average. Record the result in `summary.md`. Keep the lessons short and put them in
`youtube/runs/LESSONS.md` so the next cycle reads them. Remove any lesson the data no
longer supports.

## Guardrails (always apply)

- **Never publish, upload, schedule on YouTube, or reply to comments.** These need the
  user's approval in person. Drafts only.
- **Never invent metrics.** If a number is not in the input files, do not state it.
- **Never copy another creator's title, script, thumbnail, or footage.** Use outlier
  notes only as a source of mechanisms.
- **No clickbait that the video cannot deliver.** The title's promise must be paid off
  in the first minute. Flag any idea where that is hard to do.
- **Respect people in videos.** Flag any idea that involves filming strangers, minors,
  private places, or anything that needs consent or a release.
- **Keep the brand tone** from `channel-profile.md`, including its "avoid" list.

## Autonomous runs

When this skill is run on a schedule with no user present, it does the full cycle
above and commits the `youtube/runs/` output to the working branch. It must not
push to any other branch or open a pull request. If `channel-profile.md` is missing,
it writes a single `questions.md` and stops.
