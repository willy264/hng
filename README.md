# Profile Card Component

A responsive and accessible profile card component built with semantic HTML, CSS, and vanilla JavaScript.

## Features

- Semantic HTML5 markup
- Responsive design (mobile, tablet, desktop)
- Accessible to keyboard users and screen readers
- Real-time milliseconds counter
- Image upload functionality
- Social links with proper security attributes
- Properly structured lists for hobbies and dislikes

## Technical Implementation

### HTML

- Uses semantic tags (`<article>`, `<nav>`, `<section>`, etc.)
- All interactive elements are keyboard-focusable
- All elements include required data-testid attributes

### CSS

- Modern CSS with Flexbox 
- Responsive design with mobile-first approach
- Accessible focus styles
- Smooth transitions and animations

### JavaScript

- Real-time milliseconds counter using `Date.now()`
- Static image

## Running Locally

1. Clone the repository
2. Open `index.html` in your browser

## Testing

All elements include the required data-testid attributes:

- Profile card container: `test-profile-card`
- Name: `test-user-name`
- Biography: `test-user-bio`
- Current time: `test-user-time`
- Avatar: `test-user-avatar`
- Social links container: `test-user-social-links`
- Individual social links: `test-user-social-<network>`
- Hobbies list: `test-user-hobbies`
- Dislikes list: `test-user-dislikes`

## Browser Support

Tested and working in:

- Chrome
- Firefox
- Safari
- Edge

## Deployment

The site deployed to - Vercel
