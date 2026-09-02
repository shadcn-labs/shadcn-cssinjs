import * as stylex from "@stylexjs/stylex";
import { Plus as Add01Icon } from "lucide-react";

import { Button } from "@/registry/bases/stylex/ui/button";
import { Card, CardContent } from "@/registry/bases/stylex/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/bases/stylex/ui/empty";

const styles = stylex.create({
  empty1: {
    padding: "1rem",
  },
});

export const EmptyDistributeTrack = () => (
  <Card>
    <CardContent>
      <Empty style={styles.empty1}>
        <EmptyMedia variant="icon">
          <Add01Icon strokeWidth={2} />
        </EmptyMedia>
        <EmptyHeader>
          <EmptyTitle>Distribute Track</EmptyTitle>
          <EmptyDescription>
            Upload your first master to start reaching listeners on Spotify,
            Apple Music, and more.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>Create Release</Button>
        </EmptyContent>
      </Empty>
    </CardContent>
  </Card>
);
