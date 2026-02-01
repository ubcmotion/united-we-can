import type { Metadata } from "next"
import localFont from "next/font/local"
import NavigationBar from './components/Navbar'
import "tailwindcss/tailwind.css";
import "./globals.css";
import "./styles/tables.css";
import TopBar from './components/TopBar';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

const interFont = localFont({
  src: "./fonts/Inter-VariableFont_slnt,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://united-we-can-67c72.web.app"),
  title: {
    default: "United We Can",
    template: "%s | United We Can",
  },
  description: "United We Can is a Vancouver-based non-profit creating economic opportunities through environmental initiatives for the Downtown Eastside community. Our scheduling app streamlines recycling pickups, empowering truck drivers and businesses to efficiently manage routes, track collections, and support a cleaner, greener future. Join us in building a sustainable community, one container at a time.",
  keywords: ["keyword1", "keyword2", "keyword3"], // relevant keywords
  openGraph: {
    title: "United We Can",
    description: "United We Can is a Vancouver-based non-profit creating economic opportunities through environmental initiatives for the Downtown Eastside community. Our scheduling app streamlines recycling pickups, empowering truck drivers and businesses to efficiently manage routes, track collections, and support a cleaner, greener future. Join us in building a sustainable community, one container at a time.",
    url: "https://united-we-can-67c72.web.app/", // website URL
    siteName: "United We Can",
    images: [
      {
        url: "url.ca", // opengraph image URL
        width: 1200,
        height: 630,
        alt: "United We Can",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // Favicon
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`bg-primary ${geistSans.variable} ${geistMono.variable} ${interFont.variable} antialiased`}>
        <TopBar />
        <div className="flex min-h-screen w-screen">
          <NavigationBar/>
          <main className="flex-1 p-6 grow max-w-[calc(100%-6rem)]">{children}</main>
        </div>
      </body>
    </html>
  )
}
