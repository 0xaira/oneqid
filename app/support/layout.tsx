
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}</body>
    </html>
  );
}
