"use client";

import { TrackCard } from "@repo/ui/components/TrackCard";

export function TestComponent() {
  return (
    <div className="min-h-screen container max-w-none flex h-full w-full flex-col items-start gap-4 bg-default-background py-12">
      <span className="text-heading-1 font-heading-1 text-default-font">
        Your favorite tracks of the week
      </span>
      <div className="flex w-full items-start gap-2 px-1 py-1">
        <TrackCard
          title="The Less I Know The Better"
          artist="Tame Impala"
          length="3:38"
          favoriteButtonSlot={<TrackCard.FavoriteButton />}
          imageSlot={
            <img
              className="flex-none"
              src="https://res.cloudinary.com/subframe/image/upload/v1741969641/uploads/925/oefuaafkotek1wqlmpyz.jpg"
            />
          }
          genre="Disco"
        />
        <TrackCard
          title="Shadowplay"
          artist="Joy Division"
          length="3:53"
          favoriteButtonSlot={<TrackCard.FavoriteButton />}
          imageSlot={
            <img
              className="flex-none"
              src="https://res.cloudinary.com/subframe/image/upload/v1741971326/uploads/925/psbp3yk4p0ajtdhfq4ne.jpg"
            />
          }
          genre="Post Punk"
        />
        <TrackCard
          title="Bohemian Rhapsody"
          artist="Queen"
          length="3:53"
          favoriteButtonSlot={<TrackCard.FavoriteButton />}
          imageSlot={
            <img
              className="flex-none"
              src="https://res.cloudinary.com/subframe/image/upload/v1741974378/uploads/925/rt3t7s6urpctha82h9ip.jpg"
            />
          }
          genre="Progressive Rock"
        />
      </div>
    </div>
  );
}
