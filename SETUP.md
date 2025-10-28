# Portfolio Setup Guide

Your portfolio has been converted to vanilla HTML, CSS, and JavaScript! Here's how to set it up:

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── app.js          # Router and functionality
├── data/
│   └── projects.json   # Project data
└── assets/
    └── images/
        ├── hero.png    # Hero/profile image
        ├── boost.png   # BOOST project image
        ├── bunny.png   # BUNNY project image
        └── todapay.png # TODAPAY project image
```

## Setup Instructions

### 1. Create Assets Folder

Create an `assets/images/` folder in your project root and add your images:
- `hero.png` - Your profile/hero image
- `boost.png` - BOOST project thumbnail
- `bunny.png` - BUNNY project thumbnail  
- `todapay.png` - TODAPAY project thumbnail

### 2. Update Image Paths (if needed)

If your images have different names, update the paths in:
- `index.html` (lines with `src="assets/images/..."`)
- `data/projects.json` (image paths in project data)

### 3. Testing Locally

To test locally, you need a local web server (due to JSON loading):

**Option 1: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option 2: Node.js**
```bash
npx http-server
```

**Option 3: VS Code**
Install the "Live Server" extension and right-click `index.html` → "Open with Live Server"

Then open: `http://localhost:8000` (or the port shown)

### 4. Deploy to GitHub Pages

1. Create a new repository on GitHub
2. Push all files to the repository:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: main / (root)
   - Save

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Features

✅ **Hash-based routing** for GitHub Pages compatibility
✅ **JSON data management** for easy project updates
✅ **Fully responsive** design
✅ **Smooth transitions** and hover effects
✅ **No build process** required
✅ **Purple/black gradient** theme maintained

## Customization

### Update Projects

Edit `data/projects.json` to add/modify projects. Each project has:
- title, subtitle, description
- image path
- details (role, duration, technologies, status)
- features array
- challenges and outcome text

### Update Styles

Edit `css/styles.css` to change:
- Colors (search for `#a78bfa` for purple, `#1a0b2e` for dark purple)
- Spacing, fonts, sizes
- Responsive breakpoints

### Update Contact Info

Edit the contact links in `index.html` (search for "contact-button")

## Browser Support

Works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Troubleshooting

**Images not loading?**
- Check file paths match exactly (case-sensitive)
- Ensure images are in `assets/images/` folder

**Routing not working?**
- Hash routing (#/) should work without a server
- For local testing of JSON, use a local web server

**Styling issues?**
- Clear browser cache
- Check browser console for errors

## License

Feel free to customize and use for your portfolio!
