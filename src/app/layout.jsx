import { Geist, Geist_Mono, Poppins, } from "next/font/google";
import localFont from "next/font/local"
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"]
})

export const fontBangla = localFont({
  src: "../../src/fonts/mayaboti-normal.ttf",

})

export const metadata = {
  metadataBase: new URL("https://hero-kidz-steel.vercel.app"),

  title: {
    default: "Hero Kidz | Fun & Educational Toys for Kids",
    template: "%s | Hero Kidz"
  },

  description:
    "Hero Kidz toy store — explore fun, safe and educational toys for kids of all ages!",

  openGraph: {
    type: "website",
    url: "https://hero-kidz-steel.vercel.app",
    title: "Hero Kidz | Toys for Kids",
    description: "Discover fun and educational kid-friendly toys at Hero Kidz!",
    siteName: "Hero Kidz",
    images: [
      {
        url: "https://i.ibb.co/your-homepage-preview.jpg",  // 🔁 REPLACE
        width: 1200,
        height: 630,
        alt: "Hero Kidz homepage preview",
      },
      {
        url: "https://i.ibb.co/your-product-preview.jpg",   // 🔁 REPLACE
        width: 1200,
        height: 630,
        alt: "Hero Kidz product preview",
      }
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hero Kidz | Toys for Kids",
    description: "Fun, safe & educational toys for kids at Hero Kidz!",
    images: [
      "https://i.ibb.co/your-homepage-preview.jpg",  // 🔁 REPLACE
    ],
  },

  icons: {
    icon: "https://i.ibb.co/your-logo.png",   // 🔁 REPLACE with direct logo URL
    apple: "/apple-touch-icon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        <NextAuthProvider>

          <header className="py-2 md:w-11/12 mx-auto">
            <Navbar></Navbar>
          </header>

          <main className="py-2 px-2 md:px-0 md:w-11/12 mx-auto min-h-[calc(100vh-302px)]">
            {children}
          </main>

          <footer>
            <Footer></Footer>
          </footer>

        </NextAuthProvider>
      </body>
    </html>

  );
}
