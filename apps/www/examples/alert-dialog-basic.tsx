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

export default function AlertDialogBasic() {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline">Show Dialog</Button>}
      />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            render={<Button variant="outline">Cancel</Button>}
          />
          <AlertDialogAction render={<Button>Continue</Button>} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
