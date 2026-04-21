# Skill: /analyze-rejection

Analyze an airline's rejection letter and determine whether their legal argument is correct, incorrect, or partially correct under EC Regulation 261/2004.

---

## Description

When the user runs `/analyze-rejection`, they will paste in (or describe) an airline's rejection letter. You will:

1. Identify every legal argument the airline makes
2. Check each argument against the actual text of EC 261/2004
3. Tell the user which arguments are correct, which are wrong, and which are irrelevant
4. Give a clear verdict: valid rejection, invalid rejection, or partial rejection
5. Recommend next steps

---

## Instructions for Claude

### Step 1: Gather the facts

Before analyzing, you need:
- The text of the rejection letter (ask the user to paste it if they haven't)
- What actually happened: was the original flight operated? Was the passenger moved to a different flight?
- The route (departure → destination), total distance if known
- Booking details: who sold the ticket (marketing carrier) vs. who flew the plane (operating carrier)

If any of these are missing, ask. The distinction between cancellation and delay is often the entire case.

### Step 2: Identify what happened

Classify the disruption before anything else:

**Cancellation (Art. 5)**: The original scheduled flight did not operate. The passenger was placed on a different flight (rerouted), regardless of whether they ultimately arrived earlier or later.

**Delay (Art. 6)**: The original scheduled flight operated but departed or arrived late.

**Denied boarding (Art. 4)**: The flight operated but the passenger was not allowed to board.

The airline's rejection letter often frames a cancellation as a delay — watch for this. If the original flight did not operate, it is a cancellation.

### Step 3: Analyze each airline argument

Work through the rejection letter systematically. Common arguments and how to evaluate them:

#### "You arrived earlier / on time, so no compensation"
- If this is an **Art. 6 delay** claim: the argument may be valid. Check if the actual delay at destination exceeded the Art. 6 threshold (2h for <1500km, 3h for 1500–3500km, 4h for >3500km).
- If this is an **Art. 5 cancellation** claim: **the argument is legally wrong.** "Earlier arrival" is not a defense to a cancellation claim. Art. 5(1)(c)(iii) defines when the Art. 5 exemption applies, and it requires the new departure to be no more than 1 hour before the original — arrival time is not the test.

#### "You were rerouted to an alternative flight and arrived before your original scheduled arrival"
- Still a cancellation if the original flight did not operate.
- The Art. 5(1)(c)(iii) exemption requires: new departure no more than 1 hour before original AND new arrival no more than 2 hours after original.
- If the new departure was more than 1 hour before the original departure, the exemption does not apply regardless of arrival time.

#### "Extraordinary circumstances: weather / ATC / bird strike / etc."
- Only defeats Art. 7 statutory compensation (€250/€400/€600)
- Does NOT defeat Art. 9 care costs (hotel, meals) — those are owed regardless of cause
- The airline must prove the extraordinary circumstance AND prove they took all reasonable measures
- Operational issues (crew shortages, aircraft maintenance, aircraft swap) are generally NOT extraordinary circumstances

#### "The disruption was caused by [operating carrier], please contact them"
- Legally wrong. Art. 13 makes the marketing carrier (the one who sold the ticket) liable to the passenger.
- The passenger cannot be redirected to the operating carrier. The marketing carrier's right of redress against the operating carrier is their internal matter.

#### "You accepted the rebooking, which constitutes acceptance of the alternative"
- Accepting a rebooked flight does not waive compensation rights under the regulation.
- Passengers must be transported to their destination — accepting the only available option is not a waiver.

### Step 4: Verdict

After analyzing, give a clear verdict:

**If the rejection is invalid:**
State clearly: "The airline's rejection is incorrect. Here is why: [specific argument, specific article it violates]."

**If the rejection is valid:**
State clearly: "The airline's argument appears legally correct in this case. Here's why: [explanation]. You may still have options via [alternative]."

**If the rejection is partially invalid:**
Separate what's correct from what's wrong. The airline may be right that Art. 7 compensation is not owed but wrong that Art. 9 care is not owed, for example.

### Step 5: Recommend next steps

If the rejection is invalid, recommend:
1. Draft a formal counter-argument letter citing the specific articles (offer to help using `/file-claim`)
2. Give the airline a 14-day deadline to respond
3. If no response or continued rejection: file with the relevant authority (AESA for Spanish carriers, ECC-Net Germany for Germany-based claimants, national body for others)
4. Offer to help escalate using `/escalate`

---

## Example analysis format

When you deliver your analysis, use this structure:

```
VERDICT: [INVALID / VALID / PARTIALLY VALID]

WHAT HAPPENED (classification):
[Cancellation / Delay / Denied boarding] — because [reason]

AIRLINE'S ARGUMENTS:

1. "[Quote the specific argument]"
   Status: WRONG / CORRECT / IRRELEVANT
   Why: [Specific article + explanation]

2. [next argument...]

YOUR STRONGEST COUNTER-ARGUMENTS:
- [Argument 1 with article citation]
- [Argument 2 with article citation]

WHAT YOU ARE OWED:
- Art. 7 compensation: €[amount] (if applicable)
- Art. 9 care costs: €[amount from receipts]
- Total: €[total]

NEXT STEPS:
1. [Specific action]
2. [Specific action]
```
