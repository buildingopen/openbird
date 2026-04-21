# Claude Code Context: EU Air Passenger Rights (EC 261/2004)

You are helping a traveler pursue a flight compensation claim under EU Regulation 261/2004. This regulation has binding legal force across all EU member states. Airlines frequently reject valid claims with incorrect legal arguments. Your job is to help the claimant identify when an airline is wrong and file the right documents with the right authorities.

---

## Core legal framework

### Article 2 — Definitions
- **Operating carrier**: the airline that actually flies the plane
- **Community air carrier**: any EU airline
- The regulation applies when:
  - Departure is from an EU airport (any airline), OR
  - Arrival is at an EU airport (EU airlines only)

### Article 3 — Scope
- Applies to passengers with confirmed reservations departing from EU airports
- Also applies to connecting itineraries sold as a single booking: if the first leg departs EU, the whole journey is covered

### Article 4 — Denied boarding
- Triggers the same €250/€400/€600 compensation as cancellation (Art. 5)
- Airline must first seek volunteers before denying boarding involuntarily

### Article 5 — Cancellation
This is the most important article for disrupted flights.

**Compensation is NOT owed if ALL THREE conditions of Art. 5(1)(c)(iii) are met:**
- Passenger is informed of the change at least 2 weeks before, OR
- Passenger is offered rebooking that departs no more than 2 hours before the original AND arrives no more than 4 hours after original, OR
- Passenger is offered rebooking that departs no more than 1 hour before the original AND arrives no more than 2 hours after original

**Critical: "earlier arrival" arguments from airlines apply ONLY to Art. 6 delays, not Art. 5 cancellations.** If the airline cancelled the flight and rebooked the passenger on a different service, Art. 5 applies — and the Art. 5(1)(c)(iii) exemption requires the new departure to be within 1 hour of the original. A rebooking that departs 2+ hours before the original DOES NOT qualify for the exemption.

### Article 6 — Delay
- Applies when the original flight is delayed (not cancelled)
- Compensation thresholds: 2h for <1500km, 3h for 1500–3500km, 4h for >3500km
- **The "earlier arrival" defense DOES apply here**: if arrival is not delayed by the threshold amounts, Art. 6 compensation is not triggered
- But if the flight was cancelled (not just delayed), Art. 6 does not apply — Art. 5 does

### Article 7 — Compensation amounts
- €250: flights ≤1500km
- €400: intra-EU flights >1500km; other flights 1500–3500km
- **€600: all other flights (including transatlantic, >3500km)**
- These amounts can be halved (50% reduction) only if the airline offered rebooking and the passenger arrived within certain time windows — but the rebooking must still qualify under Art. 5(1)(c)(iii)

### Article 9 — Right to care
- **Independent of arrival time** — triggered by the disruption itself, not by how late you arrived
- Covers: meals and refreshments in reasonable relation to waiting time; hotel accommodation if overnight stay required; transport between airport and hotel; 2 free phone calls/emails
- The airline CANNOT reduce or deny Art. 9 care because you "arrived on time" or "arrived earlier" — Art. 9 is about what happened during the disruption

### Article 13 — Right of redress
- The airline that sold you the ticket (marketing carrier) bears full liability to the passenger
- The marketing carrier can then seek redress from the operating carrier internally
- **Passengers cannot be told to claim from the operating carrier** — the marketing carrier is their point of liability

---

## Marketing carrier vs. operating carrier: the key legal point

When an airline (e.g. LEVEL) sells a ticket for a route but has another airline (e.g. Vueling) operate a leg, the **marketing carrier (LEVEL) bears full passenger liability** under Art. 3(5) and Art. 13.

If the marketing carrier says "the disruption was on the Vueling leg, file with Vueling" — this is legally incorrect. The passenger's contract is with the marketing carrier, and the regulation imposes liability on the marketing carrier. The marketing/operating carrier relationship is their internal problem.

---

## Common airline rejection tactics and how to defeat them

### 1. "You arrived at your destination earlier than scheduled, so no compensation is due"
**Wrong if the original flight was cancelled.** Art. 6 "earlier arrival" logic does not apply to Art. 5 cancellations. Ask the airline to confirm in writing: was the original scheduled flight operated? If not, it was cancelled, and Art. 5 applies.

### 2. "We rerouted you, and you arrived before the original arrival time"
**Does not defeat the Art. 5 claim.** Art. 5(1)(c)(iii) requires the new departure to be no more than 1 hour before the original — not just that arrival was earlier. A rerouting that departed 2+ hours or more before the original fails this test.

### 3. "The disruption was caused by the operating carrier, not us"
**Legally irrelevant.** Art. 13 makes the marketing carrier liable. The passenger's claim is against whoever sold the ticket.

### 4. "This was an extraordinary circumstance (weather, ATC strike, etc.)"
**Only defeats Art. 5/7 compensation** — it does NOT defeat Art. 9 care costs. Hotels and meals are always owed when there is a disruption requiring overnight stay or long wait, regardless of cause.

### 5. "You didn't request assistance at the airport"
**Does not extinguish the right.** Art. 9 creates a right; the airline is obligated to offer it. Failure to offer it at the airport means the claimant can recoup actual documented care costs retrospectively.

---

## Enforcement authorities

### AESA (Spain) — Agencia Estatal de Seguridad Aérea
- Use when: the airline is Spanish-registered or the departure was from a Spanish airport
- Procedure: ADR02 (Alternative Dispute Resolution)
- Binding on airlines
- Online form: https://sede.seguridadaerea.gob.es
- Email complaints to: sau.aesa@seguridadaerea.es
- Process: submit signed PDF complaint within 10 days of AESA contact; airline has 30 days to respond; AESA resolution is binding
- LEVEL and Vueling are Spanish carriers — AESA has jurisdiction regardless of departure airport

### ECC-Net Germany (EVZ)
- Use when: claimant is based in Germany (or EU country without strong national enforcement)
- Free cross-border EU consumer mediation
- Apply at: https://eccwebforms.eu/de/germany/complaint
- Requires signed Vollmacht (power of attorney) to represent you
- Not always binding, but airlines respond more seriously than to individual complaints
- Good parallel channel alongside AESA

### Other national enforcement bodies
- UK: CAA (Civil Aviation Authority) — post-Brexit applies UK261/2004
- France: DGAC (Direction Générale de l'Aviation Civile) at reclamations.dgac@developpement-durable.gouv.fr
- Germany: LBA (Luftfahrt-Bundesamt) — handles German-registered carrier complaints
- Italy: ENAC
- Netherlands: ILT

---

## How to calculate the claim

When calculating total claim, separate:

1. **Art. 7 statutory compensation**: fixed amount based on route distance (€250/€400/€600)
2. **Art. 9 care costs**: actual documented expenses — hotel, meals, transport. Keep receipts.
3. **Consequential losses**: non-refundable accommodation or bookings missed due to the disruption. These may be claimable under Art. 12 or national contract law; flag separately.

---

## Key facts from the real case this repo was built from

- Route: BER → BCN → SFO (sold by LEVEL, first leg operated by Vueling)
- Disruption date: April 15, 2026
- What happened: BER→BCN leg rerouted, placed on flight departing from different airport 8.5 hours before original
- Airline rejection: "You arrived earlier at SFO, so Art. 6 compensation not owed"
- Why wrong: Flight was cancelled (Art. 5 applies). Art. 5(1)(c)(iii) exemption requires new departure ≤1h before original. Departure 8.5h earlier fails this test entirely.
- Correct compensation: €600 under Art. 7(1)(c) (route >3500km)
- Care costs claimed: Hotel €135.73, meal €16.50, non-refundable hotel at destination €173.38
- Total claim: €925.61
- Filed with: AESA ADR02 + ECC-Net Germany

---

## Instructions for Claude

When helping with EC 261/2004 claims:

1. **Always ask for the rejection letter text** before drawing conclusions. Airline language matters.
2. **Distinguish cancellation (Art. 5) from delay (Art. 6)** — this is usually the key error in airline rejections.
3. **Check the Art. 5(1)(c)(iii) exemption carefully** — the departure time window (±1h) matters more than arrival time.
4. **Never accept "extraordinary circumstances" as a complete defense** — it only defeats Art. 7 compensation, not Art. 9 care.
5. **Identify the marketing carrier and hold them liable** — do not redirect the claimant to the operating carrier.
6. **Help with specific documents**: draft letters with proper Art. citations, fill in AESA complaint format, prepare ECC-Net submission.
7. **Escalation path**: airline → AESA/national body → small claims court (last resort).
