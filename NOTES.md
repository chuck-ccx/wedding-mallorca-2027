# Wedding Site — Live Notes from Dylan

Things to fold into the site as they come in. The agent should check this before final commit.

## CEREMONY + RECEPTION VENUE (also family accommodation)
- **Street address (CONFIRMED 2026-05-22):** Cami de Pedac, Polígono 9 Parcela 147, Binissalem, Balearic Islands 07350, Spain
- URL: https://www.airbnb.ca/rooms/1558570980526721325
- This is THE venue — ceremony, reception, AND where Dylan + Jenna's family are staying for the full trip
- Has a private chef on site
- Booked for the entire duration of the trip
- Use the street address above to anchor the "Venue" / "Location" section — embed a Google Maps iframe centered on this address and a "Get Directions" button that opens Google Maps to this address
- Display prominently — this is the wedding location

## Accommodation — Groomsmen & Bridesmaids Airbnb
- URL: https://www.airbnb.ca/rooms/888193767756667379
- This is where the groomsmen and bridesmaids are staying — separate from the venue
- Display as a styled card in the Accommodation section labelled "Wedding Party House"
- "View on Airbnb" button (opens in new tab)
- Other guests can be pointed to nearby options (leave a TODO for now)

## Outstanding TODOs (placeholders to flag in code)
- ~~Pull exact street address from the venue Airbnb listing~~ ✅ DONE (see above)
- Ceremony start time (defaulted to 4pm Mallorca local)
- Additional guest accommodation suggestions (non-wedding-party)
- Supabase URL + service role key (env vars, will be set in Vercel)
