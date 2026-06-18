import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/stylex/accordion/accordion";

export default function AccordionDemo() {
  return (
    <Accordion
      defaultValue={["item-1"]}
      style={{ maxWidth: 400, width: "100%" }}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and is built on Base UI
          primitives.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled with StyleX?</AccordionTrigger>
        <AccordionContent>
          Yes. Every style is authored with StyleX and compiled to atomic CSS at
          build time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I customize it?</AccordionTrigger>
        <AccordionContent>
          Of course. The source lands in your project, so you own and edit the
          code.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
