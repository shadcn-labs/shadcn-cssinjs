import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/stylex/accordion/accordion";

export default function AccordionDisabled() {
  return (
    <Accordion
      defaultValue={["item-1"]}
      style={{ maxWidth: 400, width: "100%" }}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Available</AccordionTrigger>
        <AccordionContent>This item can be toggled.</AccordionContent>
      </AccordionItem>
      <AccordionItem disabled value="item-2">
        <AccordionTrigger>Disabled</AccordionTrigger>
        <AccordionContent>You can&apos;t open this item.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Available</AccordionTrigger>
        <AccordionContent>This item can be toggled too.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
