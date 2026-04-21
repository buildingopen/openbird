# Skill: /file-claim

Draft a formal claim letter to the airline citing the correct articles of EC 261/2004, with the right compensation amounts and care costs.

---

## Description

When the user runs `/file-claim`, guide them through building a complete, legally grounded claim letter to send to the airline. This letter should:

- Cite the correct articles
- State the facts clearly
- Name the amounts claimed with a breakdown
- Give the airline a response deadline
- Signal that enforcement authority escalation will follow non-response

---

## Instructions for Claude

### Step 1: Gather claim details

Ask the user for the following if not already provided:

**Flight details:**
- Booking reference or ticket number
- Marketing carrier (who sold the ticket)
- Operating carrier (who flew the plane, if different)
- Scheduled departure: airport, date, time
- Scheduled arrival: airport, date, time
- Actual itinerary after disruption (what flights they actually took)

**Disruption details:**
- What happened exactly (flight cancelled, aircraft swapped, rerouted, denied boarding)
- Was the original flight operated?
- If rerouted: from which airport, at what time, to where
- How long before the flight were they informed

**Expenses incurred:**
- Hotel (amount, provider, dates)
- Meals (amounts)
- Transport to/from alternative airport or hotel
- Any non-refundable bookings that could not be used due to late/early arrival
- Phone calls made to sort out the disruption

**Personal details:**
- Full name
- Address
- Email
- Number of passengers in the booking (if multiple, each is owed separately)

### Step 2: Calculate compensation

**Art. 7 statutory compensation:**
- Determine route distance (offer to look it up if not known; BER→SFO is approximately 9,400km)
- ≤1500km: €250 per passenger
- >1500km intra-EU or 1500–3500km other: €400 per passenger
- >3500km (most intercontinental routes): €600 per passenger
- Check if Art. 5(1)(c)(iii) exemption applies — if the new departure was within 1h of original AND new arrival was within 2h of original, compensation may be halved or eliminated. Most rerouting scenarios do NOT meet this test.

**Art. 9 care costs:**
- List all documented expenses: hotel, meals, transport
- Note: these are owed regardless of extraordinary circumstances

**Art. 12 supplementary compensation:**
- If the passenger had consequential losses (non-refundable accommodation at destination, missed prepaid tours, etc.) that exceeded the Art. 7 flat rate, these can be claimed separately under national contract law
- Flag these as a separate line item

**Total claim:**
Sum all three categories. Present them separately in the letter so the airline cannot conflate them.

### Step 3: Draft the letter

Use the template in `templates/initial-claim.md` as a base. Customize for the specific case:

- Fill in all flight details
- Cite the specific articles violated
- Include the itemized cost breakdown with receipts referenced
- State the total amount claimed
- Set a 14-day response deadline
- Name the authority you will escalate to if ignored (AESA for Spanish carriers, national NEB otherwise)

### Step 4: Identify the right recipient

**For Spanish carriers (LEVEL, Vueling, Iberia, Air Europa):**
- Find the airline's official claims contact from their website or regulatory filing
- LEVEL: customercare@flylevel.com or their official claims form
- Vueling: claims via their online form or customer service
- When in doubt, send to both the general customer service email and any dedicated claims address

**For other carriers:**
- Check the airline's website for a "passenger rights" or "compensation claims" section
- If sending by email, request read receipt or delivery confirmation
- Consider sending a copy by registered post if the claim is large

### Step 5: Keep records

Instruct the user to:
- Save a copy of the letter and any receipts
- Note the date sent
- Screenshot or save any confirmation of receipt
- Set a reminder for 14 days — if no substantive response by then, escalate

---

## Legal citations to include in every claim

Always cite these in the letter:

- **Art. 5**: Cancellation obligations (if flight was cancelled)
- **Art. 7(1)(c)**: €600 compensation for routes >3500km (adjust amount for shorter routes)
- **Art. 9**: Right to care (meals, hotel, transport)
- **Art. 13**: Marketing carrier liability (if operating carrier is different)
- **Art. 12**: Supplementary compensation (if claiming consequential losses)

If the airline previously used the "earlier arrival" argument:
- **Art. 5(1)(c)(iii)**: Explicitly state this exemption applies only when rebooking departs no more than 1h before original — and that the actual rebooking does not meet this test

---

## Output format

Present the drafted letter in a code block so it can be copied cleanly. Then offer:
1. To adjust any part of the letter
2. To translate it into Spanish, German, or another EU language if relevant
3. To prepare the escalation documents if the airline does not respond
