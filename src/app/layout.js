import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./(Components)/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen " >
        <TransitionProvider>
        {children}
        </TransitionProvider>
        </body>
    </html>
  );
}
