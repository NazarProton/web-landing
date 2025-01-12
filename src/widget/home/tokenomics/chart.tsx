import React, { useEffect, useRef, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Typography from "@/components/typography";
import allocation_stats from "../../../../public/allocation.svg";
import Image from "next/image";

const DoughnutChart = () => {
  const contentRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [refresh, setRefresh] = useState("");

  // useEffect(() => {
  //   const { width }: any = document
  //     .querySelector(".highcharts-series-group")
  //     ?.getBoundingClientRect();

  //   if (width < 10) {
  //     setRefresh(new Date().getTime().toString());
  //   } else {
  //     const percentage = (70 / 100) * width;
  //     setWidth(percentage);
  //   }
  // }, [contentRef, refresh]);
  const data = [
    {
      name: "Reward (Staking Yield Farming)",
      y: 25,
      color: "#D26FEB",
    },
    {
      name: "Team Allocation",
      y: 20,
      color: "#EE4492",
    },
    {
      name: "Ecosystem Development",
      y: 15,
      color: "#DF1DFF",
    },
    {
      name: "Community Development",
      y: 9,
      color: "#AEE7FF",
    },
    {
      name: "Token Sale",
      y: 20,
      color: "#7C75FF",
    },
    {
      name: "Liquidity Provision",
      y: 6,
      color: "#6EE3C0",
    },
    {
      name: "Reserve",
      y: 3,
      color: "#6998FF",
    },
    {
      name: "Advisor",
      y: 2,
      color: "#2864FF",
    },
  ];
  const options = {
    chart: {
      type: "pie",
      backgroundColor: "transparent",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        innerSize: "95%",
        depth: 10,
        dataLabels: {
          // enabled: false,
          style: {
            color: "white", // Set the color of the label text
            fontSize: "12px", // Set the font size of the label text
            width: "50px",
          },
          distance: 20,
          formatter: function (): any {
            let data: any = this;
            return `<div style=display:block;color:#fff><div>${data.point.y}%</div> <br/>  <div style="opacity:0.6">${data.point.name}</div></div>`;
          },
        },
      },
    },
    series: [
      {
        name: "Percentage",
        // colorByPoint: true,
        borderWidth: 0,
        data: [...data],
      },
    ],
  };

  return (
    <div className="allocation-chart relative flex items-center justify-center">
      {/* <HighchartsReact highcharts={Highcharts} options={options} />
      <div
        // style={{ transform: "translate(50% 50%)" }}
        style={{ width: width, height: width }}
        className="absolute rounded-full bg-[#0b0a14] border-[1px] border-dashed"
      >
        <div className="w-full h-full text-center flex items-center justify-center">
          <div>
            <Typography
              variant="body2"
              className="!text-white"
              label="Total Supply"
            />
            <Typography
              variant="body1"
              className="!text-white mt-2 opacity-[0.6]"
              label="1,000,000,000 tokens"
            />
          </div>
        </div> */}
      {/* </div> */}
      <Image
        src={allocation_stats}
        alt="allocations"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default DoughnutChart;
