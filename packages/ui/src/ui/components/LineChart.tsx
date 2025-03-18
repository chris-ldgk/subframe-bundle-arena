"use client";
/*
 * Documentation:
 * Line Chart — https://app.subframe.com/71d92cde7b25/library?component=Line+Chart_22944dd2-3cdd-42fd-913a-1b11a3c1d16d
 */

import React from "react";
import * as SubframeCore from "@subframe/core";

interface LineChartRootProps
  extends React.ComponentProps<typeof SubframeCore.LineChart> {
  className?: string;
}

const LineChartRoot = React.forwardRef<HTMLElement, LineChartRootProps>(
  function LineChartRoot(
    { className, ...otherProps }: LineChartRootProps,
    ref
  ) {
    return (
      <SubframeCore.LineChart
        className={SubframeCore.twClassNames("h-80 w-full", className)}
        ref={ref as any}
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

export const LineChart = LineChartRoot;
