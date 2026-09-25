import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import CursorSpotlight from "@/components/ui/CursorSpotlight";
import Toast from "@/components/ui/Toast";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sokratix — Mohammed Fardin — UI/UX Designer",
  description:
    "Question-led UI/UX Designer. Sokratix turns better questions into meaningful digital experiences across healthcare and recruitment products.",
  keywords: [
    "UI/UX Designer",
    "Product Design",
    "UX Research",
    "Mohammed Fardin",
    "Sokratix",
    "Portfolio",
  ],
  openGraph: {
    title: "Sokratix — Mohammed Fardin — UI/UX Designer",
    description: "Design begins with better questions.",
    siteName: "Sokratix",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-ink text-white antialiased">
        <CursorSpotlight />
        {children}
        <Toast />
      </body>
    </html>
  );
}