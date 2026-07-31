import type { Metadata } from "next";
import "./globals.css";
import { MotionObserver } from "./MotionObserver";

export const metadata: Metadata = {
  title: {
    default: "Open 4 Peer Review · Team Mask’d",
    template: "%s · Team Mask’d",
  },
  description:
    "The design and development story behind the Open 4 Peer Review Hub.",
  icons: {
    icon: "/favicon-owl-blue-v3.png",
    shortcut: "/favicon-owl-blue-v3.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('motion-ready')",
          }}
        />
      </head>
      <body>
        <MotionObserver />
        {children}
      </body>
    </html>
  );
}
