import "./globals.css";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import "../style/index.scss";
import AppProvider from "@/contextApi/AppProvider";
export const metadata = {
  title: "Soliono | HR Specialist",
  description: "Expert HR solutions for eMoney, Brokerage, and Gaming industries. Find top talent, streamline hiring, and enhance workforce management with specialized services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="Generated by create next app" />
          <meta name="robots" content="noindex, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="icon" href="/solionofavicon.ico" />
        </head>

        <body suppressHydrationWarning={true}>
          <AppProvider>{children}</AppProvider>
        </body>
      </html>
    </>
  );
}