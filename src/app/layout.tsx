import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GlobalLayout from "@/components/global-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} prose max-w-none w-full`}>
				<GlobalLayout>
					<div className="p-4">{children}</div>
				</GlobalLayout>
			</body>
		</html>
	);
}
