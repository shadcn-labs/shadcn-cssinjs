import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/stylex/ui/accordion";

export default function AccordionBorders() {
  return (
    <Accordion
      defaultValue={["item-1"]}
      style={{
        border: "1px solid var(--border)",
        borderRadius: "var(--radius)",
        maxWidth: 400,
        paddingInline: "1rem",
        width: "100%",
      }}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Bordered container</AccordionTrigger>
        <AccordionContent>
          Wrap the accordion in a bordered, rounded container and each item
          keeps its divider.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second item</AccordionTrigger>
        <AccordionContent>
          Dividers sit between items using a bottom border.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem style={{ borderBottom: "none" }} value="item-3">
        <AccordionTrigger>Third item</AccordionTrigger>
        <AccordionContent>
          Remove the border on the last item for a clean edge.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
