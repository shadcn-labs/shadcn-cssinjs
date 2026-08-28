import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/stylex/ui/accordion";

const items = [
  {
    content:
      "Manage how you receive notifications. You can enable email alerts for updates or push notifications for mobile devices.",
    trigger: "Notification Settings",
    value: "notifications",
  },
  {
    content:
      "Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences. You can also download your data or delete your account.",
    trigger: "Privacy & Security",
    value: "privacy",
  },
  {
    content:
      "View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
    trigger: "Billing & Subscription",
    value: "billing",
  },
];

export default function AccordionMultiple() {
  return (
    <Accordion multiple className="max-w-lg" defaultValue={["notifications"]}>
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
