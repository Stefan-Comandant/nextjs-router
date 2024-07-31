import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import "./global.css"

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Nextjs tutorial",
    template: "%s niggas",
  },
  description: "A shitty app",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <h1>This root layout</h1>
        <>{children}</>
      </body>
    </html>
  );
}
