import "./globals.css";

export const metadata = {
  title: "My PortFolio",
  description: "Information regarding my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-700">
        {children}
      </body>
    </html>
  );
}
