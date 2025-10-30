# Base Mini App Integration Guide

This guide explains how to use and deploy this AR application as a Base mini app.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Development](#development)
- [Deployment](#deployment)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)

## Overview

This AR Mini App is integrated with the Base mini app ecosystem using the Farcaster Mini App SDK. It allows users to experience augmented reality art directly within the Base app.

### Features

- ✅ Base mini app SDK integration
- ✅ User context and authentication
- ✅ Manifest configuration for Base app
- ✅ Rich embed metadata
- ✅ Ready state management
- ✅ Custom hooks for Base context access

## Prerequisites

Before you begin, ensure you have:

1. **A Base Account**: Sign up at [Base](https://base.org)
2. **Node.js**: Version 20.17.0 or higher
3. **Domain**: A deployed domain for your app
4. **Wallet Address**: Your Base builder owner address

## Installation

The Base mini app SDK is already installed in this project. If you need to reinstall:

```bash
npm install @farcaster/miniapp-sdk
```

## Configuration

### 1. Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Update the following variables:

```env
# Your deployed app URL
NEXT_PUBLIC_APP_URL=https://your-domain.com

# Base Builder Owner Address (from your Base account)
BASE_OWNER_ADDRESS=0xYourAddressHere

# Account Association Credentials (generated in step 3)
ACCOUNT_ASSOCIATION_HEADER=your_header_here
ACCOUNT_ASSOCIATION_PAYLOAD=your_payload_here
ACCOUNT_ASSOCIATION_SIGNATURE=your_signature_here
```

### 2. Update Manifest

Edit `src/app/.well-known/farcaster.json/route.js`:

```javascript
const manifest = {
  miniapp: {
    name: 'Your AR App Name',
    homeUrl: process.env.NEXT_PUBLIC_APP_URL,
    iconUrl: `${process.env.NEXT_PUBLIC_APP_URL}/icon.png`,
    splashImageUrl: `${process.env.NEXT_PUBLIC_APP_URL}/splash.png`,
    splashBackgroundColor: '#000000',
    description: 'Your app description',
    primaryCategory: 'art', // Options: art, social, gaming, utility, etc.
  },
  baseBuilder: {
    ownerAddress: process.env.BASE_OWNER_ADDRESS,
  },
  accountAssociation: {
    header: process.env.ACCOUNT_ASSOCIATION_HEADER,
    payload: process.env.ACCOUNT_ASSOCIATION_PAYLOAD,
    signature: process.env.ACCOUNT_ASSOCIATION_SIGNATURE,
  }
};
```

### 3. Update Metadata

Edit `src/app/layout.js` to customize your embed:

```javascript
export const metadata = {
  title: "Your AR App Name",
  description: "Your app description",
  other: {
    'fc:miniapp': JSON.stringify({
      version: 'next',
      imageUrl: 'https://your-domain.com/embed-image.png',
      button: {
        title: 'Launch AR Experience',
        action: {
          type: 'launch_miniapp',
          name: 'Your AR App Name',
          url: 'https://your-domain.com'
        }
      }
    })
  }
};
```

### 4. Add Required Images

Add the following images to your `public` directory:

- `icon.png` - App icon (512x512px recommended)
- `splash.png` - Splash screen image (1080x1920px recommended)
- `embed-image.png` - Embed preview image (1200x630px recommended)

## Development

### Running Locally

```bash
npm run dev
```

Visit `http://localhost:3001` to see your app.

### Testing Base Context

Navigate to `/example` to see the Base mini app context and user information:

```
http://localhost:3001/example
```

## Deployment

### Step 1: Deploy Your Application

Deploy to your preferred hosting platform (Vercel, Netlify, etc.):

```bash
npm run build
npm run start
```

### Step 2: Verify Manifest Accessibility

Ensure your manifest is accessible at:

```
https://your-domain.com/.well-known/farcaster.json
```

Test it with:

```bash
curl https://your-domain.com/.well-known/farcaster.json
```

### Step 3: Generate Account Association

1. Go to the [Base Build Account Association Tool](https://base.org/build/account-association)
2. Enter your deployed app URL
3. Complete the verification process
4. Copy the generated credentials:
   - `header`
   - `payload`
   - `signature`
5. Update your `.env.local` or environment variables with these values
6. Redeploy your application

### Step 4: Validate Your Mini App

1. Visit the [Base Build Preview Tool](https://base.org/build/preview)
2. Enter your app URL
3. Verify that:
   - ✅ Manifest loads correctly
   - ✅ Embeds display properly
   - ✅ Account association is verified

### Step 5: Publish

Create a post in the Base app containing your app URL to make it discoverable.

## Usage

### Using the Base Mini App Provider

The `BaseMiniAppProvider` is automatically included in your app's layout. It:

- Signals ready state to the Base app
- Provides context to child components
- Handles SDK initialization

### Accessing User Context

Use the `useBaseMiniApp` hook in any component:

```javascript
'use client';

import { useBaseMiniApp } from '@/components/BaseMiniAppProvider';

export default function MyComponent() {
  const { context, isLoading, user, client } = useBaseMiniApp();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user?.displayName || 'User'}!</h1>
      <p>Your FID: {user?.fid}</p>
      {user?.pfpUrl && (
        <img src={user.pfpUrl} alt="Profile" />
      )}
    </div>
  );
}
```

### Available Context Properties

```typescript
{
  context: {
    user: {
      fid: number;              // Farcaster ID
      username?: string;        // Username
      displayName?: string;     // Display name
      pfpUrl?: string;         // Profile picture URL
    };
    client: {
      fid: number;             // Client FID
      clientName?: string;     // Client name
    };
  };
  isLoading: boolean;          // Loading state
}
```

### SDK Actions

Access SDK actions directly:

```javascript
import { sdk } from '@farcaster/miniapp-sdk';

// Signal ready (already done in provider)
sdk.actions.ready();

// Close the mini app
sdk.actions.close();

// Open a URL
sdk.actions.openUrl('https://example.com');

// Add a frame
sdk.actions.addFrame({
  url: 'https://example.com/frame'
});
```

## Example Implementation

### Basic AR View with User Context

```javascript
'use client';

import dynamic from "next/dynamic";
import { useBaseMiniApp } from '@/components/BaseMiniAppProvider';
import Model from "@/components/model";

const ModelComponent = dynamic(() => import('@/components/modelComponent'), { ssr: false });

export default function ARPage() {
  const { user, isLoading } = useBaseMiniApp();

  if (isLoading) {
    return <div>Loading Base context...</div>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="p-4 bg-gray-800 text-white">
        <p>Welcome, {user?.displayName || 'User'}!</p>
      </header>
      <main className="flex-1">
        <ModelComponent
          model={<Model modelUrl="/models/agua.glb" animate={true} />}
          target="/targets/agua.mind"
          scale={0.7}
          position={[0, 1, 0]}
        />
      </main>
    </div>
  );
}
```

## Troubleshooting

### Manifest Not Loading

**Problem**: Manifest returns 404 or incorrect data

**Solution**:
- Verify the route file exists at `src/app/.well-known/farcaster.json/route.js`
- Check that environment variables are set correctly
- Restart the development server
- Clear your browser cache

### Account Association Failed

**Problem**: Account verification fails

**Solution**:
- Ensure manifest is deployed and accessible
- Verify your Base account address is correct
- Complete the verification process again
- Update environment variables with new credentials

### Ready State Not Signaling

**Problem**: App doesn't load in Base app

**Solution**:
- Check that `BaseMiniAppProvider` is wrapping your app
- Verify `sdk.actions.ready()` is being called
- Check browser console for errors
- Ensure SDK is properly installed

### User Context Empty

**Problem**: `user` or `context` is null/undefined

**Solution**:
- App may not be running within Base app (test in production)
- Check that SDK is properly initialized
- Verify you're using the `useBaseMiniApp` hook correctly
- Ensure component is marked with `'use client'`

### Build Errors

**Problem**: Build fails with SDK errors

**Solution**:
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next
npm run build
```

## Resources

- [Base Mini App Documentation](https://docs.base.org/mini-apps/)
- [Farcaster Mini App SDK](https://github.com/farcasterxyz/miniapp-sdk)
- [Base Build Tools](https://base.org/build)
- [Base Community](https://discord.gg/base)

## Support

If you encounter issues:

1. Check this documentation
2. Review the [Base docs](https://docs.base.org/mini-apps/)
3. Ask in the Base Discord community
4. Open an issue in the repository

## Next Steps

After successful setup:

1. ✅ Test your app in the Base app preview
2. ✅ Customize your AR models and targets
3. ✅ Add user-specific features using Base context
4. ✅ Implement social features (sharing, following, etc.)
5. ✅ Monitor analytics and user engagement
6. ✅ Iterate based on user feedback

---

**Last Updated**: October 2025
**SDK Version**: @farcaster/miniapp-sdk ^0.2.1
