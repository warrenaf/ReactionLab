import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppShell from "./app-shell";
import { UiProvider } from "./ui-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Reaction Lab Games",
    template: "%s | Reaction Lab Games",
  },
  description:
    "Reaction Lab Games is an indie game studio creating fast, skill-based browser and cross-platform games, including Rapid Path and upcoming releases.",
  applicationName: "Reaction Lab Games",
  openGraph: {
    title: "Reaction Lab Games",
    description:
      "Discover Reaction Lab Games: fast, skill-based games you can play now, plus upcoming titles in development.",
    siteName: "Reaction Lab Games",
    type: "website",
    images: [
      {
        url: "/ReactionLabLogo.png",
        alt: "Reaction Lab Games logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Reaction Lab Games",
    description:
      "Play Rapid Path and explore upcoming games from Reaction Lab Games.",
    images: ["/ReactionLabLogo.png"],
  },
  icons: {
    icon: "/ReactionLabLogo.png",
    shortcut: "/ReactionLabLogo.png",
    apple: "/ReactionLabLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <UiProvider>
          <AppShell>{children}</AppShell>
        </UiProvider>
      </body>
    </html>
  );
}
