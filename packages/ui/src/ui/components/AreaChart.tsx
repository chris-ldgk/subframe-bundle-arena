"use client";
/*
 * Documentation:
 * Area Chart — https://app.subframe.com/71d92cde7b25/library?component=Area+Chart_8aa1e7b3-5db6-4a62-aa49-137ced21a231
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface AreaChartRootProps
  extends React.ComponentProps<typeof SubframeCore.AreaChart> {
  stacked?: boolean;
  className?: string;
}

const AreaChartRoot = React.forwardRef<HTMLElement, AreaChartRootProps>(
  function AreaChartRoot(
    { stacked = false, className, ...otherProps }: AreaChartRootProps,
    ref
  ) {
    return (
      <SubframeCore.AreaChart
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

export const AreaChart = AreaChartRoot;
