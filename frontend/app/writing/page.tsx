import { Heading, Text } from "@radix-ui/themes"
import AsciiText from "../components/asciiText"
import PageSection from "../components/pageSection"

export default function Page() {
    return (
        <main>
            <PageSection border={false}>
                <AsciiText text="WRITING" isAnimated={true} />
            </PageSection>

            <PageSection>
                <Heading as="h2" className="text-heading mb-2">Under construction</Heading>
                <Text as="p" className="text-body">I need to update this page</Text>
            </PageSection>
        </main>
    )
}