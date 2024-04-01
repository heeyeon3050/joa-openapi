"use client";

import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

// TODO: change if dummy is enough
interface WeekTransactionGraphProps {
  bankStat: {
    totalTransactionCnt: number;
    totalMemberCnt: number;
    totalWithdrawAmount: number | null;
    totalDepositAmount: number | null;
    totalTransactionList: {
      time: string;
      deposit: number;
      withdraw: number;
    }[];
  };
}

export const WeekTransactionGraph: React.FC<WeekTransactionGraphProps> = ({
  bankStat,
}) => {
  const chartRef = useRef<ApexCharts | null>(null);
  useEffect(() => {
    const options = {
      colors: ["#FF82AC", "#16DBCC"],
      series: [
        {
          name: "입금",
          color: "#FF82AC",
          data: [
            { x: "03-23", y: 131 },
            { x: "03-24", y: 431 },
            { x: "03-25", y: 531 },
            { x: "03-26", y: 231 },
            { x: "03-26", y: 231 },
            { x: "03-28", y: 281 },
            { x: "03-29", y: 422 },
          ],
        },
        {
          name: "출금",
          color: "#16DBCC",
          data: [
            { x: "03-23", y: 531 },
            { x: "03-24", y: 431 },
            { x: "03-25", y: 331 },
            { x: "03-26", y: 231 },
            { x: "03-27", y: 431 },
            { x: "03-28", y: 332 },
            { x: "03-29", y: 713 },
          ],
        },
      ],
      chart: {
        type: "bar",
        height: "320px",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "80%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -14,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    };

    const depositData = bankStat.totalTransactionList.map((transaction) => ({
      x: transaction.time.slice(5, 10),
      y: transaction.deposit,
    }));

    const withdrawData = bankStat.totalTransactionList.map((transaction) => ({
      x: transaction.time.slice(5, 10),
      y: transaction.withdraw,
    }));

    options.series = [
      {
        name: "입금",
        color: "#FF82AC",
        data: depositData,
      },
      {
        name: "출금",
        color: "#16DBCC",
        data: withdrawData,
      },
    ];

    options.plotOptions = {
      bar: {
        horizontal: false,
        columnWidth: "80%",
        borderRadiusApplication: "end",
        borderRadius: 8,
      },
    };

    if (typeof window !== "undefined") {
      if (
        document.getElementById("column-chart") &&
        typeof ApexCharts !== "undefined"
      ) {
        if (!chartRef.current) {
          chartRef.current = new ApexCharts(
            document.getElementById("column-chart"),
            options
          );
          chartRef.current.render();
        }
      }

      return () => {
        if (chartRef.current) {
          chartRef.current.destroy();
          chartRef.current = null;
        }
      };
    }
  }, [bankStat]);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
            <svg
              className="w-6 h-6 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 19"
            >
              <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
              <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
            </svg>
          </div>
          <div>
            <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">
              {bankStat.totalMemberCnt / 1000}K
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              고객 수 증가
            </p>
          </div>
        </div>
        <div>
          <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
            <svg
              className="w-2.5 h-2.5 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13V1m0 0L1 5m4-4 4 4"
              />
            </svg>
            {(Math.random() * 100).toFixed(3)}%
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <dl className="flex items-center">
          <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">
            수익:
          </dt>
          <dd className="text-gray-900 text-sm dark:text-white font-semibold">
            {bankStat.totalDepositAmount !== null &&
            bankStat.totalWithdrawAmount !== null
              ? bankStat.totalDepositAmount - bankStat.totalWithdrawAmount
              : "0"}
          </dd>
        </dl>
        <dl className="flex items-center justify-end">
          <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">
            이익율:
          </dt>
          <dd className="text-gray-900 text-sm dark:text-white font-semibold">
            {bankStat.totalDepositAmount !== null &&
            bankStat.totalWithdrawAmount !== null
              ? (
                  bankStat.totalDepositAmount / bankStat.totalWithdrawAmount
                ).toFixed(4) + "%"
              : "0"}
          </dd>
        </dl>
      </div>
      <div id="column-chart"></div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          {/* Button */}
          <button className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white">
            지난 {bankStat.totalTransactionList.length} 일
          </button>
        </div>
      </div>
    </div>
  );
};
