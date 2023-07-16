import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { db } from "../firebaseConfig";

const Visualisasi = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    // Ambil data dari Firebase dan simpan ke dalam state chartData
    const fetchData = async () => {
      try {
        const dataRef = await db.collection("data").get();
        const data = dataRef.docs.map((doc) => doc.data());

        // Menyiapkan data dan konfigurasi untuk visualisasi
        const chartData = {
          labels: data.map((item) => item.label),
          datasets: [
            {
              label: "Data",
              data: data.map((item) => item.value),
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
          ],
        };

        setChartData(chartData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Visualisasi Data</h1>
      {Object.keys(chartData).length > 0 ? (
        <Bar data={chartData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Visualisasi;
