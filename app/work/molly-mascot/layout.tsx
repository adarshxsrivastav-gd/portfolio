import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Molly — A Mascot System for Gyandhara | Adarsh Srivastav",
  description:
    "How a single mascot brief became a four-persona brand character system for Gyandhara's farmer audience.",
};

export default function MollyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
