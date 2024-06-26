import { Inter } from "next/font/google";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import Navbar from "@/components/productCard/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FlowLaunch",
  description: "FlowLaunch | Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
