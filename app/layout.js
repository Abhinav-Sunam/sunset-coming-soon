import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://sunsetsessions.com"),
  title: "Sunset Sessions | Coming Soon",
  description:
    "Tickets for DASILING will be live soon. Join the community to be the first to know.",
  openGraph: {
    title: "Sunset Sessions | Coming Soon",
    description:
      "Tickets for DASILING will be live soon. Join the community to be the first to know.",
    type: "website",
    images: ["/background.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
