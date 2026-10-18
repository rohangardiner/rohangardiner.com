"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import CodeIcon from "./iconCode";
import GameIcon from "./iconGame";
import GithubIcon from "./iconGithub";
import HomeIcon from "./iconHome";
import LinkedinIcon from "./iconLinkedin";
import WebsiteIcon from "./iconWebsite";
import WritingIcon from "./iconWriting";

interface NavItem {
	name: string;
	href: string;
	icon: React.ComponentType<{ className?: string }>;
	current?: boolean;
}

const navigation: NavItem[] = [
	{ name: "Home", href: "/", icon: HomeIcon, current: true },
	{ name: "Web", href: "/web", icon: WebsiteIcon, current: false },
	{ name: "Games", href: "/games", icon: GameIcon, current: false },
	{ name: "Writing", href: "/writing", icon: WritingIcon, current: false },
	{ name: "Code", href: "/code", icon: CodeIcon, current: false },
];

const links: NavItem[] = [
	{ name: "GitHub", href: "https://github.com/rohangardiner", icon: GithubIcon },
	{ name: "LinkedIn", href: "https://www.linkedin.com/in/rohan-gardiner/", icon: LinkedinIcon },
];

export default function SideBar() {
	// Check the current pathname to identify current nav item
	const pathname = usePathname();
	const isActive = (href: string) =>
		href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

	return (
		<>
			{/* --- DESKTOP SIDEBAR --- */}
			<div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
				<div className="flex grow flex-col gap-y-5 overflow-y-auto bg-sidebar border-r border-white/5 px-6 pb-4">
					<div className="flex h-16 shrink-0 items-center text-sidebar-foreground font-bold">
						<Image src="/r_logo.png" alt="Logo" width={48} height={48} className="mr-2" />
						Rohan Gardiner
					</div>
					<nav className="flex flex-1 flex-col">
						<ul role="list" className="flex flex-1 flex-col gap-y-7">
							<li>
								<ul role="list" className="-mx-2 space-y-1">
									{navigation.map((item) => (
										<NavItem
											key={item.name}
											item={item}
											current={isActive(item.href)} // Pass the dynamic state
										/>
									))}
								</ul>
							</li>
							<li>
								<div className="text-xs font-semibold leading-6 text-sidebar-muted">Links</div>
								<ul role="list" className="-mx-2 mt-2 space-y-1">
									{links.map((link) => (
										<NavItem key={link.name} item={link} />
									))}
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</div>

			{/* --- MOBILE BOTTOM NAV --- */}
			<div className="fixed bottom-0 z-50 w-full bg-sidebar border-t border-white/10 lg:hidden">
				<div className="flex justify-around items-center h-16 px-2">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className={`flex flex-col items-center justify-center flex-1 min-w-0 py-1 ${
								isActive(item.href) ? "text-brand" : "text-sidebar-muted"
							}`}
						>
							<item.icon className="h-6 w-6" />
							<span className="text-[10px] mt-1 truncate">{item.name}</span>
						</a>
					))}
				</div>
			</div>
		</>
	);
}

// Reusable Nav Component to keep code DRY
function NavItem({ item, current }: { item: NavItem; current?: boolean }) {
	const isCurrent = current ?? item.current ?? false;
	return (
		<li>
			<a
				href={item.href}
				className={`group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 ${
					isCurrent
						? "bg-brand/15 text-brand"
						: "text-sidebar-muted hover:bg-white/5 hover:text-sidebar-foreground"
				}`}
			>
				<item.icon className="h-6 w-6 shrink-0" />
				{item.name}
			</a>
		</li>
	);
}
