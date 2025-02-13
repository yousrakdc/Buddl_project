<template>
  <div :class="{'dark-mode': isDarkMode}">
    <div class="header">
      <h1 class="title">
        <!-- Logo and title -->
        <img src="@/assets/logo.png" alt="Logo Buddl" class="logo" />
        Visualisation des données
      </h1>
      <!-- Toggle button for dark mode -->
      <button @click="toggleDarkMode" class="mode-toggle">
        {{ isDarkMode ? 'Mode Clair' : 'Mode Sombre' }}
      </button>
    </div>
    <div class="charts-wrapper">
      <!-- Bar chart -->
      <div class="chart-container">
        <h2>Graphique en barres (Ventes mensuelles)</h2>
        <canvas ref="barChart"></canvas>
      </div>
      <!-- Line chart -->
      <div class="chart-container">
        <h2>Graphique en courbe (Utilisateurs par âge)</h2>
        <canvas ref="lineChart"></canvas>
      </div>
      <!-- Pie chart -->
      <div class="chart-container">
        <h2>Graphique en camembert (Catégories)</h2>
        <canvas ref="pieChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Chart, registerables } from "chart.js";

export default {
  name: "App",
  data() {
    return {
      salesData: [],    // Sales data for bar chart
      usersData: [],    // User data for line chart
      categoriesData: [], // Categories data for pie chart
      isDarkMode: false, // Dark mode toggle state
    };
  },
  async mounted() {
    try {
      // Register chart.js components
      Chart.register(...registerables);
      await this.fetchData();
      this.$nextTick(() => {
        this.renderCharts(); // Render charts once data is fetched
      });
    } catch (error) {
      console.error("Erreur lors de l'initialisation :", error);
    }
  },
  methods: {
    // Fetch data from API
    async fetchData() {
      try {
        const response = await axios.get("http://localhost:5001/data");
        if (response.data && response.data.length > 0) {
          const data = response.data[0];
          this.salesData = data.sales || [];
          this.usersData = data.users || [];
          this.categoriesData = data.categories || [];
        } else {
          console.error("Les données reçues sont vides ou mal formatées.");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    },
    // Render all charts
    renderCharts() {
      try {
        if (this.salesData.length > 0) {
          // Bar chart
          new Chart(this.$refs.barChart, {
            type: "bar",
            data: {
              labels: this.salesData.map((s) => s.month),
              datasets: [
                {
                  label: "Revenu mensuel",
                  data: this.salesData.map((s) => s.revenue),
                  backgroundColor: this.createGradient(this.$refs.barChart, "rgb(173, 139, 247)", "rgb(133, 77, 255)"),
                  borderColor: "rgb(173, 139, 247)",
                  borderWidth: 1,
                  borderRadius: 10,
                  borderSkipped: false,
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                legend: { display: true, position: "top" },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    color: this.isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                  },
                },
                x: {
                  grid: {
                    color: this.isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                  },
                },
              },
              animation: {
                duration: 1000,
                easing: "easeInOutQuart",
              },
            },
          });
        }

        if (this.usersData.length > 0) {
          // Line chart
          new Chart(this.$refs.lineChart, {
            type: "line",
            data: {
              labels: this.usersData.map((u) => u.age),
              datasets: [
                {
                  label: "Nombre d'utilisateurs",
                  data: this.usersData.map((u) => u.count),
                  borderColor: "rgb(173, 139, 247)",
                  borderWidth: 2,
                  fill: true,
                  backgroundColor: this.createGradient(this.$refs.lineChart, "rgb(173, 139, 247)", "rgb(133, 77, 255)"),
                  tension: 0.4,
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                legend: { display: true, position: "top" },
              },
              scales: {
                y: {
                  beginAtZero: true,
                  grid: {
                    color: this.isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                  },
                },
                x: {
                  grid: {
                    color: this.isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                  },
                },
              },
              animation: {
                duration: 1000,
                easing: "easeInOutQuart",
              },
            },
          });
        }

        if (this.categoriesData.length > 0) {
          // Pie chart
          new Chart(this.$refs.pieChart, {
            type: "pie",
            data: {
              labels: this.categoriesData.map((c) => c.name),
              datasets: [
                {
                  label: "Répartition des catégories",
                  data: this.categoriesData.map((c) => c.value),
                  backgroundColor: [
                    this.createGradient(this.$refs.pieChart, "rgb(173, 139, 247)", "rgb(133, 77, 255)"),
                    this.createGradient(this.$refs.pieChart, "#ff7f50", "#ff4500"),
                    this.createGradient(this.$refs.pieChart, "#20b2aa", "#008080"),
                  ],
                  borderColor: this.isDarkMode ? "#2d2d2d" : "#ffffff",
                  borderWidth: 2,
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                legend: { display: true, position: "top" },
              },
              animation: {
                duration: 1000,
                easing: "easeInOutQuart",
              },
            },
          });
        }
      } catch (error) {
        console.error("Erreur lors du rendu des graphiques :", error);
      }
    },
    // Toggle dark mode
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      this.renderCharts(); // Re-render charts to apply dark/light mode
    },
    // Create gradient color for charts
    createGradient(chart, color1, color2) {
      const ctx = chart.getContext("2d");
      const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);
      return gradient;
    },
  },
};
</script>

<style>
/* Importing Google font */
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;700&display=swap');

/* Root variables for color scheme */
:root {
  --primary-color: rgb(133, 77, 255); /* dark violet */
  --secondary-color: rgb(173, 139, 247); /* light violet */
  --background-light: #ffffff;
  --background-dark: #1e1e1e;
  --text-light: #f4f4f4;
  --text-dark: #333;
  --card-bg-light: #f9f9f9;
  --card-bg-dark: #2d2d2d;
}

/* General page setup */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

body {
  font-family: 'Raleway', sans-serif;
  background-color: var(--background-light);
  color: var(--text-light);
  transition: background-color 0.3s ease, color 0.3s ease;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Dark mode styling */
.dark-mode {
  background-color: var(--background-dark);
  color: var(--text-light);
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header styles */
.logo {
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--primary-color);
  color: white;
  font-family: 'Raleway', sans-serif;
  font-weight: 700; 
}

/* Mode toggle button */
.mode-toggle {
  background-color: var(--secondary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.mode-toggle:hover {
  background-color: rgb(133, 77, 255);
}

/* Layout for charts */
.charts-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 20px;
  overflow-y: auto;
}

.chart-container {
  background-color: var(--card-bg-light);
  padding: 20px;
  border-radius: 10px;
  color: var(--text-dark);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.dark-mode .chart-container {
  background-color: var(--card-bg-dark);
  color: var(--text-light);
}

canvas {
  max-width: 100%;
  max-height: 300px;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

canvas:hover {
  transform: scale(1.02);
}

.chart-container:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive design */
@media (max-width: 768px) {
  .charts-wrapper {
    grid-template-columns: 1fr;
  }

  .header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
