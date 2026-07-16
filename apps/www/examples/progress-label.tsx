import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/registry/bases/stylex/ui/progress";

export default function ProgressWithLabel() {
  return (
    <Progress className="w-full max-w-sm" value={56}>
      <div className="flex items-center justify-between">
        <ProgressLabel>Upload progress</ProgressLabel>
        <ProgressValue />
      </div>
    </Progress>
  );
}
