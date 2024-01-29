import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Polleria America Mosconi",
  description: "Veni y proba el mejor pollo en General Enrique Mosconi. Una polleria familiar sirviendo el mejor pollo a los mejores precios",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
