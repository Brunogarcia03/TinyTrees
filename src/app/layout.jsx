import { Playfair } from "next/font/google";
import "./globals.css";

const playfair = Playfair({
  weight: ["300", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "The art of Tiny Trees",
  description:
    "Discover the serene and captivating world of Bonsai trees. Learn the delicate art of cultivating tiny trees and transform your spaces into tranquil landscapes.",
  metadataBase: new URL("http://localhost:3000/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "http://localhost:3000/",
    site_name: "Tiny Trees",
    title: "Tiny Trees - The Art of Bonsai",
    description:
      "Discover the serene and captivating world of Bonsai trees. Learn the delicate art of cultivating tiny trees and transform your spaces into tranquil landscapes.",
    images: [
      {
        url: "/images/tiny-trees-og-image.jpg",
        width: 800,
        height: 600,
        alt: "Tiny Trees - The Art of Bonsai",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={playfair.className}>{children}</body>
    </html>
  );
}
