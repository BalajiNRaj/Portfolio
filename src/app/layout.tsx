import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import AppBar from "@/components/AppBar";

export const metadata = {
  title: "Balaji Nagarajan - Portfolio",
  description: "Full Stack Developer & Software Engineer - Portfolio showcasing my work and experience",
  keywords: ["portfolio", "full stack", "developer", "software engineer", "react", "node.js"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  return (
    <html lang="en">
      <body>
        <Theme
          appearance="dark"
          accentColor="blue"
          grayColor="slate"
          radius="medium"
          scaling="95%"
        >
          <div className="min-h-screen bg-background text-text">
            <AppBar />
            <main className="container mx-auto px-6 sm:px-8 md:px-10 pt-[calc(var(--header-height)+16px)] pb-8">
              {children}
            </main>
          </div>
        </Theme>
      </body>
    </html>
  );
}
