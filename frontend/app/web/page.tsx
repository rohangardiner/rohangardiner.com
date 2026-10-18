import { Badge, Box, Button, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";
import AsciiText from "../components/asciiText";
import ImageGallery from "../components/imageGallery";
import PageSection from "../components/pageSection";

export default function Page() {
	return (
		<main>
			<PageSection border={false}>
				<AsciiText text="WEBSITES" isAnimated={true} />
			</PageSection>

			<PageSection>
				<Heading as="h2" className="text-hgeading mb-2">
					Australian Association of Community, Aged, and Disability Workers (AACAD)
				</Heading>
				<Box className="mb-2">
					<Badge size="2">Next.js</Badge> <Badge size="2">TypeScript</Badge>{" "}
					<Badge size="2">Prisma ORM</Badge> <Badge size="2">PostgreSQL</Badge>
				</Box>
				<Text as="p" className="text-body mb-2">
					AACAD is an organisation supporting the needs of Community Services, Aged Care, and
					Disability Support workers. They represent a vast cohort of industries and professions,
					while offering advocacy and community to all.
				</Text>
				<Text as="p" className="text-body mb-2">
					This has been my biggest project to date, and certinly the most ambitious. AACAD
					encompasses a staggering number of potential users, and when designing their new
					membership portal platform, every aspect needed to accommodate them.
				</Text>
				<div className="mb-2 w-full md:w-2/3">
					<ImageGallery
						images={[
							{
								src: "/ponderorb.jpg",
								alt: "Default",
								caption: "Default img",
							},
						]}
					/>
				</div>
				<Text as="p" className="text-body mb-2">
					Findings along the way
				</Text>
				<Button asChild={true} color="teal" size="3" variant="classic">
					<Link target="_blank" href="https://aacad.com.au">
						<FaGlobe /> Visit aacad.com.au
					</Link>
				</Button>
			</PageSection>

			<PageSection>
				<Heading as="h2" className="text-hgeading mb-2">
					Australian College of Community Services and Care (ACCSC)
				</Heading>
				<Box className="mb-2">
					<Badge size="2">WordPress</Badge> <Badge size="2">PHP</Badge>{" "}
					<Badge size="2">Google Tag Manager</Badge> <Badge size="2">Google Analytics</Badge>
				</Box>
				<Text as="p" className="text-body mb-2">
					ACCSC is a nationally recognised provider of Vocational Education and Training, operating
					as part of the National College of Australia, and processing the majority of NCOA's
					students each year. The ACCSC website is built in WordPress, using core plugins such as
					WooCommerce, Elementor Page Builder, and Formidable Forms. At each interaction, Google
					Analytics and Microsoft Clarity monitor user actions for the business web and marketing
					team to make continual improvements.
				</Text>
				<Text as="p" className="text-body mb-2">
					While working on the ACCSC website, and its integrations I was lucky enough to oversee the
					introduction of dual enrolments, third party provider enrolments, as well as several large
					scale overhauls to the WordPress codebase which vastly improved performance, data
					handling, and aesthetics.
				</Text>
				<div className="mb-2 w-full md:w-2/3">
					<ImageGallery
						images={[
							{
								src: "/images/accsc-home.jpg",
								alt: "ACCSC.com.au homepage",
								caption: "The Australian College of Community Services and Care website",
							},
							{
								src: "/images/accsc-courses.jpg",
								alt: "Default",
								caption:
									"ACCSC delivers over two dozen courses nationally, each with upfront and payment plan WooCommerce products. Each product page must meet strict government VET compliance regulations.",
							},
							{
								src: "/images/accsc-dual.jpg",
								alt: "Default",
								caption:
									"Generally, the ACCSC WooCommerce checkout it limited to one course enrolment per checkout, however when need arose to offer dual enrolments at a discount, an override was needed.",
							},
							{
								src: "/images/accsc-providerportal.jpg",
								alt: "Default",
								caption:
									"In 2025, we launched an initiative to connect with business owners to enrol their team in ACCSC courses. These businesses needed a portal to enrol learners and check progress, as well as download any available invoices.",
							},
							{
								src: "/images/accsc-providerorders.jpg",
								alt: "Default",
								caption: "Provider portal order and invoice history",
							},
						]}
					/>
				</div>
				<Text as="p" className="text-body mb-2">
					Findings along the way
				</Text>
				<Button asChild={true} color="teal" size="3" variant="classic">
					<Link target="_blank" href="https://accsc.com.au">
						<FaGlobe /> Visit accsc.com.au
					</Link>
				</Button>
			</PageSection>

			<PageSection>
				<Heading as="h2" className="text-hgeading mb-2">
					Certified Practising Counsellors Australia (CPCA)
				</Heading>
				<Box className="mb-2">
					<Badge size="2">WordPress</Badge> <Badge size="2">PHP</Badge>{" "}
					<Badge size="2">Google Tag Manager</Badge> <Badge size="2">Google Analytics</Badge>
				</Box>
				<Text as="p" className="text-body mb-2">
					CPCA is a grassroots association for practising Counsellors and associated Mental Health
					professionals to get certified, find community, and be represented at state and federal
					levels through the association's advocacy efforts.
				</Text>
				<Text as="p" className="text-body mb-2">
					About my work
				</Text>
				<div className="mb-2 w-full md:w-2/3">
					<ImageGallery
						images={[
							{
								src: "/images/cpca-home.jpg",
								alt: "Default",
								caption:
									"CPCA homepage new layout - Clean design, clear CTAs, quick access to Dashboard for existing members",
							},
							{
								src: "/images/cpca-counsellors.jpg",
								alt: "Default",
								caption:
									"Counsellor business page directory, for users to browse certified counsellors in their area, either for members of the public to find mental health specialists, or for counsellors to find fellow peers.",
							},
							{
								src: "/images/cpca-businesspage.jpg",
								alt: "Default",
								caption:
									"Business pages offer detail on the counsellor. These pages are designed for SEO, to give CPCA members maximum exposure when users are searching on Google.",
							},
							{
								src: "/images/cpca-editbusinesspage.jpg",
								alt: "Default",
								caption: "Simple interface for editing member business pages",
							},
							{
								src: "/images/cpca-dashboard.jpg",
								alt: "Default",
								caption:
									"Full self service dashboard for members to view available resources, check their recent invoices, or change their membership level",
							},
							{
								src: "/images/cpca-learning.jpg",
								alt: "Default",
								caption:
									"Learning resources hosted directly on the website via SCORM packages, authored in Articulate",
							},
						]}
					/>
				</div>
				<Text as="p" className="text-body mb-2">
					Findings along the way
				</Text>
				<Button asChild={true} color="teal" size="3" variant="classic">
					<Link target="_blank" href="https://cpcaus.com.au">
						<FaGlobe /> Visit cpcaus.com.au
					</Link>
				</Button>
			</PageSection>
		</main>
	);
}
