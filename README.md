# Design System Documentation - Docusaurus

This is the Docusaurus version of the Design System Documentation website.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Serve built site locally
npm run serve
```

## Deployment

The site is configured to deploy to GitHub Pages automatically via GitHub Actions when you push to the main branch.

### Manual Deployment

You can also deploy manually using:

```bash
npm run deploy
```

## Configuration

- **Site URL**: https://aarushi.v.github.io
- **Base URL**: /design-system-docs-website/
- **GitHub Repository**: aarushi.v/design-system-docs-website

## Structure

- `docs/` - All documentation content
  - `components/` - UI component documentation
  - `patterns/` - Design pattern documentation
  - `layouts/` - Layout template documentation
  - `branding/` - Brand identity documentation
  - `accessibility/` - Accessibility guidelines
  - `content-style-guide/` - Content and writing guidelines
- `static/` - Static assets (images, etc.)
- `src/` - Custom React components and pages

## GitHub Pages Setup

1. Go to your repository settings
2. Navigate to Pages section
3. Set Source to "GitHub Actions"
4. The workflow in `.github/workflows/deploy.yml` will handle deployment

The site will be available at: https://aarushi.v.github.io/design-system-docs-website/