import { Badge, Box, Button, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import AsciiText from "../components/asciiText";
import ImageGallery from "../components/imageGallery";
import PageSection from "../components/pageSection";

export default function Page() {
	return (
		<main>
			<PageSection border={false}>
				<AsciiText text="CODE" isAnimated={true} />
			</PageSection>

			<PageSection>
				<Heading as="h2" className="text-heading mb-2">
					Career Quiz Plugin
				</Heading>
				<Box className="mb-2">
					<Badge size="2">WordPress</Badge> <Badge size="2">PHP</Badge>
				</Box>
				<Text as="p" className="text-body mb-2">
					WordPress plugin to create and customise a quiz to find a user's best suited career.
					Features cusomisable questions, outcomes, and answer weighting via the Admin Dashboard.
				</Text>
				<Text as="p" className="text-body mb-2">
					This was part of an initiative for ACCSC.com.au which unfortunately diodn't go ahead but
					was still an fun project to work on. Naturally similar plugins exist out there, but
					seemingly none that would allow for weighting answers - Every plugin I found would
					correlate one answer to one outcome, which didn't allow for more nuanced answers. This
					plugin solves that issue by giving each answer a float value when linking a certain
					outcome.
				</Text>
				<div className="mb-2 w-full md:w-2/3">
					<ImageGallery
						images={[
							{
								src: "/images/quiz-page.jpg",
								alt: "Default",
								caption: "Default",
							},
							{
								src: "/images/quiz-settings.jpg",
								alt: "Default",
								caption: "Default",
							},
						]}
					/>
				</div>
				<Text as="p" className="text-body mb-2">
					Findings along the way
				</Text>
				<Button asChild={true} color="teal" size="3" variant="classic">
					<Link href="https://github.com/rohangardiner/quiz-plugin">
						<FaGithub /> View on GitHub
					</Link>
				</Button>
			</PageSection>

			<PageSection>
				<Heading as="h2" className="text-heading mb-2">
					Display Ads
				</Heading>
				<Box className="mb-2">
					<Badge size="2">WordPress</Badge> <Badge size="2">PHP</Badge>{" "}
					<Badge size="2">Google Ads</Badge>
				</Box>
				<Text as="p" className="text-body mb-2">
					This is a WordPress Plugin to show Google network Display style ads on your WordPress
					site. Used as part of a networked websites project, this allows for simple non-invasive
					popover images to appear which the user can dismiss.
				</Text>
				<Text as="p" className="text-body mb-2">
					This was part of an initiative for ACCSC.com.au which unfortunately diodn't go ahead but
					was still an fun project to work on. Naturally similar plugins exist out there, but
					seemingly none that would allow for weighting answers - Every plugin I found would
					correlate one answer to one outcome, which didn't allow for more nuanced answers. This
					plugin solves that issue by giving each answer a float value when linking a certain
					outcome.
				</Text>
				<div className="mb-2 w-full md:w-2/3">
					<ImageGallery
						images={[
							{
								src: "/images/quiz-page.jpg",
								alt: "Default",
								caption: "Default",
							},
							{
								src: "/images/quiz-settings.jpg",
								alt: "Default",
								caption: "Default",
							},
						]}
					/>
				</div>
				<Text as="p" className="text-body mb-2">
					Findings along the way
				</Text>
				<Button asChild={true} color="teal" size="3" variant="classic">
					<Link href="https://github.com/rohangardiner/ncoa-ads">
						<FaGithub /> View on GitHub
					</Link>
				</Button>
			</PageSection>

			<PageSection>
				<Heading as="h2" className="text-heading mb-2">
					Returning Visitor Coupon
				</Heading>
				<Box className="mb-2">
					<Badge size="2">WordPress</Badge> <Badge size="2">PHP</Badge>{" "}
					<Badge size="2">WooCommerce</Badge>
				</Box>
				<Text as="p" className="text-body mb-2">
					WordPress Plugin to set a cookie and offer returning visitors (or those that browse
					multiple pages) a discount to convince them to make a purchase.
				</Text>
				<Text as="p" className="text-body mb-2">
					Created as a Marketing effort to A/B test website visitors and find what makes each
					customer persona convert, this Plugin was designed to offer a 10% discount after repeated
					page loads, using a cookie that persisted through sessions. Creates a WooCommerce coupon,
					values are set in the Plugin code, so changes would be lost during updates. If I return to
					developing this, or if you are interested in forking your own version, it will need a
					Dashboard Admin settings page to control coupon meta values.
				</Text>
				<Button asChild={true} color="teal" size="3" variant="classic">
					<Link href="https://github.com/rohangardiner/returning-visitor-coupon">
						<FaGithub /> View on GitHub
					</Link>
				</Button>
			</PageSection>

			<PageSection>
				<Heading as="h2" className="text-heading mb-2">
					Art Generator
				</Heading>
				<Box className="mb-2">
					<Badge size="2">JavaScript</Badge>
				</Box>
				<Text as="p" className="text-body mb-2">
					This one's more for sentimental reasons (and to keep me humble) - one of my earliest ever
					projects I thought worthy of committing to GitHub. A very simple html canvas, populated by
					random coloured squares. Designed to be run in{" "}
					<Link href="https://jsfiddle.net">JSFiddle</Link>, I barely grasped the concept of an IDE,
					but with what I thought was a novel idea and the basics of element.innerHTML, I was
					unstoppable. My attempt at the kind of art I thought a computer might make.
				</Text>
				<Text as="p" className="text-body mb-2">
					Little did I know that just a few months after posting this repo, Open AI would publish
					the first version of DALL-E, and suddenly my quirky little idea of generating computer art
					would seem very, very small.
				</Text>
				<div className="mb-2 w-full md:w-2/3">
					<ImageGallery
						images={[
							{
								src: "/images/art-generator.jpg",
								alt: "Default",
								caption: "Default",
							},
						]}
					/>
				</div>
				<Button asChild={true} color="teal" size="3" variant="classic">
					<Link href="https://github.com/rohangardiner/art-generator">
						<FaGithub /> View on GitHub
					</Link>
				</Button>
			</PageSection>
		</main>
	);
}
