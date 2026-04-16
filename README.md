# 💕 Aditya & Priya - Sacred Wedding Celebration Website

A stunning wedding website inspired by traditional Indian wedding design aesthetics, blending heritage motifs with modern web elegance.

## 🎨 Design Concept

This website embodies the visual narrative of a traditional Indian wedding invitation banner, featuring:

### Visual Elements
- **Color Palette**: Warm tones of maroon (#5a1818), gold (#d4af37), and ivory (#f5e6d3) symbolizing prosperity, purity, and celebration
- **Ornate Architecture**: Domed structures evoking the grandeur of Indian temples
- **Floral Accents**: Intricate patterns framing the composition for romantic and ceremonial mood
- **Sacred Symbols**: Om (🕉️) and spiritual invocations for spiritual depth

### Typography
- **Header Font**: Playfair Display - elegant serif for main titles
- **Script Font**: Great Vibes - flowing script for couple's names
- **Body Font**: Cormorant Garamond - refined serif for readable text
- **Sacred Invocation**: Devanagari-inspired with Vedic mantras

### Layout & Composition
- **Symmetrical Alignment**: Ensures visual harmony
- **Hierarchical Structure**: Creates visual flow from spiritual invocation → couple names → event details
- **Adequate Spacing**: Maintains legibility while preserving ornate aesthetic

## ✨ Features

### Interactive Sections
- **Hero Banner**: Sacred invocation with animated couple names
- **Overview Cards**: Quick facts with hover animations
- **Ceremony Details**: Traditional Hindu ritual timeline
- **Reception Information**: Menu and celebration details
- **Multi-Day Events**: Wedding celebration schedule
- **RSVP Form**: Guest response with validation
- **Mobile Navigation**: Responsive hamburger menu

### Animations & Effects
- **AOS (Animate On Scroll)**: Smooth scroll-triggered animations
- **Parallax Effects**: Hero section parallax on scroll
- **Hover Animations**: Interactive card transitions
- **Form Validations**: Real-time email and phone validation
- **Success Animations**: Bounce and scale effects

## 📁 Project Structure

```
aditya-priya-wedding/
├── index.html          # Main website (600+ lines)
├── styles.css          # Custom CSS (1000+ lines)
├── script.js           # JavaScript functionality (400+ lines)
├── package.json        # Project metadata
└── README.md           # This file
```

## 🚀 Getting Started

### Quick Start
```bash
# Navigate to project
cd /Users/abineshr/workspace/projects/arulabinaya

# Start local server
python3 -m http.server 8000

# Open in browser
http://localhost:8000
```

### Using Node.js
```bash
npx http-server -p 8000
```

## 🎯 Page Sections

### 1. Hero Banner
- Sacred invocation: "स्वामी शरणं श्री गुरु शरणं"
- Couple names in elegant script
- Wedding date and location
- Call-to-action button

### 2. Overview Section
Four key facts with icons:
- Sacred Ceremony (8:00 AM - 11:00 AM)
- Grand Reception (5:00 PM - 11:00 PM)
- 500+ Guests
- Multi-Day Celebration

### 3. Ceremony Section
- Vedic ritual explanation
- 4-step ceremony timeline:
  1. Baraat & Reception (8:00 AM)
  2. Mandap Preparation (8:30 AM)
  3. Kanyadaan (9:00 AM)
  4. Saptapadi (9:30 AM)
- Ceremony details and information

### 4. Reception Section
- Welcome message
- Reception timing
- Menu with three categories:
  - Cocktail Hour
  - Main Courses
  - Desserts

### 5. Events Section
- Multi-day celebration schedule
- Dec 13: Welcome Dinner
- Dec 14: Mehendi & Sangeet
- Dec 15: Sacred Wedding Day

### 6. RSVP Section
- Guest name input
- Email validation
- Phone validation
- Attendance confirmation
- Meal preference selection
- Special wishes textarea
- Success message after submission

### 7. Footer
- Social media links
- Contact information
- Venue details
- Vedic blessings

## 🎨 Customization Guide

### Change Couple Names
Find and replace "Aditya" and "Priya" throughout `index.html`:
```html
<!-- Hero section -->
<h1 class="couple-name bride-name">Your Bride Name</h1>
<h1 class="couple-name groom-name">Your Groom Name</h1>
```

### Update Wedding Details
In `index.html`, modify:
- **Date**: 15 December 2024 → Your date
- **Location**: Grand Temple Estate, New Delhi → Your venue
- **Contact**: Email and phone numbers
- **Social Media**: Links in footer

### Customize Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --maroon: #5a1818;        /* Primary dark color */
    --gold: #d4af37;          /* Accent color */
    --ivory: #f5e6d3;         /* Light background */
    --cream: #faf6f0;         /* Main background */
}
```

### Modify Menu Items
Update reception menu in `index.html`:
```html
<div class="menu-category">
    <h4>🍷 Cocktail Hour</h4>
    <ul>
        <li>Your appetizer</li>
        <!-- Add more items -->
    </ul>
</div>
```

### Add or Remove Events
In events section, duplicate or remove event cards:
```html
<div class="event-node" data-aos="fade-up">
    <div class="event-marker">Dec XX</div>
    <h3>Event Name</h3>
    <p>Event description</p>
    <div class="event-meta">
        <p>🕖 Time | 📍 Location</p>
    </div>
</div>
```

## 💻 Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with gradients and animations
- **JavaScript ES6+**: Interactive features
- **AOS Library**: Scroll animations
- **Google Fonts**: Playfair Display, Great Vibes, Cormorant Garamond
- **Font Awesome**: Icons

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: < 768px (single column, hamburger menu)

## 🔧 Browser Support

- Chrome (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Edge (latest) ✅
- Mobile browsers ✅

## 🎯 Key Features Explained

### RSVP Form
- Real-time email validation
- Phone number validation
- LocalStorage persistence
- Success message animation
- Form auto-reset after submission

### Mobile Menu
- Hamburger icon on small screens
- Smooth open/close animation
- Auto-closes when link clicked
- Closes when clicking outside

### AOS Animations
- Elements animate as they scroll into view
- Staggered animations for sequence
- Customizable duration and delays
- Disabled on first load using `once: true`

### Form Validation
```javascript
// Email validation pattern
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Phone validation (10+ digits)
/^[0-9+\-\s()]{10,}$/
```

## 🗄️ Data Storage

### LocalStorage
RSVP responses saved as array of objects:
```javascript
{
    name: "Guest Name",
    email: "guest@example.com",
    phone: "+91 XXXX-XXXXX",
    guestCount: "2",
    attendance: "yes",
    mealPref: "veg",
    message: "Special wishes",
    timestamp: "4/16/2026, 10:30:00 AM"
}
```

### View All RSVPs
Open browser console and run:
```javascript
viewAllRSVPs()  // View in table format
```

### Clear RSVPs
```javascript
clearRSVPs()  // Clear with confirmation
```

## 🎁 Special Features

### Easter Egg
Enter Konami code (↑ ↑ ↓ ↓ ← → ← → B A) to trigger celebration confetti! 🎉

### Console Messages
Beautiful styled messages in browser console with wedding information

### Scroll to Top Button
Appears automatically when scrolling down, smooth scroll to top

### Wedding Countdown
Automatic countdown calculation (function available in console)

## 📊 Performance Optimization

- CSS minifiable for production
- JavaScript modular and efficient
- Image optimization recommended
- Smooth animations using CSS transforms
- Hardware acceleration enabled

## 🔐 Security Notes

- Form data stored locally only (no external server)
- Email/phone validation on client-side
- No sensitive data transmission
- HTTPS recommended for production deployment

## 🚀 Deployment Options

### GitHub Pages
```bash
git add .
git commit -m "Add Aditya & Priya wedding website"
git push origin main
```

### Netlify
- Connect GitHub repository
- Build command: (none required)
- Publish directory: root

### Vercel
- Import project
- Auto-deploy on push

### Traditional Hosting
- Upload all files via FTP
- Ensure index.html is in root directory
- Verify all resources load correctly

## 🎓 Learning Resources

- **AOS Documentation**: https://michalsnik.github.io/aos/
- **CSS Variables**: MDN Web Docs
- **HTML5 Forms**: W3C Specifications
- **Responsive Design**: Mobile-first approach

## 📝 Customization Checklist

- [ ] Update couple names
- [ ] Change wedding date and location
- [ ] Modify menu items
- [ ] Update contact information
- [ ] Add social media links
- [ ] Adjust color scheme if desired
- [ ] Test on mobile devices
- [ ] Check form validation
- [ ] Deploy to production

## 🐛 Troubleshooting

### RSVP Form Not Working
1. Check browser console for errors
2. Verify all form fields are filled
3. Check email/phone validation
4. Clear localStorage and try again

### Animations Not Showing
1. Ensure AOS is loaded from CDN
2. Check browser console for script errors
3. Verify CSS animations are not disabled
4. Clear browser cache

### Mobile Menu Issues
1. Hard refresh browser (Cmd+Shift+R)
2. Check viewport meta tag in HTML
3. Verify hamburger menu JavaScript

### Images Not Loading
1. Check image URLs are correct
2. Verify server is running
3. Check browser network tab
4. Ensure file paths are relative

## 📞 Support & Help

For customization questions:
1. Review HTML/CSS comments
2. Check JavaScript console logs
3. Inspect element styles
4. Review design concept section

## 💕 Final Notes

Beautiful elements to remember:
- Sacred invocation brings spiritual depth
- Gold accents symbolize prosperity
- Symmetrical design ensures harmony
- Elegant fonts convey sophistication
- Animations enhance user engagement

This website celebrates not just a wedding, but the union of two souls and the coming together of two families.

---

### Featured Information
**Couple**: Aditya & Priya  
**Wedding Date**: December 15, 2024  
**Venue**: Grand Temple Estate, New Delhi, India  
**Guest Count**: 500+  
**Email**: hello@adityapriya.com  
**Phone**: +91 98765-43210  

---

**Created with love and blessings 💕**

*"May your love story inspire generations to come"*

**🙏 Swami Sharanam Shree Guru Sharanam 🙏**
