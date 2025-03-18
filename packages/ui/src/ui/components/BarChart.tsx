"use client";
/*
 * Documentation:
 * Bar Chart — https://app.subframe.com/71d92cde7b25/library?component=Bar+Chart_4d4f30e7-1869-4980-8b96-617df3b37912
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface BarChartRootProps
  extends React.ComponentProps<typeof SubframeCore.BarChart> {
  stacked?: boolean;
  className?: string;
}

const BarChartRoot = React.forwardRef<HTMLElement, BarChartRootProps>(
  function BarChartRoot(
    { stacked = false, className, ...otherProps }: BarChartRootProps,
    ref
  ) {
    return (
      <SubframeCore.BarChart
        className={SubframeCore.twClassNames("h-80 w-full", className)}
        ref={ref as any}
        stacked={stacked}
        colors={[
          "#236e4a",
          "#133929",
          "#30a46c",
          "#164430",
          "#3cb179",
          "#1b543a",
        ]}
        dark={true}
        {...otherProps}
      />
    );
  }
);

export const BarChart = BarChartRoot;
