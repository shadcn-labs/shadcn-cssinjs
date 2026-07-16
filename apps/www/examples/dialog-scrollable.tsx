import { Button } from "@/registry/bases/stylex/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/bases/stylex/ui/dialog";

const SECTIONS = [
  "1. The service is provided “as is” without warranty of any kind.",
  "2. You are responsible for keeping your account credentials secure.",
  "3. We may update these terms from time to time with notice.",
  "4. Content you submit remains yours, but you grant us a license to host it.",
  "5. Do not use the service for unlawful or harmful purposes.",
  "6. We may suspend accounts that violate these terms.",
  "7. The service may be unavailable during scheduled maintenance.",
  "8. We are not liable for indirect or consequential damages.",
  "9. These terms are governed by the laws of your jurisdiction.",
  "10. Continued use after changes constitutes acceptance of the new terms.",
  "11. You may export your data at any time from the settings page.",
  "12. Contact support if you have questions about these terms.",
];

export default function DialogScrollable() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Terms</Button>} />
      <DialogContent style={{ maxWidth: 425 }}>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read the terms carefully before continuing.
          </DialogDescription>
        </DialogHeader>
        <div
          style={{
            color: "var(--muted-foreground)",
            display: "flex",
            flexDirection: "column",
            fontSize: 14,
            gap: 8,
            maxHeight: 200,
            overflowY: "auto",
          }}
        >
          {SECTIONS.map((section) => (
            <p key={section} style={{ margin: 0 }}>
              {section}
            </p>
          ))}
        </div>
        <DialogFooter>
          <DialogClose render={<Button variant="outline">Decline</Button>} />
          <DialogClose render={<Button>Accept</Button>} />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
