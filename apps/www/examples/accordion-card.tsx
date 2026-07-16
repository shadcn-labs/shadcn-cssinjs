import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/stylex/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/stylex/ui/card";

export default function AccordionCard() {
  return (
    <Card style={{ maxWidth: 400, width: "100%" }}>
      <CardHeader>
        <CardTitle>Frequently asked questions</CardTitle>
        <CardDescription>Everything you need to know.</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion defaultValue={["item-1"]}>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it free?</AccordionTrigger>
            <AccordionContent>
              Yes. Copy the source into your project and own it.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
            <AccordionContent>
              Yes. Components read your CSS variables, so dark mode just works.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem style={{ borderBottom: "none" }} value="item-3">
            <AccordionTrigger>Can I theme it?</AccordionTrigger>
            <AccordionContent>
              Edit the StyleX tokens or your CSS variables to retheme.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
