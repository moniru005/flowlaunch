import { Inter } from "next/font/google";
import "./globals.css";
import "@smastrom/react-rating/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FlowLaunch",
  description: "FlowLaunch | Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
