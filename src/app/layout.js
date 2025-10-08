import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"
import Footer from "@/componets/Footer"


export const metadata = {
  title: "Ana livia",
  description: "blablabla",
  charset: 'UTF-8',
  author: 'Ana lívia Kohl Assis da Silva',
  keywords: 'Next.js, React, JavaScript, HTML, CSS'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header> </Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
