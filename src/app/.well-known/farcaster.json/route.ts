  function withValidProperties(properties: Record<string, undefined | string | string[]>) {
    return Object.fromEntries(
      Object.entries(properties).filter(([_, value]) => (Array.isArray(value) ? value.length > 0 : !!value))
    );
  }

  export async function GET() {
    const URL = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com';

    const manifest = {
      accountAssociation: withValidProperties({
        header: "",
        payload: "",
        signature: "",
      }),
      miniapp: withValidProperties({
        name: 'AR Mini App',
        version: '1',
        homeUrl: URL,
        iconUrl: `${URL}/icon.png`,
        splashImageUrl: `${URL}/splash.png`,
        splashBackgroundColor: '#000000',
        description: 'Experience Augmented Reality art on Base',
        tags: ['art', 'augmented reality', 'base'],
        primaryCategory: 'art',
      }),
      baseBuilder: {
        ownerAddress: process.env.BASE_OWNER_ADDRESS || '0x6B0425666196885aeA6F2630F5B8750Be2C81ea1',
      }
    };

    return Response.json(manifest);
  }