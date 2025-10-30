import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import BaseMiniAppProvider from "@/components/BaseMiniAppProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AR Mini App",
  description: "Augmented Reality experiences on Base",
  other: {
    'fc:miniapp': JSON.stringify({
      version: 'next',
      imageUrl: 'https://your-domain.com/embed-image.png',
      button: {
        title: 'Launch AR Experience',
        action: {
          type: 'launch_miniapp',
          name: 'AR Mini App',
          url: 'https://your-domain.com'
        }
      }
    })
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseMiniAppProvider>
          {children}
        </BaseMiniAppProvider>
      </body>
    </html>
  );
}
