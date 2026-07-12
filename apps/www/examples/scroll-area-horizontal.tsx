import { ScrollArea } from "@/registry/bases/stylex/scroll-area/scroll-area";

const works = [
  {
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
    artist: "Ornella Binni",
  },
  {
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
    artist: "Tom Byrom",
  },
  {
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
    artist: "Vladimir Malyavko",
  },
];

export default function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max gap-4 p-4">
        {works.map((artwork) => (
          <figure className="shrink-0" key={artwork.artist}>
            <div className="overflow-hidden rounded-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={`By ${artwork.artist}`}
                className="aspect-[3/4] w-[150px] object-cover"
                src={artwork.art}
              />
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              Photo by{" "}
              <span className="font-semibold text-foreground">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </ScrollArea>
  );
}
