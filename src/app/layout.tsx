import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import AppBar from "@/components/AppBar";
import { ThemeProvider } from "@/contexts/ThemeContext";

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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'light' || savedTheme === 'dark') {
                    document.documentElement.setAttribute('data-theme', savedTheme);
                    document.documentElement.style.colorScheme = savedTheme;
                  } else {
                    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    document.documentElement.setAttribute('data-theme', systemTheme);
                    document.documentElement.style.colorScheme = systemTheme;
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                  document.documentElement.style.colorScheme = 'dark';
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Theme
            appearance="inherit"
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
        </ThemeProvider>
      </body>
    </html>
  );
}
