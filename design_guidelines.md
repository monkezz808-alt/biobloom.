# BioBloom Agricultural AI Platform - Design Guidelines

## Design Approach
**Hybrid Approach**: Combining trust-building agricultural aesthetics with modern AI/tech credibility. Drawing inspiration from Stripe's clarity and Airbnb's approachability, adapted for Indian agricultural context.

**Core Principle**: Create a trustworthy, accessible platform that makes advanced AI technology feel approachable to farmers while maintaining professional credibility.

## Color Palette

**Light Mode:**
- Primary Green: 142 71% 45% (agricultural, growth, trust)
- Deep Earth: 25 45% 25% (stability, soil, heritage)
- Accent Orange: 35 85% 55% (energy, harvest, warmth)
- Background: 0 0% 98%
- Text Primary: 0 0% 15%
- Text Secondary: 0 0% 40%

**Dark Mode:**
- Primary Green: 142 65% 55%
- Deep Earth: 25 35% 75%
- Accent Orange: 35 80% 60%
- Background: 0 0% 8%
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%

## Typography

**Font Families:**
- Primary: Inter (clean, multilingual support for Hindi/Kannada)
- Headings: Poppins (friendly, approachable for farming audience)

**Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-semibold
- Subsection Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- Small Text/Captions: text-sm

**Language-Specific Adjustments:**
- Increase line-height by 0.15 for Hindi/Kannada scripts
- Use font-weight: 500 minimum for Devanagari/Kannada readability

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-6 md:px-8
- Card spacing: gap-6 md:gap-8
- Component padding: p-6 md:p-8

## Component Library

**Navigation:**
- Sticky header with language switcher (flags/icons + text labels)
- Hamburger menu on mobile with smooth slide-in drawer
- Language dropdown with visual indicators (🇮🇳 IN, हिं Hi, ಕನ್ Ka)

**Hero Section:**
- Large impactful imagery of Indian farmland/farmers using technology
- Centered content layout with max-w-4xl
- Dual CTA buttons: Primary (solid) + Secondary (outline with backdrop-blur-sm on image)
- Trust indicators below CTAs (AI Support, Yield Increase stats)

**Feature Cards:**
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Elevated cards with hover:scale-105 transition
- Icon + Title + Description + CTA structure
- Subtle border-l-4 accent in primary color

**Product Showcase:**
- 2-column grid on desktop (lg:grid-cols-2), single column mobile
- Alternating image-text layout for visual rhythm
- Product cards with icon, title, bullet points, "Learn More" link
- Soft shadows and rounded-2xl corners

**Language Switcher:**
- Dropdown/toggle in top navigation
- Visual script samples for each language
- Persistent selection via localStorage indication
- Smooth content fade transition on language change

**CTA Sections:**
- Full-width colored background sections
- Centered content with compelling headline
- Multiple CTAs (primary action + alternative)
- Trust badges/checkmarks for credibility

**Footer:**
- Multi-column layout: Company info, Products, Resources, Contact
- Language switcher duplicate for accessibility
- Social proof elements (certifications, partner logos)
- Newsletter signup with language-specific placeholder text

## Animations

**Minimal & Purposeful:**
- Fade-in on scroll for sections (opacity + translateY)
- Hover scale (scale-105) on interactive cards
- Smooth language transition (opacity fade 200ms)
- Loading skeleton for language switching
- No parallax or complex scroll animations

## Images

**Hero Section:**
- Large hero image: Indian farmer using tablet/smartphone in field with crops
- Image treatment: Slight overlay (rgba(0,0,0,0.2)) for text contrast
- Position: background with object-cover, min-h-[600px]

**Feature Sections:**
- Agricultural imagery: drone over fields, AI dashboard interfaces, healthy crops
- Product cards: Illustrative icons or real product screenshots
- Testimonial section: Authentic farmer photos (diverse regional representation)

**Placement Strategy:**
- Hero: Full-width background image with gradient overlay
- Features: Smaller contextual images in alternating layouts
- Products: Icon-based with optional product screenshots
- CTA sections: Subtle background patterns or solid colors (no competing images)

## Multilingual Design Considerations

**Text Expansion:**
- Allow 30-40% more space for Hindi/Kannada translations
- Flexible container widths, avoid fixed-width text containers
- Line-height: 1.75 for scripts (vs 1.6 for English)

**Script Rendering:**
- Ensure proper Unicode font support (Google Fonts Noto Sans variants)
- Test all three scripts in headings and body text
- Maintain visual hierarchy across languages

**Language Indicator:**
- Clear visual differentiation in switcher
- Active language highlighted with primary color
- Script preview in dropdown (e.g., "हिंदी" not just "Hindi")

## Accessibility & Trust

- High contrast ratios (4.5:1 minimum for body, 3:1 for large text)
- Focus indicators on all interactive elements (ring-2 ring-primary)
- ARIA labels for language switcher and navigation
- Trust badges: Organic certification, security indicators, farmer testimonials
- Mobile-first responsive design (touch targets min 44x44px)

## Key Differentiators

- Agricultural color palette with green as primary (not purple/blue tech defaults)
- Prominent language switcher respecting India's linguistic diversity
- Real farmer imagery over stock photos
- Trust indicators throughout (certifications, statistics, testimonials)
- Balanced tech sophistication with farming authenticity