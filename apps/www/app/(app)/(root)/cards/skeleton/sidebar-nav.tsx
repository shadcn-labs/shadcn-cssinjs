import * as stylex from "@stylexjs/stylex";

import { Card } from "@/registry/bases/stylex/ui/card";
import { Skeleton } from "@/registry/bases/stylex/ui/skeleton";

const styles = stylex.create({
  card1: {
    borderRadius: "1.5rem",
    overflow: "hidden",
    paddingBlock: "0rem",
    width: "100%",
  },
  card2: {
    borderRadius: "1.5rem",
    display: {
      "@media (min-width: 1280px)": "flex",
      default: "none",
    },
    overflow: "hidden",
    paddingBlock: "0rem",
    width: "100%",
  },
  skeleton1: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    marginBottom: "0.25rem",
    width: "5rem",
  },
  skeleton2: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "1rem",
    width: "1rem",
  },
  skeleton3: {
    borderRadius: "calc(var(--radius) - 2px)",
    height: "0.75rem",
    width: "6rem",
  },
  skeleton4: {
    borderRadius: "0",
    height: "1px",
    marginBlock: "0.25rem",
    width: "100%",
  },
});

const groupA = [0, 1, 2, 3, 4];
const groupB = [0, 1, 2, 3, 4];

const NavSkeleton = ({ groups }: { groups: number[][] }) => (
  <div className="flex flex-col gap-1 p-2">
    {groups.map((items, gi) => (
      <div key={gi} className="flex flex-col gap-1 px-2 py-1.5">
        <Skeleton style={styles.skeleton1} />
        {items.map((item) => (
          <div key={item} className="flex items-center gap-2 px-2 py-2">
            <Skeleton style={styles.skeleton2} />
            <Skeleton style={styles.skeleton3} />
          </div>
        ))}
        {gi < groups.length - 1 && <Skeleton style={styles.skeleton4} />}
      </div>
    ))}
  </div>
);

export const SidebarNav = () => (
  <div className="grid w-full items-start gap-4 xl:grid-cols-2 xl:gap-6">
    <Card style={styles.card1}>
      <NavSkeleton groups={[groupA, groupB]} />
    </Card>
    <Card style={styles.card2}>
      <NavSkeleton groups={[groupA, groupB]} />
    </Card>
  </div>
);
