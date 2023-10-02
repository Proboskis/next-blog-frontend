import "./globals.css";
import {Providers} from "@/../../providers/providers";
import Navigation from "@next-blog/app/components/navigation";
import Footer from "@next-blog/app/components/footer";
import type {Metadata} from "next";

import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "IT Blog",
  description: "The blog related to IT things!"
};

export default function RootLayout({
   children
 }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigation/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}