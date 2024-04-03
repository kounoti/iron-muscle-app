// "use client";

// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
// import { supabase } from "src/utils/supabaseClient";
// import "chartjs-adapter-moment";
// import {
//   Chart,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   TimeScale,
// } from "chart.js";
// import annotationPlugin from "chartjs-plugin-annotation";

// Chart.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   annotationPlugin,
//   TimeScale
// );

// const BodyWeightChart = ({ account }) => {
//   const [weightData, setWeightData] = useState([]);
//   const [dateData, setDateData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data, error } = await supabase
//           .from("posts")
//           .select("date", "bodyWeight")
//           .eq("account", account)
//           .order("date", { ascending: true });

//         if (error) {
//           throw error;
//         }

//         if (data) {
//           const dates = data.map((entry) => entry.date);
//           const weights = data.map((entry) => entry.bodyWeight);

//           setWeightData(weights);
//           setDateData(dates);
//         }
//       } catch (error) {
//         console.error("Error fetching weight data:", error.message);
//       }
//     };

//     fetchData();
//   }, [account]);

//   const chartData = {
//     labels: dateData.map((date) => new Date(date)), // dateDataをDateオブジェクトの配列に変換
//     datasets: [
//       {
//         label: "体重",
//         data: weightData, // 修正なし
//         fill: false,
//         borderColor: "rgb(75, 192, 192)",
//         tension: 0.1,
//       },
//     ],
//   };

//   const chartOptions = {
//     scales: {
//       x: {
//         type: "time", // x軸を時系列として扱う
//         time: {
//           unit: "day",
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: "体重 (kg)",
//         },
//         min: 0, // 修正: 縦軸の最小値を0に設定
//         max: 100, // 修正: 縦軸の最大値を100に設定
//       },
//     },
//   };

//   return (
//     <div>
//       <h2>体重推移グラフ</h2>
//       <Line data={chartData} options={chartOptions} />
//     </div>
//   );
// };

// export default BodyWeightChart;
