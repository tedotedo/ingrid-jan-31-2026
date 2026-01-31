# Artist Portfolio Website

A clean, minimal portfolio website for showcasing artwork. Inspired by professional artist portfolio sites.

## Structure

```
/
├── index.html          # Home page
├── paintings.html      # Paintings gallery
├── drawings.html       # Drawings gallery
├── about.html          # About/CV page
├── contact.html        # Contact information
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Navigation & lightbox
└── images/
    ├── paintings/      # Your painting images
    └── drawings/       # Your drawing images
```

## Quick Start - Customizing for Your Use

### 1. Change the Artist Name

Search and replace "artist name" in all HTML files:
- `index.html` - title, logo, hero heading, footer
- `paintings.html` - title, logo, footer
- `drawings.html` - title, logo, footer
- `about.html` - title, logo, footer
- `contact.html` - title, logo, footer

### 2. Add Your Artwork Images

1. Replace placeholder images in `/images/paintings/` and `/images/drawings/`
2. Use high-quality JPG or PNG images (recommended: 1200-2000px on longest side)
3. Name them descriptively or use a consistent naming convention

### 3. Update Gallery Items

In `paintings.html` and `drawings.html`, update each gallery item:

```html
<div class="gallery-item"
     data-src="images/paintings/your-image.jpg"
     data-title="artwork title"
     data-details="medium, dimensions, year">
  <img src="images/paintings/your-image.jpg" alt="artwork title">
  <div class="gallery-item-info">
    <p class="gallery-item-title">artwork title</p>
    <p class="gallery-item-details">oil on canvas, 24" x 36", 2024</p>
  </div>
</div>
```

To add more artwork, copy a gallery-item div and update the values.

### 4. Update About Page

Edit `about.html` to include:
- Your biography/artist statement
- Education history
- Exhibition history
- Awards and residencies
- Collections

### 5. Update Contact Information

Edit `contact.html`:
- Replace `email@example.com` with your email
- Update your location
- Add your Instagram username
- Add other social links as needed

## Customizing the Design

### Colors

Edit the CSS variables at the top of `css/style.css`:

```css
:root {
  --primary-color: #1a1a1a;      /* Main text color */
  --secondary-color: #666666;    /* Secondary text */
  --background-color: #ffffff;   /* Page background */
  --accent-color: #333333;       /* Accent elements */
  --border-color: #e0e0e0;       /* Borders */
}
```

### Fonts

Change the font family in `css/style.css`:

```css
:root {
  --font-primary: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}
```

For custom fonts, add a Google Fonts link to your HTML `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Gallery Layout

The gallery uses CSS Grid. Adjust the minimum column width in `css/style.css`:

```css
.gallery-grid {
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
}
```

## Hosting Options

This is a static website that can be hosted on:
- **GitHub Pages** (free)
- **Netlify** (free tier available)
- **Vercel** (free tier available)
- **Squarespace** (paid, but easy custom domain)
- Any web hosting service

### GitHub Pages Quick Setup

1. Push this code to a GitHub repository
2. Go to Settings > Pages
3. Select "Deploy from a branch"
4. Choose your main branch
5. Your site will be live at `https://yourusername.github.io/repository-name`

## Adding New Gallery Sections

To add a new gallery (e.g., "sculptures"):

1. Copy `paintings.html` and rename to `sculptures.html`
2. Update the page title and heading
3. Add navigation link in all HTML files:
   ```html
   <a href="sculptures.html">sculptures</a>
   ```
4. Create `/images/sculptures/` folder
5. Add your images and update gallery items

## Browser Support

This website works in all modern browsers including:
- Chrome, Firefox, Safari, Edge
- Mobile browsers (iOS Safari, Chrome for Android)

## License

Feel free to use and modify this template for your personal portfolio.
