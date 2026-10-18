import { Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import AsciiText from "./components/asciiText";
import PageSection from "./components/pageSection";

export default function Home() {
	return (
		<main>
			<PageSection border={false}>
				<AsciiText text="HELLO WORLD" isAnimated={true} />
			</PageSection>

			<PageSection>
				<Heading as="h1" className="mb-4">
					Welcome!
				</Heading>
				<Text as="p" className="mb-4">
					I'm Rohan - a web designer and developer based in Brisbane, Australia. I have a deep
					history in software development, game design, graphic design, and creative writing. What
					began as an early fascination with how the web works has grown into a dedicated practice
					of building intuitive web applications, oddball video games, and creative software
					solutions. Browse through this portfolio of projects to explore my work, technical skills,
					and overall design philosophy.
				</Text>

				<Text as="p" className="mb-4">
					The internet is for everyone!
				</Text>

				<Text as="span" className="block">
					<ol className="list-decimal list-inside">
						<li>
							<Link href="/web" className="text-link underline">
								Websites
							</Link>
						</li>
						<li>
							<Link href="/games" className="text-link underline">
								Games
							</Link>
						</li>
						<li>
							<Link href="/writing" className="text-link underline">
								Writing
							</Link>
						</li>
						<li>
							<Link href="/code" className="text-link underline">
								Code
							</Link>{" "}
							(it's mostly WordPress Plugins)
						</li>
					</ol>
				</Text>
			</PageSection>
		</main>
	);
}
