// "use client";

import "@/app/ui/global.css";
import RecoilContextProvider from "./recoilContextProvider";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RecoilContextProvider>{children}</RecoilContextProvider>
    </html>
  );
}
