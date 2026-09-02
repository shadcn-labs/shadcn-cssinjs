import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/stylex/ui/accordion";

const items = [
  {
    content:
      "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password. The link will expire in 24 hours.",
    trigger: "How do I reset my password?",
    value: "item-1",
  },
  {
    content:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be reflected in your next billing cycle.",
    trigger: "Can I change my subscription plan?",
    value: "item-2",
  },
  {
    content:
      "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our payment partners.",
    trigger: "What payment methods do you accept?",
    value: "item-3",
  },
];

export default function AccordionBasic() {
  return (
    <Accordion defaultValue={["item-1"]} className="max-w-lg">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
