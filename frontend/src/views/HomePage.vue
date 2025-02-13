<template>
  <div class="home">
    <div class="logo-container">
      <img src="../assets/logo.png" alt="Buddl Logo" class="logo" />
    </div>
    <h1 class="welcome-text">Bienvenue</h1>
    <button @click="goToDataVisualization" class="cta-button">
      Voir les graphiques
    </button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
    goToDataVisualization() {
      this.$router.push("/data");
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background-light);
  color: var(--text-dark);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark-mode .home {
  background-color: var(--background-dark);
  color: var(--text-light);
}

.logo-container {
  margin-bottom: 20px;
}

.logo {
  width: 200px;
  height: auto;
}

.welcome-text {
  font-size: 4rem;
  margin-bottom: 40px;
}

.cta-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: var(--secondary-color);
}
</style>