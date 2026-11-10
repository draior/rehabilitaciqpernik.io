# Visual refresh QA — 10 November 2026

final result: passed

## Scope and source visual truth

This is the implementation of the owner's five approved audit recommendations, not a pixel-for-pixel clone of the previous layout. The existing site, the accepted mobile audit capture and the supplied real photographs establish the source. The owner additionally requested no prices, confirmed a ground-floor room, and supplied the Facebook recommendations and Google business-profile links.

- Before: `C:/Users/drago/.codex/visualizations/2026/11/09/01a1c025-3f6b-7230-8373-e5fa59feae9e/audit-2026-11-10/01-start.png`
- Supplied room references: `468590965_122130666152445214_1892167699809869253_n.jpg`, `468740173_122130665594445214_7926055861122047176_n.jpg`, `468569040_122130665228445214_9206759411195918584_n.jpg` in the owner's `Desktop/Cveti` directory.
- The existing specialist portrait is retained as a smaller JPEG. No new patient photographs are published.

## Rendered evidence

- Local implementation: `http://127.0.0.1:4173/`
- Desktop capture: `C:/Users/drago/.codex/visualizations/2026/11/09/01a1c025-3f6b-7230-8373-e5fa59feae9e/refresh-2026-11-10/desktop.png`
- Mobile capture: `C:/Users/drago/.codex/visualizations/2026/11/09/01a1c025-3f6b-7230-8373-e5fa59feae9e/refresh-2026-11-10/mobile.png`
- Combined comparison, inspected together at native scale: `C:/Users/drago/.codex/visualizations/2026/11/09/01a1c025-3f6b-7230-8373-e5fa59feae9e/refresh-2026-11-10/before-after-mobile.png`
- Comparison state: homepage, top, menu closed. Both before and after screenshots are 375 × 812 pixels. The requested browser viewport was 390 × 844, with a measured document width of 375 CSS pixels. No image scaling was applied in the comparison; the tool's surrounding browser frame is excluded from the captures.
- Desktop was inspected at a requested viewport of 1280 × 900, measured document width 1265 CSS pixels. Additional requested widths of 320 and 820 yielded document widths 305 and 805 with matching scroll widths.

## Findings and required surfaces

- **Typography:** the intentional change to a local Segoe UI/Arial sans-serif stack makes the hierarchy simpler and removes external font requests. Headings wrap within their containers; the body text, telephone and links remain readable. The mobile hero has a shorter introduction and a direct call action before the photograph.
- **Spacing/layout:** the compact header replaces the large stacked mobile navigation. The photograph is visible in the first mobile viewport. The fixed mobile call bar has corresponding bottom padding and does not prevent reaching the footer. No horizontal overflow was found at the tested widths. Desktop has a two-column hero, a three-column service grid and a coherent gallery.
- **Colors/tokens:** warm white, solid dark green and restrained borders intentionally replace the former gradients. Representative calculated contrast ratios are 6.05:1 for muted body text against the page background, 7.88:1 for white on the primary button, and 10.13:1 for white on the contact background. These checks do not constitute a full accessibility audit.
- **Images:** the three room photographs have the correct subjects, maintain their proportions and load in the gallery. Crops were inspected in the desktop gallery and mobile hero. Responsive derivatives preserve the actual room content. The existing portrait and icon are smaller assets; old illustrative gallery images are no longer used on the homepage.
- **Copy/content:** all 11 service routes and all five article routes remain discoverable. Prices and price-request labels are omitted. The confirmed ground-floor location is visible; wheelchair access and parking availability are not asserted. Recommendations use the supplied source links rather than invented ratings or quotes. Google account/tracking parameters have been removed while retaining the supplied entity selector.

## Interactions and validation

- Native mobile menu opens, closes after selecting Contact, and closes with Escape while returning focus to its summary.
- Contact navigation reaches the contact section. The primary call controls and persistent mobile call bar use `tel:+359899332245`; email uses the existing `mailto:` address. No real phone call or email was initiated.
- The first-visit route, massage route and a representative article were rendered on a narrow viewport; no horizontal overflow was found. The massage route shows the supplied room photo and a distinct first-visit secondary action.
- Gallery images were checked after lazy loading. The supplied recommendation links open in a separate tab with `noopener noreferrer`; content behind Facebook/Google authentication is not verified or quoted.
- Browser console errors: none observed during the checked interactions.
- Static verification: 19 content pages, 546 local link/asset references, valid JSON-LD, unique IDs and one H1/main/title per page. All 11 services are linked from the homepage; sitemap contains all 19 pages.
- The obsolete counter and remote counter requests are removed. Content does not depend on animation or JavaScript for visibility, and reduced-motion preferences are respected.

## Comparison history

The accepted before/after comparison shows the approved differences: compact navigation, a substantially shorter introduction, higher-contrast controls, a real room photograph above the fold, and a persistent direct-call action. These are intentional improvements, not fidelity defects. Interior pages, the gallery and the contact section were separately inspected because the homepage comparison does not show those states. No actionable P0/P1/P2 layout or interaction issues remain in the checked scope.

## Limits and follow-up

This is a local preview, not a public deployment. No real appointment booking, live call, screen-reader pass, exhaustive keyboard audit, field Core Web Vitals measurement or conversion experiment was performed. External reviews remain links to their original sources; no review text or score is reproduced. A real entrance photograph could be added later if supplied. No further visual changes are required for this preview handoff.
