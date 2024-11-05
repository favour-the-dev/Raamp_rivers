import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
import "./globals.css";


export const metadata: Metadata = {
  title: "Home - RAAMP Rivers State",
  description: "The Federal Government of Nigeria has initiated the Rural Access and Agricultural Marketing Project(RAAMP). It is a third-generation rural access project. It aims to strengthen the institutional and financing base for sustainable management of state and rural network.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <main>
          <Navbar/>
          {children}
          <NewsLetter/>
          <Footer/>
        </main>
      </body>
    </html>
  );
}
