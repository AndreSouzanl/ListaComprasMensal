import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Lista de compras Mensal",
  description: "Projeto de Lista de Compras Mensal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
