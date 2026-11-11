# Hanane Bellala — Portfolio

A creative, modern, and responsive React portfolio application built with Vite, Tailwind CSS, Framer Motion, and Lucide React.

---

## 🎨 Design System & Colors

- **Deep Plum / Wine**: `#491B37`
- **Soft Ice Blue**: `#D0E4FF`
- **Warm Cream / Off-White**: `#FFF8EE`

---

## 🔤 Custom Typography

The project is preconfigured to load your three custom fonts from `/public/fonts/`:
1. **Monthey** (`Monthey.woff2`, `Monthey.otf`, `Monthey.ttf`)
2. **Playfair Display** (`PlayfairDisplay.woff2`, `PlayfairDisplay.ttf`) *(also pre-linked via Google Fonts)*
3. **Photograph Signature** (`PhotographSignature.woff2`, `Photograph Signature.ttf`, `PhotographSignature.otf`) *(with elegant handwriting fallback)*

Simply place your font files into [`public/fonts/`](file:///c:/Users/Administrator/Desktop/Portfolio/Portfolio-26/public/fonts) and they will immediately be applied!

---

## 🖼️ Adding Your High-Resolution Images

All image holders point to files in [`public/assets/`](file:///c:/Users/Administrator/Desktop/Portfolio/Portfolio-26/public/assets). If an image file is missing, the component gracefully renders an elegant placeholder indicating the exact file name needed:

- **About Me Photo**: `public/assets/about-photo.jpg`
- **Quality+ Project**: `public/assets/project-quality.jpg`
- **Switch It Project**: `public/assets/project-switchit.jpg`
- **Healio Project**: `public/assets/project-healio.jpg`
- **Mousafir Project**: `public/assets/project-mousafir.jpg`
- **Beyond Work Photos**:
  - `public/assets/beyond-aiesec-1.jpg`
  - `public/assets/beyond-aiesec-2.jpg`
  - `public/assets/beyond-aiesec-3.jpg`
  - `public/assets/beyond-aiesec-4.jpg`
- **Contact Arched Photo**: `public/assets/profile-contact.jpg`
- **Resume PDF**: `public/assets/Hanane_Bellala_Resume.pdf`

---

## 🚀 Sections Included

1. **Landing Hero**:
   - Massive "portfolio" in soft ice blue (`#D0E4FF`)
   - Handwritten signature "Hanane Bellala" in plum (`#491B37`)
   - Social pills (LinkedIn, GitHub, Behance, Email)
   - Scroll-away curtain reveal effect
2. **About Me**:
   - Navigation bar with hamburger menu in the top right
   - "hi. I am Hanane" bio & "Download Resume" CTA
   - Framed portrait & scroll-down indicator
3. **Fullscreen Menu Overlay (Matches Image 2)**:
   - Fullscreen cream modal (`#FFF8EE`)
   - Close button `✕` on top right
   - Elegant signature links: *About me*, *My skills*, *My projects*, *Beyond work*
4. **My Skills**:
   - Technical Skills (Architecture & Practical Skills)
   - Programming Languages (Featured Python highlight)
   - Frameworks & Tools
   - Blue accent banner
5. **My Projects**:
   - Interactive project showcase cards
   - Detail modal with architecture highlights, tech stack tags, and links
6. **Beyond Work**:
   - AIESEC Exchange Participant in Cairo & ESI Clubs
   - 2x2 photo collage grid with slider navigation controls (`←` `→`)
7. **Thank You / Contact**:
   - Arched portrait photo
   - "Let's connect" + "thank you."
   - Phone and Email pills with one-click copy to clipboard
   - Direct message collaboration form
   - Footer

---

## 💻 Development Commands

```bash
# Run local dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

