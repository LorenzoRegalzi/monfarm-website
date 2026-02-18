import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body style={{margin: 0}}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
