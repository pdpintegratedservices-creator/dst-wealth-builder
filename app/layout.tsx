import "./globals.css";

export const metadata = {
  title: "DST Wealth Builder",
  description: "Building Real Traders. Not Dream Sellers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
