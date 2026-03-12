# 🚀 Portfolio Website Guide

Welcome to your engineering portfolio! This website is built with **Next.js 16+** and **Tailwind CSS v4**. It's designed to be easily customizable through key configuration and data files.

---

## 📂 1. Project Structure
- `src/app/`: Next.js App Router (Pages & Layouts)
- `src/components/`: Reusable UI components
- `src/data/`: Structured JS data for Projects, Posts, Resources, and Mentors
- `src/content/`: Markdown files for long-form content (Blog & Project details)
- `src/config/`: Global site configuration (`siteConfig.js`)
- `public/`: Static assets (Images, Favicons)

---

## ✍️ 2. Managing Content

### How to add a new Project:
1.  **Add Image:** Place a photo in `public/images/projects/`.
2.  **Add Data:** Open `src/data/projects.js` and add a new object to the `projects` array.
3.  **Features:** Use fields like `gallery`, `youtubeId`, `specs`, and `collaboration` to enable rich features on the project page.

### How to add a new Blog Post:
1.  **Add Data:** Open `src/data/posts.js` and add a new object to the `posts` array.
2.  **Markdown Content:** 
    - You can write content directly in the `content` field of the JS object.
    - **Recommended:** Create a `.md` file in `src/content/blog/` with a filename matching the post's `slug` (e.g., `my-post.md`). The website will automatically prefer the markdown file if it exists.
3.  **Tags:** Category badges are color-coded based on the `category` string.

### How to add a new Resource:
1.  **Add Data:** Open `src/data/resources.js`.
2.  **Fields:** Each resource needs a `title`, `author`, `type` (e.g., Book, Website), `description`, `url`, and `image`.
3.  **UI:** The Resources page automatically displays a "Showing X resources" counter and filters by `type`.

### How to add a Mentor:
1.  **Add Image:** Place a photo in `public/images/mentors/`.
2.  **Add Data:** Open `src/data/mentors.js` and add a new mentor object.

---

## 🎨 3. Colors & Styling (Tailwind v4)
This project uses **Tailwind CSS v4**, which manages themes via CSS variables in **`src/app/globals.css`**.

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

---

## 📄 4. Adding New Pages
1.  Create a new folder in `src/app/` (e.g., `src/app/resume/`).
2.  Inside that folder, create a `page.js` file.
3.  Update **`src/components/Navigation.js`** to add a link to your new page.

---

## 🌑 5. Dark Mode
1.  **Logic:** Handled by `src/components/DarkModeToggle.js`.
2.  **Persistence:** Saves preference to `localStorage`.
3.  **Styling:** Use the `dark:` prefix in your Tailwind classes.

---

## 🚀 6. Development & Deployment

### Run Locally:
```bash
npm run dev
```

### Build for Production:
```bash
npm run build
```

### Deployment:
Optimized for **Vercel**. Simply connect your GitHub repository, and Vercel will handle the rest!
