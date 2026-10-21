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
					encompasses a staggering audience of current and potential members, and when designing
					their new membership portal platform, every aspect needed to accommodate them.
				</Text>
				<div className="mb-2 w-full md:w-2/3">
					<ImageGallery
						images={[
							{
								src: "/images/aacad-home-logout.jpg",
								alt: "AACAD Homepage (logged out view)",
								caption:
									"The front door for Australia's Community Services, Aged Care, and Disability Support workforce, and everyone in the industries around them.",
							},
							{
								src: "/images/aacad-home.jpg",
								alt: "AACAD Homepage (logged in view)",
								caption:
									"Log in and the homepage becomes a personalised feed, with the latest from the Community and AACAD front and centre.",
							},
							{
								src: "/images/aacad-directory.jpg",
								alt: "AACAD Member Pages directory",
								caption:
									"A searchable directory where members showcase their business, or themselves as a sole trader, with every Business Page built to rank in search.",
							},
							{
								src: "/images/aacad-community-home.jpg",
								alt: "AACAD Community home",
								caption:
									"A full community platform built from the ground up: industry Groups, Reddit-style discussions, Job Listings, and Events, all under one roof.",
							},
							{
								src: "/images/aacad-post-new.jpg",
								alt: "Creating an AACAD Community post",
								caption:
									"Post as yourself, or switch hats and post as any of your Business Pages, turning every member into a brand ambassador.",
							},
							{
								src: "/images/aacad-dashboard.jpg",
								alt: "AACAD Member self service Dashboard",
								caption:
									"Total self-service: members change plans, download certificates, and manage their Business Pages, Posts, and Job Listings without ever contacting support.",
							},
							{
								src: "/images/aacad-members.jpg",
								alt: "Themis member list",
								caption:
									"Admin view: The entire membership at a glance, filterable by plan, industry, or community group.",
							},
							{
								src: "/images/aacad-member-details.jpg",
								alt: "Themis member details",
								caption:
									"Admin view: A complete member profile, with membership requirements tracked automatically so nothing slips through the cracks.",
							},
							{
								src: "/images/aacad-group-edit.jpg",
								alt: "Editing an AACAD Community Group",
								caption: "Admin view: Create and Edit Community Groups.",
							},
							{
								src: "/images/aacad-product-edit.jpg",
								alt: "Editing an AACAD Product",
								caption:
									"Admin view: A fully integrated shop, with Products wired directly to Stripe Prices for seamless checkout.",
							},
							{
								src: "/images/aacad-form-entry.jpg",
								alt: "Viewing a Form Submission",
								caption:
									"Admin view: Every form submission across the site, collected in one central inbox.",
							},
							{
								src: "/images/aacad-emails-edit.jpg",
								alt: "Themis Email Templates list",
								caption:
									"Admin view: Every email the platform sends is editable in-house, keeping communications on-brand.",
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
								alt: "ACCSC course listing page",
								caption:
									"ACCSC delivers over two dozen courses nationally, each with upfront and payment plan WooCommerce products. Each product page must meet strict government VET compliance regulations.",
							},
							{
								src: "/images/accsc-dual.jpg",
								alt: "ACCSC dual qualifications",
								caption:
									"Generally, the ACCSC WooCommerce checkout it limited to one course enrolment per checkout, however when need arose to offer dual enrolments at a discount, an override was needed.",
							},
							{
								src: "/images/accsc-providerportal.jpg",
								alt: "ACCSC providers portal",
								caption:
									"In 2025, we launched an initiative to connect with business owners to enrol their team in ACCSC courses. These businesses needed a portal to enrol learners and check progress, as well as download any available invoices.",
							},
							{
								src: "/images/accsc-providerorders.jpg",
								alt: "ACCSC providers portal orders",
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
								alt: "CPCA homepage",
								caption:
									"CPCA homepage new layout - Clean design, clear CTAs, quick access to Dashboard for existing members",
							},
							{
								src: "/images/cpca-counsellors.jpg",
								alt: "CPCA Counsellors directory",
								caption:
									"Counsellor business page directory, for users to browse certified counsellors in their area, either for members of the public to find mental health specialists, or for counsellors to find fellow peers.",
							},
							{
								src: "/images/cpca-businesspage.jpg",
								alt: "CPCA Business Page",
								caption:
									"Business pages offer detail on the counsellor. These pages are designed for SEO, to give CPCA members maximum exposure when users are searching on Google.",
							},
							{
								src: "/images/cpca-editbusinesspage.jpg",
								alt: "CPCA Business Page edit tools",
								caption: "Simple interface for editing member business pages",
							},
							{
								src: "/images/cpca-dashboard.jpg",
								alt: "CPCA members dahsboard",
								caption:
									"Full self service dashboard for members to view available resources, check their recent invoices, or change their membership level",
							},
							{
								src: "/images/cpca-learning.jpg",
								alt: "CPCA learning modules",
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

			<PageSection>
				<Heading as="h2" className="text-hgeading mb-2">
					Partners in Recovery
				</Heading>
				<Box className="mb-2">
					<Badge size="2">Next.js</Badge> <Badge size="2">TypeScript</Badge>
				</Box>
				<Text as="p" className="text-body mb-2">
					Partners in Recovery is a small, very lightweight satelite site, built for SEO and to
					direct users to counsellors through CPCA. It was built to only have a few pages with
					simile but effective CTAs.
				</Text>
				<div className="mb-2 w-full md:w-2/3">
					<ImageGallery
						images={[
							{
								src: "/images/partners-home.jpg",
								alt: "Partners in Recovery homepage",
								caption:
									"Lean by design: a fast, fully responsive layout with one job, funnelling visitors straight to CPCA counsellors where they convert.",
							},
							{
								src: "/images/partners-about.jpg",
								alt: "Partners in Recovery about page",
								caption:
									"Warm, welcoming copy and imagery to make reaching out feel easy, paired with an always-visible 'Get Support' CTA.",
							},
						]}
					/>
				</div>
				<Button asChild={true} color="teal" size="3" variant="classic">
					<Link target="_blank" href="https://partnersinrecovery.net.au">
						<FaGlobe /> Visit partnersinrecovery.net.au
					</Link>
				</Button>
			</PageSection>
		</main>
	);
}
