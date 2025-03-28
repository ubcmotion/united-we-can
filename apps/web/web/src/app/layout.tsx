import type { Metadata } from "next"
import localFont from "next/font/local"
import NavigationBar from './components/navbar'

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
  // manifest: "/site.webmanifest", // Web app manifest
  themeColor: "#ffffff", // Theme color for PWA
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="layout">
          <NavigationBar />
        </div>
      </body>
    </html>
  )
}