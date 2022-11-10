import React from "react";
import "./Chartbar.css";
export default function ChartBar(props) {
  let barFillHieght = "0%";

  if (props.max > 0) {
    barFillHieght = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHieght, "background-color": "red" }}
        ></div>
      </div>

      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
