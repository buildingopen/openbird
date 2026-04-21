# Skill: /escalate

Help the user file a formal complaint with an enforcement authority when the airline has ignored or incorrectly rejected their claim.

---

## Description

When the user runs `/escalate`, determine which enforcement authority is most appropriate and help them prepare the submission. Prioritize binding authorities (AESA for Spanish carriers) over non-binding mediation, but parallel filing is allowed and often effective.

---

## Instructions for Claude

### Step 1: Assess escalation readiness

Before filing with an authority, confirm:
- The user has already sent a formal claim to the airline (via `/file-claim` or equivalent)
- The airline has either (a) not responded within a reasonable time (14–30 days), or (b) issued a rejection
- The user has documentation: booking confirmation, boarding passes or denial of boarding receipt, receipts for care costs, the rejection letter if any

If any of these are missing, help the user complete them first.

### Step 2: Determine the right authority

**Primary question: where did the flight depart from?**

| Departure | Authority | Binding? | URL |
|---|---|---|---|
| Spain (any airport) | AESA | Yes | sede.seguridadaerea.gob.es |
| Germany | LBA | Varies | lba.de |
| France | DGAC | Varies | dgac.fr |
| UK | CAA | Yes (via PACT) | caa.co.uk |
| Netherlands | ILT | Yes | ilent.nl |
| Italy | ENAC | Yes | enac.gov.it |

**Secondary question: is the airline Spanish-registered?**
- LEVEL and Vueling are Spanish carriers. Even if they depart from a non-Spanish airport, AESA has jurisdiction.
- This is a powerful option: AESA rulings are binding on airlines.

**For Germany-based claimants (regardless of carrier or departure):**
- ECC-Net Germany (EVZ) handles cross-border EU complaints
- Not always binding, but airlines take it seriously and it's free
- Good parallel channel alongside AESA or LBA

### Step 3: AESA filing (priority path for Spanish carriers)

AESA is the strongest option for LEVEL/Vueling claims. Follow these steps:

**1. Prepare the complaint document**
Use the template in `templates/aesa-complaint.md` as a base. The complaint must include:
- Passenger name(s) and address
- Booking reference and flight details
- Chronological account of what happened
- The airline's rejection and why it is legally incorrect
- Amount claimed with itemized breakdown
- Copies of: booking confirmation, rejection letter, receipts, any airline communications

**2. Sign the PDF**
AESA requires a signed submission. The complaint document must be signed — a typed name is usually insufficient. Help the user add a signature.

**3. Submit**
- Online: https://sede.seguridadaerea.gob.es (search for "reclamación pasajeros" or ADR02)
- Email: sau.aesa@seguridadaerea.es
- AESA will acknowledge receipt, then contact the airline
- The airline has 30 days to respond to AESA
- AESA issues a binding resolution

**4. Timing**
- Submit within 10 days of AESA's first contact if they reach out asking for documentation
- Typical resolution timeline: 2–6 months

### Step 4: ECC-Net Germany filing

Good parallel channel or primary channel for Germany-based claimants with non-Spanish carrier issues.

**1. Prepare the complaint**
Go to: https://eccwebforms.eu/de/germany/complaint

Required:
- Personal details
- Flight details
- What happened and what you claimed
- The airline's response
- Amount claimed

**2. Vollmacht (power of attorney)**
ECC-Net Germany requires you to sign a Vollmacht authorizing them to represent you. This is a standard form available on the EVZ website. Download, sign, scan, and upload with your complaint.

**3. Process**
- EVZ contacts the airline's national ECC counterpart
- The counterpart contacts the airline
- Resolution is not always binding, but airlines often settle to avoid escalation
- No cost to the claimant

### Step 5: Parallel filing strategy

**Recommended approach for strong cases:**
1. File AESA complaint (binding, strongest option for Spanish carriers)
2. File ECC-Net Germany complaint simultaneously (signals seriousness, additional pressure)
3. Notify the airline in a short email that you have filed with both authorities and include the reference numbers once you have them

Airlines are more likely to settle before an authority ruling than after, because a ruling creates a public record. Mention the escalation in any communications.

### Step 6: Small claims court (last resort)

If enforcement authorities do not resolve the issue:
- **Germany**: Amtsgericht with jurisdiction over the airline's German office or the departure airport. Filing fee is roughly 5–10% of claim value, refunded if you win. Most airlines settle rather than litigate.
- **Spain**: Juzgado de lo Contencioso-Administrativo if appealing an AESA decision, or civil court for direct claims
- **European Small Claims Procedure**: Available for cross-border EU claims under €5,000. Filing through the court in the claimant's country. Forms available at e-justice.europa.eu.

### Step 7: Claims management companies (alternative)

If the user wants to avoid the process entirely:
- Companies like AirHelp, Flightright, Myflyright work on no-win-no-fee (typically 25–35% of compensation)
- Only recommend this if the user explicitly doesn't want to handle it themselves
- The DIY approach using this repo keeps 100% of the compensation

---

## Output

When helping with AESA filing, produce:
1. A filled-in complaint text ready to paste or attach
2. Specific instructions for where to submit
3. A short email notifying the airline of the filing

When helping with ECC-Net, produce:
1. A summary of the complaint in the format the EVZ form accepts
2. Instructions for obtaining and signing the Vollmacht
3. Checklist of documents to attach
