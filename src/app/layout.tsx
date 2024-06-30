"use client";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./store";

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vazirmatn.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
