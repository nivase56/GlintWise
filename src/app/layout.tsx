import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "@/Components/Common/Navbar";
import WhatsappButton from "@/Components/Common/whatsappFloat";



const PoppinsFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400","500", "600"],
});

export const metadata: Metadata = {
  title: "Glintwise | Doorstep Car Wash in Chennai at just ₹25",
  description: "Glintwise provides doorstep car wash services in Chennai for just 25 rupees per day. Experience a professional, eco-friendly clean at your convenience, without stepping out of your home or office.",
  openGraph: {
    images: "/Images/meta_image.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={PoppinsFont.className}>
      <Navbar />
        {children}
        <WhatsappButton/>
        </body>
      
    </html>
  );
}
