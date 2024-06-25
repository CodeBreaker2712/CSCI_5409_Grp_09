import React from "react";
import "./globals.css";
import NavigationPanel from "../components/navigationPanel";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body style={{ overflowX: "hidden", overflowY: "auto", height: "100vh" }}>
        <div
          style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000 }}
        >
          <NavigationPanel />
        </div>
        <div style={{ paddingTop: "60px" }}>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
