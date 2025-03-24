"use client";
/*
 * Documentation:
 * TrackCardWithProps — https://app.subframe.com/71d92cde7b25/library?component=TrackCardWithProps_5ba91556-25ef-4664-a474-404df1ca9df6
 */

import React from "react";
import * as SubframeCore from "@subframe/core";
import { Badge } from "./Badge";
import { FeatherHeart } from "@subframe/core";
import { IconButton } from "./IconButton";

interface LengthBadgeProps extends React.ComponentProps<typeof Badge> {
  children?: React.ReactNode;
  className?: string;
}

const LengthBadge = React.forwardRef<HTMLElement, LengthBadgeProps>(
  function LengthBadge(
    { children, className, ...otherProps }: LengthBadgeProps,
    ref
  ) {
    return (
      <Badge
        className={className}
        variant="neutral"
        icon={null}
        iconRight={null}
        ref={ref as any}
        {...otherProps}
      >
        {children}
      </Badge>
    );
  }
);

interface FavoriteButtonProps extends React.ComponentProps<typeof IconButton> {
  icon?: React.ReactNode;
  className?: string;
}

const FavoriteButton = React.forwardRef<HTMLElement, FavoriteButtonProps>(
  function FavoriteButton(
    { icon = <FeatherHeart />, className, ...otherProps }: FavoriteButtonProps,
    ref
  ) {
    return (
      <IconButton
        className={className}
        disabled={false}
        variant="brand-secondary"
        size="medium"
        icon={icon}
        loading={false}
        ref={ref as any}
        {...otherProps}
      />
    );
  }
);

interface GenreBadgeProps extends React.ComponentProps<typeof Badge> {
  children?: React.ReactNode;
  className?: string;
}

const GenreBadge = React.forwardRef<HTMLElement, GenreBadgeProps>(
  function GenreBadge(
    { children, className, ...otherProps }: GenreBadgeProps,
    ref
  ) {
    return (
      <Badge
        className={className}
        variant="brand"
        icon={null}
        iconRight={null}
        ref={ref as any}
        {...otherProps}
      >
        {children}
      </Badge>
    );
  }
);

interface TrackCardWithPropsRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  artist?: React.ReactNode;
  length?: React.ReactNode;
  genre?: React.ReactNode;
  image?: string;
  className?: string;
}

const TrackCardWithPropsRoot = React.forwardRef<
  HTMLElement,
  TrackCardWithPropsRootProps
>(function TrackCardWithPropsRoot(
  {
    title,
    artist,
    length,
    genre,
    image,
    className,
    ...otherProps
  }: TrackCardWithPropsRootProps,
  ref
) {
  return (
    <div
      className={SubframeCore.twClassNames(
        "flex w-full min-w-[256px] max-w-[448px] flex-col items-start gap-2 overflow-hidden rounded-md px-1 py-1 shadow-sm relative aspect-square",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <div className="flex w-full grow shrink-0 basis-0 flex-col items-start justify-between px-2 py-2 relative z-30">
        <GenreBadge>{genre}</GenreBadge>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <div className="flex flex-col items-start gap-1">
            {title ? (
              <span className="text-heading-2 font-heading-2 text-default-font">
                {title}
              </span>
            ) : null}
            {artist ? (
              <span className="text-caption font-caption text-default-font">
                {artist}
              </span>
            ) : null}
          </div>
          <div className="flex w-full items-center justify-between">
            <LengthBadge>{length}</LengthBadge>
            <FavoriteButton />
          </div>
        </div>
      </div>
      {image ? (
        <img className="flex-none absolute inset-0 z-10" src={image} />
      ) : null}
      <div className="flex flex-col items-start gap-2 absolute inset-0 mix-blend-multiply bg-gradient-to-b from-neutral-0 via-transparent to-neutral-0 z-20 opacity-90" />
    </div>
  );
});

export const TrackCardWithProps = Object.assign(TrackCardWithPropsRoot, {
  LengthBadge,
  FavoriteButton,
  GenreBadge,
});
