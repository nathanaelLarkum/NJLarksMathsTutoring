# Logo files

Place your logo files here. The following filenames are expected:

| File | Usage |
|------|-------|
| `njlmtfull_light.png` | Full logo — shown on desktop in **dark** mode |
| `njlmtfull_dark.png` | Full logo — shown on desktop in **light** mode |
| `njlmt_light.png` | Standard logo — light variant (reserved for future use) |
| `njlmt_dark.png` | Standard logo — dark variant (reserved for future use) |
| `njlmtfi.png` | Icon/favicon logo — shown on **mobile** and used as the PWA icon |

The `BrandLogo` component in `components/layout/BrandLogo.tsx` switches automatically between logos based on the current theme and screen size.

Until the real logo files are added, the header will fall back to displaying the text "NJLarks Maths Tutoring".
