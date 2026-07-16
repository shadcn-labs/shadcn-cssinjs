import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import { Card, CardContent } from "@/registry/bases/stylex/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/bases/stylex/ui/collapsible";

export default function CollapsibleBasic() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent>
        <Collapsible className="rounded-md">
          <CollapsibleTrigger
            render={<Button className="w-full" variant="ghost" />}
          >
            Product details
            <ChevronDownIcon className="ml-auto size-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
            <div>
              This panel can be expanded or collapsed to reveal additional
              content.
            </div>
            <Button size="sm">Learn More</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
