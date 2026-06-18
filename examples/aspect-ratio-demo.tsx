import { AspectRatio } from "@/registry/bases/stylex/aspect-ratio/aspect-ratio";

export default function AspectRatioDemo() {
  return (
    <div style={{ width: "100%", maxWidth: 450 }}>
      <AspectRatio
        ratio={16 / 9}
        style={{
          borderRadius: "0.5rem",
          overflow: "hidden",
          backgroundColor: "var(--muted)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="A scenic landscape"
          src="https://images.unsplash.com/photo-1576075796033-848c2a5f3696?w=800&dpr=2&q=80"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AspectRatio>
    </div>
  );
}
