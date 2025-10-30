import { NextResponse } from 'next/server';

export async function GET() {
  const manifest = {
    miniapp: {
      name: 'AR Mini App',
      homeUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com',
      iconUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'}/icon.png`,
      splashImageUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com'}/splash.png`,
      splashBackgroundColor: '#000000',
      description: 'Experience Augmented Reality art on Base',
      primaryCategory: 'art',
    },
    baseBuilder: {
      // Replace with your Base account address after verification
      ownerAddress: '0x0000000000000000000000000000000000000000',
    },
    accountAssociation: {
      // These will be generated after verification
      // Follow the Base Build Account association tool to generate these
      header: 'eyJmaWQiOjAwMDAwMCwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDAw...',
      payload: 'eyJkb21haW4iOiJ5b3VyLWRvbWFpbi5jb20ifQ',
      signature: 'MHg...'
    }
  };

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
