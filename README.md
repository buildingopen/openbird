# open-air-help

Claude Code skills and guides for filing EU air passenger rights claims under EC 261/2004.

This repo was built from a real case where an airline rejected a valid claim with a wrong legal argument — and the claimant won by knowing exactly which counter-arguments to use and which authorities to file with.

---

## What this repo does

It gives Claude enough legal context to help you:

1. **Analyze a rejection letter** and identify whether the airline's legal argument is correct or wrong
2. **Draft claim letters** with the right legal citations
3. **File with enforcement authorities** — AESA (Spain), ECC-Net Germany, or your national body
4. **Escalate** when the airline ignores you or keeps rejecting

---

## Quick start

```bash
# Clone the repo
git clone https://github.com/federicodeponte/open-air-help
cd open-air-help

# Start Claude Code
claude
```

Then use the slash commands:

| Command | What it does |
|---|---|
| `/analyze-rejection` | Paste in a rejection letter; Claude tells you if the airline is wrong and why |
| `/file-claim` | Guides you through drafting an initial claim to the airline |
| `/escalate` | Helps you file with AESA, ECC-Net, or other enforcement bodies |

---

## Who this is for

You had a flight disruption in the EU. The airline either:
- Ignored your claim
- Rejected it with a legal argument that sounds official but may be wrong
- Paid partial compensation but not the full amount you're owed

You want to fight back without hiring a lawyer.

---

## What you can claim

Under **EC Regulation 261/2004**:

- **€250** for flights under 1500km
- **€400** for EU flights over 1500km, or other flights 1500–3500km
- **€600** for flights over 3500km (including most transatlantic routes)

Plus **care costs** (hotel, meals, transfers) that are owed regardless of distance.

These amounts apply to cancellations and long delays. The airline's job is to pay them — your job is to make sure they don't talk you out of it with bad legal arguments.

---

## The case this was built from

Real case, April 2026:

- **Route**: Berlin BER → Barcelona BCN → San Francisco SFO (marketed by LEVEL, operated by Vueling on first leg)
- **Disruption**: First leg cancelled/rerouted, placed on a flight from a different airport departing 8.5 hours earlier
- **Airline's rejection**: "You arrived earlier, so no compensation"
- **Why that's wrong**: The "earlier arrival" exemption (Art. 5(1)(c)(iii)) only defeats **Art. 6 delay** claims. It does not defeat an **Art. 5 cancellation** claim. A rerouting that departs from a different airport 8.5 hours before the original flight is not a minor change — it is a cancellation and rebooking.
- **Amount claimed**: €925.61 (hotel + meal + non-refundable accommodation + €600 statutory compensation)
- **Filed with**: AESA (Spain, binding ADR), ECC-Net Germany

---

## File structure

```
open-air-help/
├── README.md               # This file
├── CLAUDE.md               # Context for Claude Code
├── skills/
│   ├── analyze-rejection.md    # /analyze-rejection skill
│   ├── file-claim.md           # /file-claim skill
│   └── escalate.md             # /escalate skill
├── guides/
│   ├── your-rights.md          # What EC 261/2004 actually says
│   ├── aesa.md                 # How to file with Spain's AESA
│   ├── eccnet.md               # How to file with ECC-Net Germany
│   └── counter-arguments.md    # Common airline rejections and how to defeat them
└── templates/
    ├── initial-claim.md        # First letter to the airline
    ├── escalation-notice.md    # "You have 14 days before I escalate" letter
    └── aesa-complaint.md       # AESA ADR02 complaint text
```

---

## Disclaimer

This is not legal advice. It is practical information about a regulation that applies across the EU. The legal positions described here are drawn from the text of EC 261/2004 and from a real case — not from a lawyer. If your claim is complex or large, consult a solicitor or use a no-win-no-fee claims service.

That said: airlines routinely reject valid claims hoping passengers won't push back. The information here is accurate enough to push back effectively.

---

## Contributing

If you've won an EC 261/2004 case with an argument or authority not covered here, open a PR. Real, won cases are the most valuable content.
