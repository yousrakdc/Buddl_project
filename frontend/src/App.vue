<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
:root {
  --primary-color: #8a2be2;
  --secondary-color: #7b68ee;
  --background-light: #ffffff;
  --background-dark: #1e1e1e;
  --text-light: #f4f4f4;
  --text-dark: #333;
  --card-bg-light: #f9f9f9;
  --card-bg-dark: #2d2d2d;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Arial", sans-serif;
  background-color: var(--background-light);
  color: var(--text-dark);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark-mode {
  background-color: var(--background-dark);
  color: var(--text-light);
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: var(--secondary-color);
}

button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: var(--secondary-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.grid {
  display: grid;
  gap: 20px;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  .grid {
    grid-template-columns: 1fr;
  }
}
</style>