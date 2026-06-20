import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/stylex/accordion/accordion";

export default function AccordionRtl() {
  return (
    <Accordion
      defaultValue={["item-1"]}
      style={{ maxWidth: 400, width: "100%" }}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>هل يمكن الوصول إليه؟</AccordionTrigger>
        <AccordionContent>
          نعم. يتبع نمط تصميم WAI-ARIA ومبني على مكونات Base UI.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>هل تم تصميمه باستخدام StyleX؟</AccordionTrigger>
        <AccordionContent>
          نعم. كل نمط مكتوب باستخدام StyleX ويُجمَّع إلى CSS عند البناء.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>هل يمكنني تخصيصه؟</AccordionTrigger>
        <AccordionContent>
          بالطبع. يصبح الكود ملكك بالكامل بعد تثبيته.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
