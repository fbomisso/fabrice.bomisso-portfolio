import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fabrice BOMISSO | Data Analyst",
  description: "Portfolio professionnel - Data Analyst | Power BI Â· Excel Â· Python",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var theme = localStorage.getItem('theme');
                  var accent = localStorage.getItem('accent') || 'indigo';
                  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = theme ? theme === 'dark' : systemDark;
                  if (isDark) document.documentElement.classList.add('dark');
                  if (accent !== 'indigo') document.documentElement.setAttribute('data-accent', accent);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body style={{ background: "var(--background)", color: "var(--foreground)" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9MLPR6F7Z0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9MLPR6F7Z0');
          `}
        </Script>
      </body>
    </html>
  );
}
