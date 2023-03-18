import React, { useMemo, useCallback } from "react";
import { AreaClosed, Line, Bar } from "@visx/shape";
import { curveMonotoneX } from "@visx/curve";
import { GridRows, GridColumns } from "@visx/grid";
import { scaleTime, scaleLinear } from "@visx/scale";
import {
  withTooltip,
  Tooltip,
  TooltipWithBounds,
  defaultStyles
} from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { localPoint } from "@visx/event";
import { LinearGradient } from "@visx/gradient";
import { max, extent, bisector } from "d3-array";
import { timeFormat } from "d3-time-format";
import { AxisBottom } from "@visx/axis";
import { withHydradedMembers } from ".";

type NonNullable<T> = T extends null | undefined ? never : T;
type TimelineData = NonNullable<ReturnType<typeof withHydradedMembers>>[0];
type TooltipData = TimelineData;

const formatDate = timeFormat("%b %d, '%y");

const getDate = (d: TimelineData) => new Date(d.day);
const bisectDate = bisector<TimelineData, Date>((d) => new Date(d.day)).left;

export type AreaProps = {
  data: TimelineData[];
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

export const background = "#3b6978";
export const background2 = "#204051";
export const accentColor = "#edffea";
export const accentColorDark = "#75daad";
const tooltipStyles = {
  ...defaultStyles,
  background,
  border: "1px solid white",
  color: "white"
};

export default withTooltip<AreaProps, TooltipData>(
  ({
    data,
    width,
    height,
    margin = { top: 0, right: 0, bottom: 0, left: 0 },
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipTop = 0,
    tooltipLeft = 0
  }: AreaProps & WithTooltipProvidedProps<TooltipData>) => {
    if (width < 10) return null;

    // bounds
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const cumulativeMembers = (
      d: TimelineData,
      index: number,
      dataArray: TimelineData[]
    ) => {
      return dataArray
        .slice(0, index + 1)
        .reduce((acc, cur) => acc + cur.members.length, 0);
    };

    // scales
    const dateScale = useMemo(
      () =>
        scaleTime({
          range: [margin.left, innerWidth + margin.left - 10], // Subtract 40 pixels from the range end
          domain: extent(data, getDate) as [Date, Date]
        }),
      [innerWidth, margin.left, data]
    );

    const yScale = useMemo(
      () =>
        scaleLinear({
          range: [innerHeight + margin.top - 20, margin.top + 20],
          domain: [
            0,
            max(data, (d) => cumulativeMembers(d, data.indexOf(d), data)) || 1
          ],
          nice: true
        }),
      [margin.top, innerHeight, data]
    );

    const membersCountScale = useMemo(
      () =>
        scaleLinear({
          range: [innerHeight + margin.top - 40, margin.top + 20],
          domain: [
            0,
            max(data, (d) => cumulativeMembers(d, data.indexOf(d), data)) || 1
          ],
          nice: true
        }),
      [margin.top, innerHeight, data]
    );

    // tooltip handler
    const handleTooltip = useCallback(
      (
        event:
          | React.TouchEvent<SVGRectElement>
          | React.MouseEvent<SVGRectElement>
      ) => {
        const { x } = localPoint(event) || { x: 0 };
        const x0 = dateScale.invert(x);
        const index = bisectDate(data, x0, 1);
        const d0 = data[index - 1];
        const d1 = data[index];
        let d = d0;
        if (d1 && getDate(d1)) {
          d =
            x0.valueOf() - getDate(d0).valueOf() >
            getDate(d1).valueOf() - x0.valueOf()
              ? d1
              : d0;
        }
        showTooltip({
          tooltipData: d,
          tooltipLeft: x,
          tooltipTop: membersCountScale(
            cumulativeMembers(d, data.indexOf(d), data)
          )
        });
      },
      [showTooltip, membersCountScale, dateScale, data]
    );

    return (
      <div>
        <svg width={width} height={height}>
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill="url(#area-background-gradient)"
            rx={14}
          />
          <LinearGradient
            id="area-background-gradient"
            from={background}
            to={background2}
          />
          <LinearGradient
            id="area-gradient"
            from={accentColor}
            to={accentColor}
            toOpacity={0.1}
          />
          <GridRows
            left={margin.left}
            scale={membersCountScale}
            width={innerWidth}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0}
            pointerEvents="none"
          />
          <GridColumns
            top={margin.top}
            scale={dateScale}
            height={innerHeight}
            strokeDasharray="1,3"
            stroke={accentColor}
            strokeOpacity={0.2}
            pointerEvents="none"
          />
          <AreaClosed<TimelineData>
            data={data}
            x={(d) => dateScale(getDate(d)) ?? 0}
            y={(d, i, arr) => yScale(cumulativeMembers(d, i, arr))}
            yScale={membersCountScale}
            strokeWidth={1}
            stroke="url(#area-gradient)"
            fill="url(#area-gradient)"
            curve={curveMonotoneX}
          />
          <Bar
            x={margin.left}
            y={margin.top}
            width={innerWidth}
            height={innerHeight}
            fill="transparent"
            rx={14}
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
          />
          {tooltipData && (
            <g>
              <Line
                from={{ x: tooltipLeft, y: margin.top }}
                to={{ x: tooltipLeft, y: innerHeight + margin.top }}
                stroke={accentColorDark}
                strokeWidth={2}
                pointerEvents="none"
                strokeDasharray="5,2"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop + 1}
                r={4}
                fill="black"
                fillOpacity={0.1}
                stroke="black"
                strokeOpacity={0.1}
                strokeWidth={2}
                pointerEvents="none"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={4}
                fill={accentColorDark}
                stroke="white"
                strokeWidth={2}
                pointerEvents="none"
              />
            </g>
          )}
          <AxisBottom
            top={innerHeight - 40}
            tickFormat={(value) => formatDate(value as Date)}
            scale={dateScale}
            numTicks={5}
            stroke={accentColor}
            tickStroke={accentColor}
            tickLabelProps={() => ({
              fill: accentColor,
              fontSize: 10,
              textAnchor: "middle"
            })}
          />
        </svg>
        {tooltipData && (
          <div>
            <TooltipWithBounds
              //NOSONAR
              key={Math.random()}
              top={tooltipTop - 12}
              left={tooltipLeft + 12}
              style={tooltipStyles}
            >
              {`Total Members: ${cumulativeMembers(
                tooltipData,
                data.indexOf(tooltipData),
                data
              )}`}
            </TooltipWithBounds>
            <Tooltip
              top={innerHeight + margin.top - 14}
              left={tooltipLeft}
              style={{
                ...defaultStyles,
                minWidth: 72,
                textAlign: "center",
                transform: "translateX(-50%)"
              }}
            >
              {formatDate(getDate(tooltipData))}
            </Tooltip>
          </div>
        )}
      </div>
    );
  }
);
