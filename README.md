# Libréa Frontend Foundation

Build the foundation of a web application called Libréa.

Libréa is a modern digital library platform for university students.

Tagline:

“your digital space to read, learn, and grow.”

For this phase, focus ONLY on the frontend foundation, visual identity, layout, navigation, and reusable UI components.

Do not implement authentication, Supabase, database logic, PDF reader, or admin functionality yet.

DESIGN DIRECTION

The visual identity must be based on:

warm earth tones + mahogany + editorial library aesthetic

The atmosphere should feel like:

a beautiful mahogany bookshelf, warm paper, a cozy study room, and a modern digital reading platform.

The design should feel:

elegant

warm

sophisticated

academic

cozy

feminine but mature

editorial

premium

slightly vintage-inspired

Avoid:

bright blue

purple

neon colors

excessive gradients

glassmorphism

overly colorful UI

generic AI/SaaS dashboard styling

COLOR PALETTE

Use these colors consistently:

Deep Mahogany: #4A2525

Dark Cocoa: #2F1C1B

Espresso: #211817

Warm Terracotta: #9A5B4F

Dusty Rose Brown: #B98F84

Warm Cream: #F7F1E8

Sand Beige: #E8D8C5

Muted Gold: #B79A67

Main background should primarily use Warm Cream.

Use Deep Mahogany for primary buttons and important navigation.

Use Dark Cocoa/Espresso for typography.

Use Terracotta, Dusty Rose Brown, and Muted Gold only as subtle accents.

Avoid excessive pure white.

TYPOGRAPHY

Use:

Playfair Display or Cormorant Garamond for major headings and branding

Inter or Manrope for body text and UI

Use serif typography selectively.

BRANDING

Create a simple elegant wordmark:

libréa

Use lowercase.

Create a minimal icon inspired by an open book or book pages.

The logo should be simple and sophisticated.

APPLICATION STRUCTURE

Create the main application shell.

Desktop:

left sidebar

top header

main content area

Sidebar navigation:

Dashboard

Library

My Library

Reading History

Reading Goals

Bottom sidebar:

Profile

Settings

Logout

Use Lucide icons.

Create placeholder pages for navigation items that are not implemented yet.

DASHBOARD

Create /dashboard.

Use realistic static dummy data.

Hero:

Good morning, Nadya.

Supporting text:

“Continue your learning journey, one page at a time.”

Create:

Continue Reading

Show 3 books with:

cover

title

author

progress

progress bar

Continue Reading button

Reading Statistics

Show:

12 Books Read

3 Currently Reading

8 Saved Books

6h 24m Reading Time

Recommended For You

Show 4 books.

Recently Added

Show recently added books.

LIBRARY

Create /library.

Heading:

Explore the Library

Supporting text:

“Discover books to support your learning journey.”

Include:

search bar

category filters

sorting dropdown

responsive book grid

Categories:

All

Education

Technology

Computer Science

Design

Psychology

Business

Research

Literature

Create around 12 fictional books.

Each book card contains:

cover

title

author

category

rating

publication year

Read button

Save button

BOOK DETAIL

Create /book/:id.

Use static dummy data.

Show:

book cover

title

author

category

rating

year

page count

description

tags

Read Online button

Add to My Library button

The buttons do not need backend functionality yet.

REUSABLE COMPONENTS

Create reusable components:

Sidebar

Header

BookCard

BookGrid

BookDetail

ProgressBar

StatCard

CategoryPill

SearchBar

PageHeader

EmptyState

RESPONSIVE DESIGN

Desktop:
full sidebar and multi-column grid.

Tablet:
collapsible sidebar.

Mobile:
compact navigation and 2-column book grid.

IMPORTANT

This is ONLY Phase 1.

Do NOT implement:

authentication

Supabase

database

PDF reader

bookmarks

reading history logic

admin dashboard

analytics backend

Use static dummy data only.

Prioritize visual quality, consistency, responsive design, and reusable architecture.

Make the result look like a polished university portfolio project rather than a generic library template.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3500a1d7-7865-4958-9b10-fa0832704ea8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
