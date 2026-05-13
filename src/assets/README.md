# Assets Directory

Place your images and branding assets here.

## Directory Structure

```
assets/
├── logo/
│   ├── alfa-global-logo.png       ← Main company logo (recommended: 512x512 PNG)
│   ├── alfa-global-logo-dark.png  ← Logo variant for dark backgrounds
│   └── alfa-global-favicon.ico    ← Favicon (32x32 or 64x64)
│
├── team/
│   ├── alexander-peda.jpg         ← Founder & CEO (recommended: 400x400 square)
│   ├── operations-lead.jpg        ← Head of Operations
│   ├── technology-lead.jpg        ← Head of Technology
│   └── business-development.jpg   ← Head of Growth
│
└── README.md                      ← This file
```

## Image Guidelines

- **Logo**: Use transparent PNG, minimum 512x512px
- **Team photos**: Square aspect ratio (1:1), minimum 400x400px, JPG or PNG
- **Favicon**: 32x32 or 64x64 ICO/PNG

## Usage

Images are referenced via Next.js `Image` component:
```jsx
import Image from 'next/image';
<Image src="/images/logo/alfa-global-logo.png" alt="ALFA Global" width={120} height={40} />
```

Place the same files in `public/images/` for static serving, or import directly from this folder.
