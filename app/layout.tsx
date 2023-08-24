import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Magic Translate React Example",
  description: "Sample React App using Magic Translate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-8 gap-8 flex flex-col justify-between min-h-screen max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
