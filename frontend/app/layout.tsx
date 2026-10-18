import type { Metadata } from "next";
import "./globals.css";
import SideBar from "./components/sidebar";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";
import { Courier_Prime } from 'next/font/google';

export const metadata: Metadata = {
	title: "Rohan Gardiner",
	description: "Rohan Gardiner's website!",
	appleWebApp: { title: "Rohan Gardiner" },
};

const courierPrime = Courier_Prime({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-courier-prime',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${courierPrime.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<body className="min-h-full">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Theme hasBackground={false}>
						<SideBar />

						<div className="lg:ml-64 pb-16 lg:pb-0">
							{/* <HeaderBar /> */}
							<main className="p-2">
								{children}
							</main>
						</div>
					</Theme>
				</ThemeProvider>
			</body>
		</html>
	);
}
