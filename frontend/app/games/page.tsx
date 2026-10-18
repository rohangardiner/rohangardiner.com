import { Badge, Box, Button, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";
import { FaDownload } from "react-icons/fa";
import AsciiText from "../components/asciiText";
import ImageGallery from "../components/imageGallery";
import PageSection from "../components/pageSection";

export default function Page() {
	return (
		<main>
			<PageSection border={false}>
				<AsciiText text="GAMES" isAnimated={true} />
			</PageSection>

			<PageSection>
				<Heading as="h2" className="text-hgeading mb-2">
					Escape from Tech Support
				</Heading>
				<Box className="mb-2">
					<Badge size="2">Godot</Badge> <Badge size="2">GDScript</Badge>{" "}
					<Badge size="2">Blender</Badge>
				</Box>
				<Text as="p" className="text-body mb-2">
					Your car broke down in the middle of a dark, silent forest. You just need to fix the
					engine and get out. Then a voice echoes through the trees, freezing you to the bone: "How
					do I get in to the Facebook?!!"
				</Text>
				<Text as="p" className="text-body mb-2">
					Dodge the horrors of endless troubleshooting and fix your ride before you become a
					full-time unpaid helpdesk.
				</Text>
				<Text as="p" className="text-body mb-2">
					Survival Horror has a new face, and it forgot its Apple ID password.
				</Text>
				<div className="mb-2 w-full md:w-1/2">
					<ImageGallery
						images={[
							{
								src: "/images/escape-title.jpg",
								alt: "Default",
							},
							{
								src: "/images/escape-battery.jpg",
								alt: "Default",
							},
							{
								src: "/images/escape-stalker.jpg",
								alt: "Default",
							},
							{
								src: "/images/escape-flares.jpg",
								alt: "Default",
							},
							{
								src: "/images/escape-godot.jpg",
								alt: "Default",
							},
						]}
					/>
				</div>
				<Text as="p" className="text-body mb-2">
					The game is still in development, so if you run into any issues please let me know.
				</Text>
				<Button asChild={true} color="teal" size="3" variant="classic">
					<Link
						target="_blank"
						href="https://assets.rohangardiner.com/games/Escape%20from%20Tech%20Support.zip"
					>
						<FaDownload /> Download a demo
					</Link>
				</Button>
			</PageSection>

			<PageSection>
				<Heading as="h2" className="text-hgeading mb-2">
					Pit Game
				</Heading>
				<Box className="mb-2">
					<Badge size="2">Godot</Badge> <Badge size="2">GDScript</Badge>{" "}
					<Badge size="2">Aseprite</Badge>
				</Box>
				<Text as="p" className="text-body mb-2">
					This was a quick weekend project to replicate the "It's the pits" minigame from Super
					Mario Party:{" "}
					<Link target="_blank" href="https://www.youtube.com/watch?v=Yplh220Pp1M">
						https://www.youtube.com/watch?v=Yplh220Pp1M
					</Link>
					.
				</Text>
				<Text as="p" className="text-body mb-2">
					Developed with Godot Game Engine, textures in Aseprite, and sounds from opengameart.org
				</Text>
				<div className="mb-2 w-full md:w-1/2">
					<ImageGallery
						images={[
							{
								src: "/images/pitgame.jpg",
								alt: "Pit Game gameplay",
								caption:
									"Every 5 seconds, a random block is chosen that falls away. The player needs to pick somewhere to stand, and when the timer expires they are locked to that position.",
							},
							{
								src: "/images/itsthepits.jpg",
								alt: "It's the pits minigame from Super Mario Party",
								caption: "It's the pits minigame from Super Mario Party",
							},
							{
								src: "/images/pitgame-lose.gif",
								alt: "Pit Game lose state",
								caption: "If the player makes a wrong move, they're out",
							},
							{
								src: "/images/pitgame-win.jpg",
								alt: "Pit Game win state",
								caption:
									"If the player chooses wisely, and ends up on the last remaining block, they win!",
							},
							{
								src: "/images/pitgame-tile.jpg",
								alt: "Creating a tile texture",
								caption: "Creating a tile texture in Aseprite",
							},
						]}
					/>
				</div>
				<Text as="p" className="text-body mb-2">
					Download the game and try it for yourself
				</Text>
				<Button asChild={true} color="teal" size="3" variant="classic">
					<Link download href="https://assets.rohangardiner.com/games/pit-game.zip">
						<FaDownload /> Download
					</Link>
				</Button>
			</PageSection>

			<PageSection>
				<Heading as="h2" className="text-hgeading mb-2">
					Catch All
				</Heading>
				<Box className="mb-2">
					<Badge size="2">Godot</Badge> <Badge size="2">GDScript</Badge>{" "}
					<Badge size="2">Aseprite</Badge>
				</Box>
				<Text as="p" className="text-body mb-2">
					Another weekend project, this time an attempt to recreate a different Mario Party
					minigame: "Snack Attack":{" "}
					<Link target="_blank" href="https://www.youtube.com/watch?v=rNvG8QF4-qQ">
						https://www.youtube.com/watch?v=rNvG8QF4-qQ
					</Link>
					.
				</Text>
				<Text as="p" className="text-body mb-2">
					Developed with Godot Game Engine, textures in Aseprite, and sounds from opengameart.org.
					This time there's no timer - The only goal is to fill up your cup with as many popcorn
					kernels as possible without dropping any.
				</Text>
				<div className="mb-2 w-full md:w-1/2">
					<ImageGallery
						images={[
							{
								src: "/images/catchall-game.jpg",
								alt: "Catch All gameplay",
								caption:
									"Pieces of popcorn drop from random points in the sky and the player must catch them with a cup on their head. Drop frequency increases as the game goes on to make it harder.",
							},
							{
								src: "/images/catchall-end.gif",
								alt: "Catch All Game Over",
								caption:
									"The game ends when the player drops a piece of popcorn, so careful not to bounce them off the rim of your cup!",
							},
							{ src: "/images/catchall.jpg", alt: "Catch All" },
							{
								src: "/images/snackattack.jpg",
								alt: "Snack Attack minigame from Super Mario Party",
								caption: "Snack Attack minigame from Super Mario Party",
							},
						]}
					/>
				</div>
				<Text as="p" className="text-body mb-2">
					Download the game and try it for yourself
				</Text>
				<Button asChild={true} color="teal" size="3" variant="classic">
					<Link download href="https://assets.rohangardiner.com/games/catch-all.zip">
						<FaDownload /> Download
					</Link>
				</Button>
			</PageSection>
		</main>
	);
}
