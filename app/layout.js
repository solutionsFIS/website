import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SOLUTIONS - For Information Systems",
  description: "Since our founding in 1996, Solutions has been a beacon of excellence in the hospitality software industry. With a rich history spanning over two decades, we have earned the trust of over 500 businesses worldwide, becoming their go-to partner for all their software needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
