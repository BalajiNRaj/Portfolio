import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export const metadata = {
  title: "Balaji Nagarajan",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Theme appearance="light">{children}</Theme>
      </body>
    </html>
  );
}
