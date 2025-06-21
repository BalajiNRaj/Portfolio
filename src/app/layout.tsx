import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import AppBar from "@/components/AppBar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { RadixThemeWrapper } from "@/components/RadixThemeWrapper";
import ThemeInitializer from "@/components/ThemeInitializer";

export const metadata = {
  title: "Balaji Nagarajan - Portfolio",
  description: "Full Stack Developer & Software Engineer - Portfolio showcasing my work and experience",
  keywords: ["portfolio", "full stack", "developer", "software engineer", "react", "node.js"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* No inline script - using ThemeInitializer component instead */}
      </head>
      <body className="theme-body">
        <ThemeInitializer />
        <ThemeProvider>
          <RadixThemeWrapper>
            <div className="min-h-screen text-text">
              <AppBar />
              <main className="container mx-auto pt-[calc(var(--header-height)+16px)] pb-8">
                {children}
              </main>
            </div>
          </RadixThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
