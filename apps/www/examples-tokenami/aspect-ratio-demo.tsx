"use client";

import { AspectRatio } from "@/registry/bases/tokenami/aspect-ratio/aspect-ratio";

export default function AspectRatioDemo() {
  return (
    <div style={{ maxWidth: 450, width: "100%" }}>
      <AspectRatio
        ratio={16 / 9}
        style={{
          "--background-color": "var(--color_muted)",
          "--border-radius": "var(---, 0.5rem)",
          "--overflow": "hidden",
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
