import "~/styles/globals.css";

import { ThemeProvider } from "next-themes";
import { Inter, Roboto_Mono } from "next/font/google";
import Header from "~/components/page-header";
import { cn } from "~/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "optional",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "optional",
});

export const metadata = {
  title: "Dakota Smith",
  description: "Sitecore Developer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <body className={`${inter.variable} ${roboto_mono.variable}`}>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
