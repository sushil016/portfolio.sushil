import SmoothScroll from "@/components/Smoothscroll";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({ 
  weight: ['400', '600', '700'], 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A showcase of my work and skills",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className={`${spaceGrotesk.className} font-sans`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
