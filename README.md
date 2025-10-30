# AR Mini App for Base

An Augmented Reality experience integrated with the Base ecosystem, allowing users to explore AR art directly within the Base app.

## Features

- **AR Experiences**: View 3D models in augmented reality using your device camera
- **Base Integration**: Seamlessly integrated with Base mini app SDK
- **User Context**: Access user information and authentication through Base
- **Multiple Artworks**: Pre-loaded collection of AR artworks
- **Responsive Design**: Works on mobile and desktop devices
- **Image Tracking**: Uses MindAR for robust AR tracking

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3001
```

For detailed setup instructions, see [Quick Start Guide](./docs/QUICKSTART.md).

## Documentation

- **[Quick Start Guide](./docs/QUICKSTART.md)** - Get started in 5 minutes
- **[Base Mini App Setup](./docs/BASE_MINI_APP_SETUP.md)** - Complete integration guide

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **3D Rendering**: Three.js + React Three Fiber
- **AR Library**: react-three-mind (MindAR)
- **Base SDK**: @farcaster/miniapp-sdk
- **Styling**: Tailwind CSS

## Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.js          # Root layout with Base provider
│   │   ├── page.js            # Home page
│   │   ├── obras/             # AR artwork pages
│   │   └── .well-known/       # Base manifest endpoint
│   └── components/
│       ├── BaseMiniAppProvider.jsx  # Base SDK integration
│       ├── modelComponent.jsx       # AR view wrapper
│       ├── model.jsx                # 3D model loader
│       └── utils/                   # Utility components
├── public/
│   ├── models/                # 3D models (.glb files)
│   └── targets/               # AR tracking targets (.mind files)
└── docs/                      # Documentation
```

## Available AR Experiences

The app includes several AR artworks:

| Route | Description |
|-------|-------------|
| `/obras/agua` | Water-themed AR experience |
| `/obras/bicho` | Creature artwork |
| `/obras/chiri` | Chiri collection |
| `/obras/contemplation` | Contemplation piece |
| `/obras/azucena` | Azucena artwork |
| `/obras/paisajes` | Landscape scenes |
| `/obras/sachi` | Sachi collection |
| `/obras/planta` | Plant-based AR |
| `/obras/turtle` | Turtle artwork |
| `/obras/pixelverse` | Pixelverse experience |

## Using Base Features

### Access User Information

```javascript
'use client';
import { useBaseMiniApp } from '@/components/BaseMiniAppProvider';

export default function Component() {
  const { user, isLoading } = useBaseMiniApp();

  return <div>Welcome, {user?.displayName}!</div>;
}
```

### SDK Actions

```javascript
import { sdk } from '@farcaster/miniapp-sdk';

// Close mini app
sdk.actions.close();

// Open URL
sdk.actions.openUrl('https://example.com');
```

## Development

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_APP_URL=https://your-domain.com
BASE_OWNER_ADDRESS=0xYourAddress
```

See [`.env.example`](./.env.example) for all options.

### Running Tests

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

### Post-Deployment

1. Generate account association credentials
2. Update environment variables
3. Verify manifest at `/.well-known/farcaster.json`
4. Test with [Base Build Preview Tool](https://base.org/build/preview)

See the [Base Mini App Setup Guide](./docs/BASE_MINI_APP_SETUP.md) for details.

## Adding New AR Artworks

### 1. Add 3D Model

Place your `.glb` file in `public/models/`

### 2. Generate AR Target

Use [MindAR Image Compiler](https://hiukim.github.io/mind-ar-js-doc/tools/compile) to generate a `.mind` file.

Place it in `public/targets/`

### 3. Create Page

Create a new page in `src/app/obras/your-artwork/page.jsx` - see existing pages for examples.

## Troubleshooting

### Common Issues

**Webpack cache errors**
```bash
rm -rf .next
npm run dev
```

**Model not loading**
- Verify the `.glb` file path is correct
- Ensure the model is optimized (< 10MB recommended)

**AR not working**
- Ensure HTTPS in production (required for camera access)
- Check that target image is high contrast

See [Full Troubleshooting Guide](./docs/BASE_MINI_APP_SETUP.md#troubleshooting).

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Safari 14+ (iOS 14+)
- ✅ Firefox 88+
- ⚠️ Requires WebGL2 and camera access

## Resources

- [Base Documentation](https://docs.base.org/)
- [Base Mini Apps Guide](https://docs.base.org/mini-apps/)
- [Next.js Docs](https://nextjs.org/docs)
- [Three.js Documentation](https://threejs.org/docs/)
- [MindAR Documentation](https://hiukim.github.io/mind-ar-js-doc/)

## Support

- 📖 [Documentation](./docs/)
- 💬 [Base Discord](https://discord.gg/base)

---

Made with ❤️ for the Base community
