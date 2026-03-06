# Doctor Portfolio Website Architecture

## 1. Overview

This document describes the complete architecture for the Doctor Portfolio Website for:

Dr Krushnadas Radadiya

The website will be a **single-page React application** designed to showcase the doctor’s professional information, procedures, education, achievements, and contact details.

The architecture focuses on:

- Component reusability
- Clean folder structure
- Maintainability
- Performance
- SEO-friendly structure
- Mobile responsiveness

---

# 2. Technology Stack

Frontend Framework
React (Vite)

Styling
Tailwind CSS

State Management
React Hooks

Icons
React Icons

Animation (Optional)
Framer Motion

Maps
Google Maps Embed

Deployment
Vercel / Netlify

Version Control
Git + GitHub

---

# 3. High Level Architecture

User Browser
        |
        |
        v
React Frontend Application
        |
        |
        v
Static Assets + Content Data
        |
        |
        v
Hosting Platform (Vercel/Netlify)

Since the website is static, there is **no backend server required**.

---

# 4. Application Architecture

The application follows a **component-based architecture**.

Major Layers

Presentation Layer
Component Layer
Data Layer
Configuration Layer

---

# 5. Folder Architecture

project-root

public
    logo.png
    doctor.jpg
    favicon.ico

src

assets
    images
    icons

components
    Navbar.jsx
    Hero.jsx
    About.jsx
    Specialization.jsx
    Procedures.jsx
    Education.jsx
    Awards.jsx
    Publications.jsx
    Memberships.jsx
    Contact.jsx
    Map.jsx
    Footer.jsx

pages
    Home.jsx

data
    procedures.js
    publications.js
    education.js
    awards.js
    memberships.js

styles
    globals.css

utils
    helpers.js

App.jsx
main.jsx

tailwind.config.js

---

# 6. Component Hierarchy

App

Home

Navbar
Hero
About
Specialization
Procedures
Education
Awards
Publications
Memberships
Contact
Map
Footer

---

# 7. UI Layout Architecture

Landing Page Layout

Navbar
Hero Section
About Doctor
Specializations
Interventional Procedures
Education Timeline
Awards Section
Publications
Memberships
Contact Form
Location Map
Footer

---

# 8. Data Flow

Since the website is static, data flow is simple.

Data Source
↓

Static JS Files

↓

React Components

↓

UI Rendering

Example

procedures.js
↓

Procedures.jsx

↓

Procedure Cards Render

---

# 9. Styling Architecture

TailwindCSS Utility Classes

Custom Theme Colors

Primary Color
#F25C5C

Secondary
#FF8A8A

Accent
#FFE5E5

---

# 10. Responsiveness Strategy

Breakpoints

Mobile
sm

Tablet
md

Laptop
lg

Desktop
xl

Approach

Mobile First Design

---

# 11. Performance Strategy

Optimized Images

Lazy loading

Component splitting

Minimal dependencies

---

# 12. SEO Architecture

SEO Tags

Title
Meta Description
Keywords

Structured headings

H1
H2
H3

Optimized images

---

# 13. Security Considerations

Input sanitization for contact form

HTTPS deployment

Spam protection for form submission

---

# 14. Scalability

Future upgrades

Add Blog

Add appointment system

Add patient portal

Add backend API

---

# 15. Deployment Architecture

Developer

↓

GitHub Repository

↓

Vercel Deployment

↓

Live Website

---

# 16. Maintenance Strategy

Content update via data files

Reusable components

Version control
