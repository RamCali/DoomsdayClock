# OG Image Specification - Doomsday Clock

## The Problem: "Perfect Storm" of Competition

### 1. The Marvel Problem
Marvel has launched a live "Doomsday Clock" countdown for **Avengers: Doomsday** movie. A generic dark clock face will be confused with movie marketing.

### 2. The Missing Data
Current time is **89 Seconds** (set January 28, 2025). The image requires users to guess the time.

### 3. The Upcoming Event
Next official update is **January 27, 2026**. The page needs to build anticipation.

---

## Required Image Dimensions

| Platform | Size | Usage |
|----------|------|-------|
| Primary OG | 1200 x 630 px | Facebook, LinkedIn, Discord |
| Twitter | 1200 x 628 px | Twitter/X cards |
| Square | 1200 x 1200 px | Instagram, WhatsApp |

---

## Design Specification

### Layout (1200 x 630)

```
┌─────────────────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │     BULLETIN OF THE ATOMIC SCIENTISTS ASSESSMENT            │    │  ← Eyebrow (top)
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
│                          ┌──────────┐                                │
│                          │   CLOCK  │                                │  ← Clock visual (center-left)
│                          │  IMAGE   │                                │
│                          └──────────┘                                │
│                                                                      │
│              ┌─────────────────────────────────┐                     │
│              │         89 SECONDS              │                     │  ← Primary data (large)
│              │      TO MIDNIGHT                │                     │
│              └─────────────────────────────────┘                     │
│                                                                      │
│                    THE CLOSEST EVER                                  │  ← Subtext
│                                                                      │
│  ┌─────────────────────────────┐           ┌───────────────────┐    │
│  │ 🔴 NEXT UPDATE: JAN 27, 2026 │           │  DoomsdayClock.net │    │  ← Urgency + branding
│  └─────────────────────────────┘           └───────────────────┘    │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Element Specifications

### 1. Eyebrow Text (Marvel Shield)
- **Text**: "BULLETIN OF THE ATOMIC SCIENTISTS ASSESSMENT"
- **Purpose**: Differentiate from Marvel's Avengers: Doomsday marketing
- **Style**:
  - Font: Sans-serif, all caps, letter-spacing: 2px
  - Size: 14-16px
  - Color: #9CA3AF (muted gray)
  - Position: Top center, 24px from edge

### 2. Clock Visual
- **Style**: Simplified analog clock showing ~11:58:31
- **Position**: Center-left or background
- **Color scheme**:
  - Background: Dark (#09090b)
  - Ring: Red/atomic (#ea384c)
  - Hand: Red with glow effect
- **Size**: ~300px diameter

### 3. Primary Data Hook (THE NUMBER)
- **Text**: "89 SECONDS"
- **Purpose**: Google Vision AI reads text - increases relevance for "current doomsday clock time"
- **Style**:
  - Font: Bold sans-serif (Inter, Roboto, or system)
  - Size: 72-96px (LARGE)
  - Color: White (#FFFFFF)
  - Weight: 900 (Black)
- **Secondary text**: "TO MIDNIGHT"
  - Size: 32px
  - Color: #ea384c (atomic red)

### 4. Context Line
- **Text**: "THE CLOSEST IT HAS EVER BEEN"
- **Style**:
  - Font: Sans-serif
  - Size: 18px
  - Color: #9CA3AF (muted gray)

### 5. Urgency Trigger (Countdown Pill)
- **Text**: "🔴 NEXT UPDATE: JAN 27, 2026"
- **Purpose**: Makes site the "news source" rather than history page
- **Style**:
  - Background: Red (#ea384c) or dark with red border
  - Font: Bold, 14px
  - Padding: 8px 16px
  - Border-radius: 20px
  - Position: Bottom left

### 6. Branding
- **Text**: "DoomsdayClock.net"
- **Style**:
  - Font: 16px
  - Color: White
  - Position: Bottom right

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | #09090b | Primary background |
| Atomic Red | #ea384c | Accents, clock hand, urgency |
| White | #FFFFFF | Primary text |
| Muted Gray | #9CA3AF | Secondary text |
| Dark Gray | #27272a | Borders, subtle elements |

---

## Typography

- **Primary**: Inter, SF Pro Display, or Roboto
- **Fallback**: System sans-serif
- **Weights**: 400 (regular), 700 (bold), 900 (black)

---

## File Requirements

1. **Primary**: `og-image-2026.png` (1200x630, PNG, <500KB)
2. **Twitter**: `twitter-image.png` (1200x628)
3. **Favicon**: Update to match new style

---

## Image Generation Tools

### Option 1: Figma/Canva (Manual)
Create using the spec above.

### Option 2: Automated with Vercel OG
```tsx
// Can be implemented at /api/og route for dynamic generation
import { ImageResponse } from '@vercel/og'
```

### Option 3: HTML to Image
Use Puppeteer/Playwright to render the `OGImagePreview` component.

---

## SEO Impact

| Change | SEO Benefit |
|--------|-------------|
| "89 SECONDS" text | Google Vision AI reads it → higher relevance |
| "Bulletin of Atomic Scientists" | Differentiates from Marvel → reduced misclicks |
| "Next Update" date | Signals fresh/newsworthy content → higher CTR |
| Branded URL | Trust signal → higher CTR |

---

## Update Schedule

This image should be updated:
1. **Immediately after each Bulletin announcement** (usually late January)
2. **Update the countdown** as the announcement date approaches
3. **Change "NEXT UPDATE" to "JUST UPDATED"** for 2 weeks after announcement

---

## Current vs. Target

| Aspect | Current Image | Target Image |
|--------|--------------|--------------|
| Marvel differentiation | ❌ None | ✅ "Bulletin" eyebrow |
| Time visible | ❌ Ambiguous hands | ✅ "89 SECONDS" text |
| Urgency | ❌ Static | ✅ "Next Update" pill |
| Brand | ❌ Generic | ✅ DoomsdayClock.net |
