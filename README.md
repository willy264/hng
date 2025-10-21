# Personal Portfolio Website

A modern, responsive, and accessible portfolio website built with semantic HTML, CSS, and vanilla JavaScript.

## Features

### Home Page

- Interactive profile card component
- Responsive design (mobile, tablet, desktop)
- Accessible to keyboard users and screen readers
- Real-time date and time display
- Social links with proper security attributes
- Animated content sections
- Structured lists for hobbies and dislikes

### Contact Page

- Modern floating label form design
- Real-time form validation
- Required field indicators
- Visual feedback for input states
- Smooth label animations
- Accessible error messages
- Success confirmation display

### About Page

- Clean, organized biography sections
- Professional goals outline
- Skills and expertise showcase
- Future aspirations section
- Responsive layout design

## Technical Implementation

### HTML

- Semantic HTML5 markup (`<article>`, `<nav>`, `<section>`, etc.)
- Accessible form elements with proper ARIA attributes
- Organized page structure with clear hierarchy
- All interactive elements are keyboard-focusable
- Required data-testid attributes for testing
- Proper meta tags and SEO optimization

### CSS

- Modern CSS with nested selectors
- Flexbox and Grid layouts
- Mobile-first responsive design
- Smooth transitions and animations
- Glassmorphism effects with backdrop-filter
- Interactive hover and focus states
- Form input animations and transitions

### JavaScript

- Real-time date and time display
- Form validation with instant feedback
- Error handling and display
- Success message management

## Running Locally

1. Clone the repository
2. Open `index.html` in your browser

### Home Page Elements

- Profile card container: `test-profile-card`
- Name: `test-user-name`
- Biography: `test-user-bio`
- Current time: `test-user-time`
- Avatar: `test-user-avatar`
- Social links container: `test-user-social-links`
- Individual social links: `test-user-social-<network>`
- Hobbies list: `test-user-hobbies`
- Dislikes list: `test-user-dislikes`

### Contact Form Elements

- Form inputs: `test-contact-{name|email|subject|message}`
- Error messages: `test-contact-error-{name|email|subject|message}`
- Submit button: `test-contact-submit`
- Success message: `test-contact-success`

### About Page Elements

- About container: `test-about-page`
- Biography section: `test-about-bio`
- Goals section: `test-about-goals`
- Confidence areas: `test-about-confidence`
- Future note: `test-about-future-note`
- Extra thoughts: `test-about-extra`

## Form Validation

The contact form includes the following validations:

- Required field indicators with visual cues
- Email format validation
- Minimum message length requirement
- Real-time validation feedback
- Accessible error messages
- Success confirmation display

## Accessibility Features

- Semantic HTML structure
- ARIA attributes for dynamic content
- Keyboard navigation support
- Visible focus states
- Color contrast compliance
- Screen reader friendly form validation
- Clear error messaging
- Responsive text sizing

## Browser Support

Tested and working in:

- Chrome
- Firefox
- Safari
- Edge

## Performance

- Minimal JavaScript dependencies
- Optimized animations
- Efficient CSS selectors
- Lazy loading images
- Responsive image sizing

## Deployment

The site is deployed on Vercel
