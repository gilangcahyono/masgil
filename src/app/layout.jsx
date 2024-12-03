import "./globals.css";

export const metadata = {
  title: "Gilang Cahyono",
  description: "My Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
