import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/stylex/ui/accordion";

export default function AccordionBasic() {
  return (
    <Accordion
      defaultValue={["item-1"]}
      style={{ maxWidth: 400, width: "100%" }}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>What is shadcn-cssinjs?</AccordionTrigger>
        <AccordionContent>
          A registry of shadcn-style components styled with StyleX and built on
          Base UI primitives.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I customize it?</AccordionTrigger>
        <AccordionContent>
          Of course. The source lands in your project, so you own the code.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
