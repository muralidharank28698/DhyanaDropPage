import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhyana Stays — Experience Beyond Stay",
  description:
    "India's first AI-powered curated hospitality ecosystem connecting travellers, investors, property owners, and local communities.",
  keywords: [
    "DhyanaStays",
    "curated stays",
    "AI trip planner",
    "hospitality",
    "travel India",
    "investment",
    "eco tourism",
  ],
  openGraph: {
    title: "Dhyana Stays — Experience Beyond Stay",
    description:
      "India's first AI-powered curated hospitality ecosystem.",
    type: "website",
    url: "https://dhyanastays.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('dhyana-theme');
                  if (!theme) theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <div style={{ width: '100%', position: 'relative' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
