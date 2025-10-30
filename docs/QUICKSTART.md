# Quick Start Guide

Get your AR Mini App running on Base in 5 minutes!

## Prerequisites

- Node.js 20.17.0+
- A Base account
- A deployed domain (for production)

## Local Development

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3001`

### 3. Test Base Integration

Navigate to the example page to see Base context:

```
http://localhost:3001/example
```

## Quick Deploy Checklist

Before deploying to production:

- [ ] Create `.env.local` with your domain URL
- [ ] Add app icon (`public/icon.png`)
- [ ] Add splash screen (`public/splash.png`)
- [ ] Add embed image (`public/embed-image.png`)
- [ ] Update app name and description in `src/app/layout.js`
- [ ] Update manifest in `src/app/.well-known/farcaster.json/route.js`

## Deploy to Production

### Using Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Using Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod

# Set environment variables in Netlify dashboard
```

## Post-Deployment Setup

### 1. Verify Manifest

Test that your manifest is accessible:

```bash
curl https://your-domain.com/.well-known/farcaster.json
```

### 2. Generate Account Association

1. Go to [Base Build Account Association Tool](https://base.org/build/account-association)
2. Enter your app URL
3. Complete verification
4. Copy credentials to environment variables
5. Redeploy

### 3. Validate

1. Visit [Base Build Preview Tool](https://base.org/build/preview)
2. Enter your app URL
3. Verify everything works

### 4. Publish

Create a post in the Base app with your URL!

## Common Issues

### Port already in use

If port 3000 is in use, the app will automatically try 3001. To use a specific port:

```bash
PORT=3002 npm run dev
```

### Module not found

```bash
rm -rf node_modules package-lock.json
npm install
```

### Build cache issues

```bash
rm -rf .next
npm run dev
```

## Project Structure

```
AR-mini-app/
├── src/
│   ├── app/
│   │   ├── layout.js                    # Root layout with Base provider
│   │   ├── page.js                      # Home page with AR view
│   │   ├── example/page.jsx             # Example Base context usage
│   │   └── .well-known/
│   │       └── farcaster.json/route.js  # Base manifest endpoint
│   └── components/
│       ├── BaseMiniAppProvider.jsx      # Base SDK provider & hooks
│       ├── modelComponent.jsx           # AR view component
│       └── model.jsx                    # 3D model loader
├── public/
│   ├── models/                          # 3D models (.glb)
│   ├── targets/                         # AR targets (.mind)
│   ├── icon.png                         # App icon (add this)
│   ├── splash.png                       # Splash screen (add this)
│   └── embed-image.png                  # Embed preview (add this)
├── docs/
│   ├── BASE_MINI_APP_SETUP.md          # Detailed setup guide
│   └── QUICKSTART.md                    # This file
└── .env.example                         # Environment variables template
```

## Available AR Models

The app comes with several pre-loaded AR models:

- `/obras/agua` - Water-themed AR
- `/obras/bicho` - Creature AR
- `/obras/chiri` - Chiri artwork
- `/obras/contemplation` - Contemplation piece
- `/obras/azucena` - Azucena artwork
- `/obras/paisajes` - Landscapes
- `/obras/sachi` - Sachi artwork
- `/obras/planta` - Plant AR
- `/obras/turtle` - Turtle AR
- `/obras/pixelverse` - Pixelverse AR

## Using the Base SDK

### Get User Information

```javascript
'use client';
import { useBaseMiniApp } from '@/components/BaseMiniAppProvider';

export default function MyComponent() {
  const { user, isLoading } = useBaseMiniApp();

  if (isLoading) return <div>Loading...</div>;

  return <div>Hello, {user?.displayName}!</div>;
}
```

### Close the Mini App

```javascript
import { sdk } from '@farcaster/miniapp-sdk';

function handleClose() {
  sdk.actions.close();
}
```

## Next Steps

1. Read the [Full Setup Guide](./BASE_MINI_APP_SETUP.md)
2. Customize your AR models in `public/models/`
3. Add more pages and features
4. Deploy and share with the Base community!

## Need Help?

- 📖 [Full Documentation](./BASE_MINI_APP_SETUP.md)
- 🌐 [Base Docs](https://docs.base.org/mini-apps/)
- 💬 [Base Discord](https://discord.gg/base)

---

Happy building! 🚀
