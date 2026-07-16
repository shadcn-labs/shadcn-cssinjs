import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/stylex/ui/accordion";

export default function AccordionMultiple() {
  return (
    <Accordion
      multiple
      defaultValue={["item-1", "item-2"]}
      style={{ maxWidth: 400, width: "100%" }}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>First item</AccordionTrigger>
        <AccordionContent>
          With the `multiple` prop, more than one item can stay open at the same
          time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second item</AccordionTrigger>
        <AccordionContent>
          This item is open too, because both values are in `defaultValue`.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Third item</AccordionTrigger>
        <AccordionContent>
          Open this one without closing the others.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
