import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "ForgeHire",
  icons: {
    icon: "/favicon.png",
  },
  description: "ForgeHire",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-screen max-w-full flex flex-col bg-white text-black">
        <Navbar />
        <main className="flex-1 max-w-[1600px] mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
