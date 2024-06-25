import Link from "next/link";
import "./globals.css";
import NavigationPanel from "../components/navigationPanel";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {" "}
        <NavigationPanel />
        {children}
      </body>
    </html>
  );
}
