# 🚀 Portfolio Website Guide

Welcome to your engineering portfolio! This website is built with **Next.js 15+** and **Tailwind CSS v4**. It's designed to be easily customizable through a few key configuration files.

---

## 🛠 1. Quick Personalization (The "Global Text Changer")
Most of your website's text and links are controlled by **`src/config/siteConfig.js`**. 

Update this file to change:
- **Your Name & Title:** `author.name`, `author.bioHeadline`
- **Contact Info:** `author.email`
- **Social Links:** `socials.github`, `socials.linkedin`
- **SEO:** `title`, `description` (how your site looks on Google/Twitter)
- **Home Page Projects:** The `featuredProjects` array (add/remove project slugs here to change what shows on the front page).

---

## 📂 2. Managing Projects
All project data lives in **`src/data/projects.js`**. 

### How to add a new project:
1.  **Add Image:** Place a photo in `public/images/projects/`.
2.  **Add Data:** Copy an existing project object in `projects.js` and update the fields.
3.  **Set Featured:** Set `featured: true` to make it appear on the Home page automatically.

> **Tip:** Detailed instructions and a copy-paste template can be found in `PROJECT_GUIDE.md`.

---

## 🎨 3. Colors & Styling (Tailwind v4)
This project uses **Tailwind CSS v4**, which uses CSS variables in **`src/app/globals.css`** for its theme.

### Changing your Color Palette:
Find the `@theme` block in `src/app/globals.css`. You can change the hex codes for your primary and secondary colors:

```css
@theme {
  --color-primary: #0A2463;          /* Main accent color (Buttons, Nav links) */
  --color-secondary: #00B4D8;        /* Second accent color */
  --color-background: #ffffff;       /* Page background */
  --color-foreground: #171717;       /* Main text color */
  
  /* Dark Mode specific colors */
  --color-background-dark: #0a0a0a;
  --color-foreground-dark: #ededed;
}
```
*When you change these variables, Tailwind automatically updates every button and text element across the site.*

---

## 📄 4. Adding New Pages
To add a new page (e.g., a "Resume" or "Resources" page):
1.  Create a new folder in `src/app/` (e.g., `src/app/resume/`).
2.  Inside that folder, create a `page.js` file.
3.  Export a default React component from that file.
4.  Update **`src/components/Navigation.js`** to add a link to your new page.

---

## 🖼 5. Images & Assets
- **Profile Picture:** Replace `/public/images/profile/profile.jpg`.
- **Project Images:** Store in `/public/images/projects/`.
- **Favicon/Icon:** Replace `/src/app/favicon.ico`.

---

## 🌑 6. Dark Mode Logic
The website features a hybrid Dark Mode:
1.  **Detection:** A small script in `layout.js` checks for a user's saved preference or system setting before the page loads (to prevent flickering).
2.  **Toggle:** The `src/components/DarkModeToggle.js` handles manual switching.
3.  **Styling:** Use the `dark:` prefix in your HTML classes (e.g., `text-black dark:text-white`).

---

## 🚀 7. Development & Deployment

### Run Locally:
```bash
npm run dev
```

### Build for Production:
```bash
npm run build
```

### Deployment:
The easiest way to host this is on **Vercel**:
1.  Push your code to a GitHub repository.
2.  Import the repository into Vercel.
3.  It will automatically detect Next.js and deploy your site!
