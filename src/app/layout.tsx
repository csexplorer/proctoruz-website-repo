import '@mantine/core/styles.css';
import '@/styles/globals.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import type { Metadata } from 'next';
import { theme } from '@/styles/theme';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: 'Proctor.uz',
    template: '%s | Proctor.uz'
  },
  description:
    'Secure exam delivery and online proctoring for universities, training centers, and certification teams.',
  openGraph: {
    type: 'website',
    siteName: 'Proctor.uz'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="light" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
