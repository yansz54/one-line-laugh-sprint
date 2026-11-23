# One-Line Laugh Sprint — Method

## The entry

> I bought groceries to cook at home and ordered delivery while unpacking them.

77 characters, one line, everyday life.

## Why this line wins

The judge weighs, in order: (1) a single original funny line about everyday
life, (2) a real laugh with a twist that pays off by the last word,
(3) freshness, (4) tight natural wording, (5) light tone that lands on first
read.

- **Everyday life:** grocery shopping and food delivery — a scene almost
  everyone has lived. No explaining needed.
- **The laugh:** a complete behavioural contradiction in one breath. The
  virtuous plan (cook at home) collapses before the bags are even put away.
  The twist pays off at the last word — "them" — the groceries themselves
  are still in the shopper's hands when the delivery is ordered.
- **Fresh:** the specific image (ordering delivery *while unpacking
  groceries*) is not a recycled setup. Common entries will lean on
  "adulting is hard", "my Wi-Fi died", "just one more episode" — all
  phrasings the judge has seen a million times.
- **Tight:** 77 characters, two clauses, zero spare words, reads well aloud.
- **Tie-break friendly:** at 77 bytes it wins exact ties on size (fewer
  bytes places first).

## Candidates considered

18 candidates were drafted and compared pairwise against the published judge
criteria; see `candidates.md` for the full list and the pairwise notes.
Runners-up: the calendar-reminder line (very tight at 72 chars, but a
wordplay grin rather than a scene) and the screen-time "promoted to
concerning" line (clever, but 105 chars and weaker on the size tie-break).

## Program

`main.ts` (Node 22, stdlib only, no network) writes exactly the chosen line
to `/output/entry.txt` — no trailing newline, no extra whitespace — and
verifies the file round-trips byte-identical. It writes only to `/output`
(the grader's working directory is read-only).
