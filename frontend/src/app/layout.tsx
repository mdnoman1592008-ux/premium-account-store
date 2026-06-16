import "./globals.css";

export const metadata = {
  title: "Premium Account Store",
  description:
    "Premium Apps & Subscription Store"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
