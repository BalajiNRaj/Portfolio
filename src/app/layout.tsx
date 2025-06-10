import { Theme, ThemePanel } from "@radix-ui/themes";
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
}) {
  return (
    <html lang="en">
      <body>
        <Theme
          appearance="dark"
          accentColor="blue"
          grayColor="slate"
          radius="large"
          scaling="95%"
          panelBackground="solid"
        >
          <AppBar />
          {children}
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
