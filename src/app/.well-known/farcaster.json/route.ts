  function withValidProperties(properties: Record<string, undefined | string | string[]>) {
    return Object.fromEntries(
      Object.entries(properties).filter(([_, value]) => (Array.isArray(value) ? value.length > 0 : !!value))
    );
  }

  export async function GET() {
    const URL = process.env.NEXT_PUBLIC_APP_URL as string;

    const manifest = {
      accountAssociation: {
        header: "",
        payload: "",
        signature: "",
      },
      miniapp: {
        name: 'AR Mini App',
        version: '1',
        homeUrl: URL,
        iconUrl: `${URL}/icon.png`,
        splashImageUrl: `${URL}/splash.png`,
        splashBackgroundColor: '#000000',
        subtitle: "Experience Augmented Reality art on Base",
        description: 'Experience Augmented Reality art on Base',
        tags: ['art', 'augmented reality', 'base'],
        primaryCategory: 'art',
        heroImageUrl: `${URL}/icon.png`,
        tagline: "Experience Augmented Reality art on Base",
        ogTitle: "AR Mini App",
        ogDescription: "Experience Augmented Reality art on Base",
        ogImageUrl: `${URL}/icon.png`,
        screenshotUrls: [
          `${URL}/icon.png`,
          `${URL}/splash.png`,
        ],
      },
      baseBuilder: {
        ownerAddress: '0x6B0425666196885aeA6F2630F5B8750Be2C81ea1',
      },
    };

    return Response.json(manifest);
  }