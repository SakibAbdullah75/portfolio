---
title: "Personal Portfolio"
description: "This website. A fast, static portfolio built with Astro and plain CSS, deployed on Cloudflare Pages."
date: 2026-11-03
tags: ["Astro", "TypeScript", "CSS", "Cloudflare Pages"]
repo: "https://github.com/SakibAbdullah75/portfolio"
live: "https://sakibabdullah.pages.dev"
featured: false
cover: "../../assets/projects/portfolio-site.png"
coverAlt: "Home page of this portfolio: a hero with my photo and three featured project cards"
---

## Overview

I wanted a portfolio that loads instantly, works without JavaScript, and is easy to update. Astro was a natural fit: pages are written in plain HTML-like components, projects are Markdown files, and the build output is static files that can be hosted anywhere for free.

## Highlights

- File-based routing, so every page is just a file in `src/pages/`
- Projects stored as Markdown with typed front matter, validated at build time
- Automatic light and dark mode based on the visitor's system setting
- A few lines of JavaScript for the theme toggle and scroll animations; everything works without them
- Deployed to Cloudflare Pages with a single command

## What I learned

Keeping the content separate from the layout made the site much easier to maintain. Adding a new project is a matter of creating one Markdown file.
