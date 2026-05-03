import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TabVault – Auto-backup & Restore Browser Tab Sessions",
  description: "Automatically saves all open tabs every 5 minutes. One-click restore from any point in time. Never lose your browser session again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0a2bab3b-8b4f-4e81-9a71-f775771b3cde"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
