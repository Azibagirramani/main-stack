import Chakra from "src/theme";
import DashBoardContainer from "src/components/elements/_dashboard_container";

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mainstack - Kelvin Mansi",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/sassy-datepicker/dist/styles.css"
        />
      </head>
      <body style={{ backgroundColor: "white" }}>
        <Chakra>
          <DashBoardContainer>{children}</DashBoardContainer>
        </Chakra>
      </body>
    </html>
  );
}
