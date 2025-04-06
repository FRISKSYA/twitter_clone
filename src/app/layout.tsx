import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twitter clone",
  description: "A clone of Twitter website built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='flex justify-between max-w-6xl mx-auto'>
          <div className='hiden sm:inline border-r h-screen'>
            <Sidebar />
          </div>
          <div>{children}</div>
          <div className='lg:flex-col p-3 h-screen border-l hidden lg:flex
          w-[24rem]
          '>
            <div className='sticky top-0 py-2'>
              <input 
                type='text'
                placeholder='Search' 
                className='bg-gray-100 border border-gray-200 rounded-3xl
                text-sm w-full px-4 py-2'
              ></input>
            </div>
            <News />
          </div>
        </div>  
      </body>
    </html>
  );
}
