<template>
  <div class="project-details">
    <h2 class="project-name">{{ project.name }} - {{ project.date }}</h2>
    <p class="project-description">{{ project.description }}</p>
    <img :src="project.image" :alt="project.name" class="project-image"/>
  </div>
</template>

<script>
export default {
  name: "Projects",
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.project-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.project-name {
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
}

.project-description {
  white-space: pre-wrap;
  margin-bottom: 20px;
  text-align: center;
}

.project-image {
  max-width: 100%; 
  height: auto;
  margin-bottom: 20px;
  text-align: center;
}
</style>
