import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { AppbarClient } from "../components/Dashboard/AppbarClient";
import { ThemeProvider } from "../components/theme-provider"
import { Inter as FontSans } from "next/font/google"
const inter = Inter({ subsets: ["latin"] });
import { cn } from "../lib/utils"
export const metadata: Metadata = {
  title: "Wallet",
  description: "Simple wallet app",
};
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers>
    
        <body className={ cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )} >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <AppbarClient/>
            {children}
          </ThemeProvider>
        </body>
        
      </Providers>
    </html>
  );
}
// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { Providers } from "../provider";
// import { AppbarClient } from "../components/Dashboard/AppbarClient";
// import { ThemeProvider } from "next-themes";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Wallet",
//   description: "Simple wallet app",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }): JSX.Element {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Providers>
//         <ThemeProvider
//             attribute="class"
//             defaultTheme="system"
//             enableSystem
//             disableTransitionOnChange
//           >
//           <div className="min-w-screen min-h-screen bg-[#ebe6e6]">
//             <AppbarClient />
//             {children}
//           </div>
//           </ThemeProvider>
//         </Providers>
//       </body>
//     </html>
//   );
// }