import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
const backgroundColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];

const borderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];
const replacableGraphData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const TopproductGraph = () => {
  const MAX_TOP_PRODUCTS = 10;
  const MAX_BOTTOM_PRODUCTS = 10;
  function compare(a, b) {
    if (a.totalSold < b.totalSold) {
      return -1;
    }
    if (a.totalSold > b.totalSold) {
      return 1;
    }
    return 0;
  }

  const merchantProducts = useSelector((state) => state.MerchantProduct);
  const [allMerchantProductsByProfit, setAllMerchantProductsByProfit] =
    useState([]);
  const [allMerchantProductsBySold, setAllMerchantProductsBySold] = useState(
    []
  );

  //Graph data useStates
  const [topProfitData, setTopProfitData] = useState([]);
  const [topSoldData, setTopSoldData] = useState([]);
  const [bottomProfitData, setBottomProfitData] = useState([]);
  const [bottomSoldData, setBottomSoldData] = useState([]);

  //labels
  const [topProfitLabel, setTopProfitLabel] = useState([]);
  const [topSoldLabel, setTopSoldLabel] = useState([]);
  const [bottomProfitLabel, setBottomProfitLabel] = useState([]);
  const [bottomSoldLabel, setBottomSoldLabel] = useState([]);

  const topProfitDataGraph = {
    labels: topProfitLabel,
    datasets: [
      {
        label: "Total Profit",
        data: topProfitData,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };
  const bottomProfitDataGraph = {
    labels: bottomProfitLabel,
    datasets: [
      {
        label: "Total Profit",
        data: bottomProfitData,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };
  const topSoldDataGraph = {
    labels: topSoldLabel,
    datasets: [
      {
        label: "Total Sales",
        data: topSoldData,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };
  const bottomSoldDataGraph = {
    labels: bottomSoldLabel,
    datasets: [
      {
        label: "Total Sales",
        data: bottomSoldData,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    console.log("chala");
    const data = merchantProducts;
    data.sort(compare);
    setAllMerchantProductsBySold(data);
    setAllMerchantProductsByProfit(merchantProducts);
  }, [merchantProducts]);

  useEffect(() => {
    console.log("ye hain profit", allMerchantProductsByProfit);
    if (allMerchantProductsByProfit.length > 0) {
      var newMinList = [];
      var newMinLabel = [];
      var newMaxLabel = [];
      var newMaxList = [];
      for (let i = 0; i < Math.max(MAX_TOP_PRODUCTS); i++) {
        newMinList.push(allMerchantProductsByProfit[i]?.totalProfit);
        newMinLabel.push(allMerchantProductsByProfit[i]?.name);
      }
      for (
        let i = 0;
        i < Math.max(MAX_TOP_PRODUCTS, allMerchantProductsByProfit.length);
        i++
      ) {
        newMaxList.push(
          allMerchantProductsByProfit[
            allMerchantProductsByProfit.length - 1 - i
          ]?.totalProfit
        );
        newMaxLabel.push(allMerchantProductsByProfit[i]?.name);
      }

      setTopProfitData(newMaxList);
      setTopProfitLabel(newMaxLabel);
      setBottomProfitData(newMinList);
      setBottomProfitLabel(newMinLabel);
    }
  }, [allMerchantProductsByProfit]);

  useEffect(() => {
    if (allMerchantProductsBySold.length > 0) {
      var newMinList = [];
      var newMinLabel = [];
      var newMaxLabel = [];
      var newMaxList = [];
      for (let i = 0; i < Math.max(MAX_TOP_PRODUCTS); i++) {
        newMinList.push(allMerchantProductsBySold[i]?.totalSold);
        newMinLabel.push(allMerchantProductsBySold[i]?.name);
      }
      for (
        let i = 0;
        i < Math.max(MAX_TOP_PRODUCTS, allMerchantProductsBySold.length);
        i++
      ) {
        newMaxList.push(
          allMerchantProductsBySold[allMerchantProductsBySold.length - 1 - i]
            ?.totalSold
        );
        newMaxLabel.push(allMerchantProductsBySold[i]?.name);
      }

      setTopSoldData(newMaxList);
      setTopSoldLabel(newMaxLabel);
      setBottomSoldData(newMinList);
      setBottomSoldLabel(newMinLabel);
    }
  }, [allMerchantProductsBySold]);

  return (
    <div className="flex flex-wrap justify-around">
      <div className="w-full md:w-3/4 m-2 px-2 py-2">
        <span className="text-lg font-bold">
          Top Selling Products (By Total Profit)
        </span>
        <Bar data={replacableGraphData} options={options} />
      </div>
      <div className="w-full md:w-3/4 m-2 px-2 py-2">
        <span className="text-lg font-bold">
          Bottom Selling Products (By Total Profit)
        </span>
        <Bar data={replacableGraphData} options={options} />
      </div>
      <div className="w-full md:w-3/4 m-2 px-2 py-2">
        <span className="text-lg font-bold">
          Bottom Selling Products (By Total Sold)
        </span>
        <Bar data={replacableGraphData} options={options} />
      </div>
      <div className="w-full md:w-3/4 m-2 px-2 py-2">
        <span className="text-lg font-bold">
          Bottom Selling Products (By Total Sold){" "}
        </span>
        <Bar data={replacableGraphData} options={options} />
      </div>
    </div>
  );
};

export default TopproductGraph;
