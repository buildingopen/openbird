# Social copy — openbird launch

Pre-written posts for Twitter/X, LinkedIn, HN, and Product Hunt.

---

## Twitter / X — thread starter

```
Airlines reject ~80% of valid flight compensation claims (EC 261/2004).

The rejection letters are designed to look authoritative enough that you stop.

I built openbird — Claude Code skills that read your rejection letter and tell you exactly which article the airline got wrong.

Thread 🧵
```

**Thread 2:**
```
Real case that built this:

Berlin → Barcelona → San Francisco
Flight cancelled. Rerouted from a different airport, 8.5 hours earlier.

Airline rejection: "You arrived earlier than scheduled, so no compensation."

That's an Art. 6 argument. The flight was CANCELLED. Art. 5 applies.
```

**Thread 3:**
```
Under Art. 5(1)(c)(iii), the compensation exemption requires the new departure to be
≤1 hour before the original. 8.5 hours before fails the test entirely.

The airline also said "file with the operating carrier."
Art. 13 puts full liability on whoever sold the ticket. Also wrong.
```

**Thread 4:**
```
openbird identifies these errors automatically.

Run /analyze-rejection in Claude Code, paste the letter, get:
- VALID / INVALID verdict
- The exact articles the airline misapplied
- A counter-argument you can send today

npx @buildingopen/openbird install
```

**Thread 5:**
```
You're owed:
- €250 for short EU flights
- €400 for mid-haul
- €600 for transatlantic

Plus hotel + meals regardless of cause.

Airlines are betting you won't know this. Open source. github.com/buildingopen/openbird
```

---

## LinkedIn post

```
Airlines reject roughly 80% of valid flight compensation claims under EC 261/2004.

The rejection letters are carefully written to sound conclusive. Most passengers read them and give up.

I built openbird — an open-source set of Claude Code skills that give you the legal precision to push back. You paste the rejection letter, run /analyze-rejection, and get back a clear verdict: is the airline's argument correct, or are they wrong?

The tool was built from a real case: Berlin → San Francisco, flight cancelled, airline claimed "you arrived earlier so no compensation." That argument only applies to delay claims (Art. 6). The flight was cancelled — Art. 5 applies, and the departure-time exemption requires ≤1 hour before original. We were rerouted 8.5 hours early. The claim was for €600. The airline paid.

Three skills:
/analyze-rejection — identifies legal errors in the rejection letter
/file-claim — drafts a formal counter-letter with correct article citations
/escalate — prepares your AESA or ECC-Net filing

Install: npx @buildingopen/openbird install

This is not legal advice. But the regulation text is precise, the common airline tactics are well-documented, and knowing the exact article to cite changes the outcome.

→ github.com/buildingopen/openbird
```

---

## Hacker News — Show HN

**Title:**
```
Show HN: openbird – Claude Code skills for EU flight compensation claims (EC 261/2004)
```

**Description / first comment:**
```
Airlines reject ~80% of valid EC 261/2004 compensation claims. The rejections are formulaic — the same six tactics, applied in slightly different language, hoping passengers won't push back.

I built openbird after a real case: Berlin → San Francisco, first leg cancelled, airline's rejection misapplied Art. 6 (delay) logic to an Art. 5 (cancellation) claim. The legal error is precise: Art. 5(1)(c)(iii) requires the rebooked departure to be ≤1 hour before original; we were rebooked 8.5 hours early. The airline paid €600 after an AESA ADR02 filing.

openbird is a set of Claude Code skills:
- /analyze-rejection: paste the rejection letter, get a VALID/INVALID verdict with specific article analysis
- /file-claim: drafts a formal counter-letter with correct citations
- /escalate: prepares AESA (binding for Spanish carriers), ECC-Net Germany, or other national body filings

Install: npx @buildingopen/openbird install

Open source (MIT). Built on the actual regulation text. Real won cases are the most valuable contributions — PRs with new rejection tactics and how they were defeated are very welcome.

Technical note: the tool works by loading CLAUDE.md (legal context) and three skill files into Claude Code's context. No API calls, no SaaS, no middleman.

Repo: https://github.com/buildingopen/openbird
```

---

## Product Hunt

**Tagline:**
```
Airlines reject 80% of valid EC 261 claims. openbird fights back.
```

**Description:**
```
openbird gives you the legal firepower to fight airline rejection letters — no lawyer needed.

Under EU Regulation 261/2004, you're owed €250–€600 when your flight is cancelled or significantly delayed. Airlines know this and reject valid claims anyway, counting on you giving up.

openbird installs Claude Code skills that:
✈️ Analyze rejection letters article by article
⚖️ Identify the exact legal error the airline made
💰 Calculate what you're actually owed
📋 Draft counter-letters with correct article citations
🏛️ Prepare filings with AESA (Spain), ECC-Net Germany, and other national enforcement bodies

Built from a real case. Open source. Runs in 30 seconds.

npx @buildingopen/openbird install
```

**First comment (maker note):**
```
Built this after winning a €600 claim against LEVEL Airlines.

They cancelled my Berlin–Barcelona leg (part of a Berlin–San Francisco booking) and sent a rejection that said "you arrived earlier, so no compensation." That argument is for delay claims. My flight was cancelled. Different article. Different test. The airline lost.

The same six rejection tactics come up again and again. The regulation text is precise enough that once you know which article applies, the airline's argument often falls apart immediately.

Open to contributions — if you've won a case with an argument or carrier not covered here, please open a PR.
```
