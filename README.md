# Vinyl Library

A vinyl collection manager built with Ionic (Angular standalone) + Firebase, with a modern UI inspired by a provided PDF design, including barcode scanning and Discogs integration support.

---

## Installation & Initial Setup

1. **Clone the repository**
2. **Install dependencies**

3. **Firebase & AngularFire configuration**
- Store your Firebase keys in `environments/environment.ts` under the `firebaseConfig` property.
- AngularFire is initialized in `main.ts` using standalone providers.
- Required dependencies:
  ```
  npm install firebase @angular/fire ionicons
  ```

4. **Register Ionicons custom icons (password “eye”):**
- In `main.ts`:
  ```
  import { addIcons } from 'ionicons';
  import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
  addIcons({ 'eye-outline': eyeOutline, 'eye-off-outline': eyeOffOutline });
  ```

---

## Key Folder Structure

- `src/assets/img/`: logo and graphic assets
- `src/app/pages/`: main UI pages (`login`, `register`, `profile`, `collection`, etc.)
- `src/app/services/`: services like `auth.service.ts`, `vinyl.service.ts`
- `src/theme/variables.scss` & `global.scss`: palette, typography, global styles

---

## Global Styles

- **Palette and variables:** extracted from the UI PDF, set in `variables.scss` using CSS custom properties (colors, fonts, weights, etc.)
- **Primary font:** Komet (imported via Typekit).
- **UI components:**
- Custom inputs and buttons themed according to the design
- Centered login with an inline SVG logo colored via `currentColor`
- Reusable global classes: `.login-title`, `.login-paragraph`, `.custom-input`, `.login-btn`, etc.

---

## Logic Implemented

- **Authentication:**
- `AuthService` with `login`, `register`, `logout` methods, and session management.
- Auth guards for securing restricted routes.
- **Routing and navigation:**
- Standalone flow, protected routes with guards, auto-redirect after login.
- **Components:**
- Templates and styles adapted to the design (login, register, etc.).

---

## Conventions

- All SCSS variables and typography classes are centralized.
- Only required Ionicons are imported with `addIcons`.
- The logo SVG uses `currentColor` and receives color from theme SCSS.
- The app flow and design strictly follow the provided PDF/UI.

---

## Next Steps

- Complete route guards and session persistence logic.
- Finish CRUD functionality for records (“vinyls”).
- Integrate barcode reader and Discogs API lookups.
- Refine theme and polish UI per feedback.

---
_Project built collaboratively in Comet (Perplexity Spaces)._
(Si no lo pongo, no me ayuda 😁)
