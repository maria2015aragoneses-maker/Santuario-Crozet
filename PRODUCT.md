# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML, CSS and plain JavaScript, no framework, no build step. Published on GitHub Pages; the same folder must also work opened with a double click on `index.html` (no server, no internet). Data lives in `js/datos.js` loaded with a normal `<script>`; no `fetch()`, no ES modules. Any asset the site uses (photos, fonts, scripts) is downloaded into the repository, never linked from a third party at runtime.

## Users

Primary: a private individual, Spanish-speaking, who arrives knowing nothing about the island and could sponsor ("apadrinar") one penguin.
Secondary, and the one actually in the room: a class tribunal watching the site projected on a screen on 11 Nov 2026, presented by María, judging in about two minutes whether the project holds together.

## Product Purpose

Santuario Crozet is the (fictional) sponsorship platform for Zone 1 of Isla Alfred Faure, Crozet archipelago. In order, the visitor must:
1. understand in ten seconds what the island is and what is done there;
2. accept the core argument: renting part of the island as an AI campus funds the reserve ("el dinero de la IA paga a los pingüinos");
3. sponsor one concrete, ringed penguin, not "a penguin" in the abstract.
Every reasonable path through the site ends able to reach a penguin's page.

## Positioning

A nature reserve financed by a wind-powered AI campus on the same island, cooled by sub-Antarctic air: the island is split into three zones (reserve 65 %, campus 25 %, wind farm 10 %) and the rent closes the loop. Each sponsored animal is a real monitored individual with a ring ID, colony, researcher and last sighting.

## Operating Context

Shown on a classroom projector: washed-out colours, reduced contrast, judged from five metres. Presented live by María on her laptop, from the public URL and as a fallback by double click offline. Desktop first; mobile must not break (a QR code on a poster may point to a penguin page).

## Capabilities and Constraints

- Five pages: Inicio, La isla, El proyecto, Apadrina (grid of eight penguins with filters by species/colony), Ficha (`ficha.html?id=<ring>`, its own URL).
- Ficha shows ring, species, colony, monitored since, last sighting, researcher; "sin nombre" until sponsored; sponsor button visible without scrolling; link back to the list.
- Sponsorship form: sponsor name, email, name given to the penguin, one-off fee 15 / 30 / 60 €; inline errors; on success a printable certificate (photo, given name, ring, sponsor, fee, date).
- Never asks for card or bank data, never simulates a charge. Already-sponsored penguins are marked with a text label and cannot be sponsored.
- Every page footer carries the fictional-project notice and photo credits.
- Spanish only.
- Scope may grow (user confirmed 8 Nov 2026) when an addition clearly improves the site; core functions above stay.
- Copy may be rewritten in form; figures, data and the core argument stay.

## Brand Commitments

Name "Santuario Crozet", subtitle "Isla Alfred Faure". Voice: scientific and editorial, like a polar research institute or a nature magazine, with restrained emotion; not an NGO campaign, not a tech brand. The previous five-colour palette (navy/teal/sky/beige/white) is no longer binding.

## Evidence on Hand

- Key figures: 150 km², 3,5 °C mean annual temperature, 80 MW wind (20 turbines × 4 MW, 200 MWh batteries), 0 litres of water for cooling, 2 km exclusion perimeter around colonies; coordinates 46°24′S 51°46′E.
- Zones: 1 Reserva natural y científica 97,5 km² (65 %); 2 Campus de IA 37,5 km² (25 %); 3 Parque eólico y micro-red 15 km² (10 %).
- Eight invented penguins in `js/datos.js` (six king, two gentoo), invented researchers and colonies.
- Fauna: pingüino rey, pingüino papúa, albatros errante, elefante marino del sur, foca peletera.
- Photos: freely licensed Wikimedia Commons images downloaded into `img/` with credits in `img/CREDITOS.md` / `img/creditos.js`.
- Map image `mapa_.png`. No testimonials, press, partners or real donation figures exist; none may be invented.

## Product Principles

1. The argument before the ask: the funding loop must be explicit and one click away, because the tribunal judges whether the project holds up.
2. A concrete animal beats an abstract cause: every page leads to a named ring.
3. Honest fiction: the site is clearly marked as an academic simulation and never imitates a real payment.
4. Readable at five metres: projector legibility is a requirement, not a preference.
5. Works offline from the folder: nothing depends on a third party at presentation time.

## Accessibility & Inclusion

Paragraph text at least 18 px; high contrast everywhere (no light grey on white); colour is never the only signal; large primary actions; respects `prefers-reduced-motion`; site fully readable without JavaScript animations.
