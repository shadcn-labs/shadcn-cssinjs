import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/bases/stylex/ui/alert-dialog";
import { Button } from "@/registry/bases/stylex/ui/button";

export default function AlertDialogSmall() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline">Show Dialog</Button>}
      />
      <AlertDialogContent size="sm">
        <AlertDialogHeader>
          <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
          <AlertDialogDescription>
            Do you want to allow the USB accessory to connect to this device?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            render={<Button variant="outline">Don&apos;t allow</Button>}
          />
          <AlertDialogAction render={<Button>Allow</Button>} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
