import { AspectRatio } from "@/registry/bases/stylex/ui/aspect-ratio";

export default function AspectRatioDemo() {
  return (
    <div style={{ maxWidth: 450, width: "100%" }}>
      <AspectRatio
        ratio={16 / 9}
        style={{
          backgroundColor: "var(--muted)",
          borderRadius: "0.5rem",
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="A scenic landscape"
          src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
          style={{ height: "100%", objectFit: "cover", width: "100%" }}
        />
      </AspectRatio>
    </div>
  );
}
