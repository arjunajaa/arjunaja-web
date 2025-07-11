import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google"; // Import Inter_Tight
import "./globals.css";
import Footer from "@/components/Footer"; // Import the Footer component

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({ // Initialize Inter_Tight
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"] // Specify weights if needed, adjust as per your design
});

export const metadata: Metadata = {
  title: "Arju Naja", 
  icons: {
    icon: './favicon.png', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Add interTight.variable to the body className */}
      <body className={`${inter.variable} ${interTight.variable} antialiased`}>
        {children}
        <Footer /> {/* Add the Footer component here */}
      </body>
    </html>
  );
}
