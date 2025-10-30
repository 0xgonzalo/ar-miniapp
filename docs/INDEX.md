# Documentation Index

Welcome to the AR Mini App for Base documentation!

## Getting Started

Start here if you're new to the project:

1. **[Quick Start Guide](./QUICKSTART.md)** ⚡
   - Get up and running in 5 minutes
   - Local development setup
   - Basic testing

## Integration Documentation

Learn about the Base mini app integration:

2. **[Integration Summary](./INTEGRATION_SUMMARY.md)** 📋
   - Overview of what was added
   - Architecture and flow diagrams
   - API reference
   - Usage examples

3. **[Base Mini App Setup](./BASE_MINI_APP_SETUP.md)** 🛠️
   - Complete integration guide
   - Configuration details
   - Environment variables
   - Troubleshooting

4. **[TypeScript Migration](./TYPESCRIPT_MIGRATION.md)** 📘
   - Complete migration summary
   - Type definitions reference
   - Usage guidelines
   - Best practices

## Deployment

Ready to launch? Follow these guides:

5. **[Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)** ✅
   - Pre-deployment tasks
   - Asset requirements
   - Testing procedures
   - Post-deployment steps

## Documentation Structure

```
docs/
├── INDEX.md                      # You are here
├── QUICKSTART.md                 # 5-minute setup guide
├── INTEGRATION_SUMMARY.md        # What was added & how to use it
├── BASE_MINI_APP_SETUP.md       # Complete setup guide
└── DEPLOYMENT_CHECKLIST.md       # Deployment checklist
```

## Key Resources

### Code Examples

- **Access User Info**: See [INTEGRATION_SUMMARY.md](./INTEGRATION_SUMMARY.md#usage-examples)
- **SDK Actions**: Check [BASE_MINI_APP_SETUP.md](./BASE_MINI_APP_SETUP.md#sdk-actions)
- **Example Page**: Visit `/example` route in your app

### Configuration Files

- **Environment Variables**: [.env.example](../.env.example)
- **Manifest Route**: [src/app/.well-known/farcaster.json/route.js](../src/app/.well-known/farcaster.json/route.js)
- **Provider Component**: [src/components/BaseMiniAppProvider.jsx](../src/components/BaseMiniAppProvider.jsx)

### External Resources

- [Base Documentation](https://docs.base.org/)
- [Base Mini Apps Guide](https://docs.base.org/mini-apps/)
- [Base Build Tools](https://base.org/build)
- [Farcaster Mini App SDK](https://github.com/farcasterxyz/miniapp-sdk)
- [Base Discord Community](https://discord.gg/base)

## Common Tasks

### First Time Setup
1. Read [Quick Start Guide](./QUICKSTART.md)
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev`
4. Visit `http://localhost:3001`

### Adding Base Features to a Component
1. Import the hook: `import { useBaseMiniApp } from '@/components/BaseMiniAppProvider'`
2. Use in component: `const { user, isLoading } = useBaseMiniApp()`
3. See examples in [INTEGRATION_SUMMARY.md](./INTEGRATION_SUMMARY.md#usage-examples)

### Preparing for Deployment
1. Follow [Deployment Checklist](./DEPLOYMENT_CHECKLIST.md)
2. Add required images to `public/` directory
3. Configure environment variables
4. Test locally before deploying

### Generating Account Association
1. Deploy your app to production
2. Verify manifest is accessible
3. Visit [Base Build Account Association Tool](https://base.org/build/account-association)
4. Follow steps in [BASE_MINI_APP_SETUP.md](./BASE_MINI_APP_SETUP.md#step-3-generate-account-association)

### Testing the Integration
1. Visit `/example` route in your app
2. Check manifest at `/.well-known/farcaster.json`
3. Use [Base Build Preview Tool](https://base.org/build/preview)
4. Test in actual Base app (production only)

## Troubleshooting

Having issues? Check these resources:

- **Common Issues**: [BASE_MINI_APP_SETUP.md](./BASE_MINI_APP_SETUP.md#troubleshooting)
- **Deployment Problems**: [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md#common-issues)
- **Console Errors**: Check browser console and server logs
- **Community Support**: [Base Discord](https://discord.gg/base)

## Project Structure Reference

```
AR-mini-app/
├── src/
│   ├── app/
│   │   ├── layout.js                    # Root layout with Base provider
│   │   ├── page.js                      # Home page with AR view
│   │   ├── example/page.jsx             # Example Base context usage
│   │   ├── obras/                       # AR artwork pages
│   │   │   ├── agua/page.jsx
│   │   │   ├── bicho/page.jsx
│   │   │   └── ...                      # Other artworks
│   │   └── .well-known/
│   │       └── farcaster.json/route.js  # Base manifest endpoint
│   └── components/
│       ├── BaseMiniAppProvider.jsx      # Base SDK provider & hooks
│       ├── modelComponent.jsx           # AR view component
│       ├── model.jsx                    # 3D model loader
│       └── utils/
│           └── controles-rotacion.jsx   # Rotation controls
├── public/
│   ├── models/                          # 3D models (.glb)
│   ├── targets/                         # AR targets (.mind)
│   ├── icon.png                         # App icon (add this)
│   ├── splash.png                       # Splash screen (add this)
│   └── embed-image.png                  # Embed preview (add this)
├── docs/                                # Documentation (you are here!)
│   ├── INDEX.md
│   ├── QUICKSTART.md
│   ├── INTEGRATION_SUMMARY.md
│   ├── BASE_MINI_APP_SETUP.md
│   └── DEPLOYMENT_CHECKLIST.md
├── .env.example                         # Environment variables template
├── package.json                         # Dependencies
└── README.md                            # Project overview
```

## Quick Navigation

**I want to...**

- **Get started quickly** → [QUICKSTART.md](./QUICKSTART.md)
- **Understand what was added** → [INTEGRATION_SUMMARY.md](./INTEGRATION_SUMMARY.md)
- **Configure Base integration** → [BASE_MINI_APP_SETUP.md](./BASE_MINI_APP_SETUP.md)
- **Deploy to production** → [DEPLOYMENT_CHECKLIST.md](./DEPLOYMENT_CHECKLIST.md)
- **Access user information** → [INTEGRATION_SUMMARY.md](./INTEGRATION_SUMMARY.md#usage-examples)
- **Fix an error** → [BASE_MINI_APP_SETUP.md](./BASE_MINI_APP_SETUP.md#troubleshooting)
- **Add a new AR artwork** → [README.md](../README.md#adding-new-ar-artworks)

## Updates and Contributions

This documentation was created in October 2025. If you find any issues or have suggestions:

1. Check existing issues
2. Create a new issue with details
3. Submit a pull request with fixes

## Need Help?

- 📖 Start with [Quick Start Guide](./QUICKSTART.md)
- 🔍 Search this documentation
- 💬 Ask in [Base Discord](https://discord.gg/base)
- 🐛 [Report bugs](https://github.com/your-username/ar-mini-app/issues)

---

**Happy building!** 🚀

Made with ❤️ for the Base community
