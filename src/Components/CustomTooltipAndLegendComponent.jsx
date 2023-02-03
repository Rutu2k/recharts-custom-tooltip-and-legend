import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Text
} from "recharts";

import { CustomTooltip, RenderLegend } from "./utils";

const CustomTooltipandLegendComponent = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];

  const customTick = (tickObject) => {
    const {
      payload: { value }
    } = tickObject;
    tickObject["fill"] = value === 0 ? "red" : "#666";
    return <Text {...tickObject}>{value}</Text>;
  };

  return (
    <div style={{ height: "20rem" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis dataKey="name"></XAxis>

          <YAxis tick={(tickObject) => customTick(tickObject)}></YAxis>

          <Line dataKey="uv" type="monotone" stroke="#0000FF"></Line>
          <Line dataKey="pv" type="monotone" stroke="#ff223f"></Line>

          {/* Tooltip Implementation */}
          <Tooltip
            content={<CustomTooltip active={false} payload={[]} label={""} />}
          />

          {/* Legend Implementation */}
          <Legend content={<RenderLegend />} verticalAlign="top" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomTooltipandLegendComponent;
