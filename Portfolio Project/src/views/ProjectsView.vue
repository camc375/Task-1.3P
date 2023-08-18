<template>
  <div class="projects-container">
    <h2>Projects I've worked on and Programs I've been part of:</h2>
    <select v-model="selectedProjectIndex" class="project-select">
      <option disabled value="-1">Select a project</option>
      <option v-for="(project, index) in projects" :key="index" :value="index">
        {{ project.name }}
      </option>
    </select>
    <Projects :project="selectedProject" v-if="selectedProject" />
  </div>
</template>

<script>
import Projects from "@/components/Projects.vue"; // Adjust the path as needed

export default {
  name: "ProjectsView",
  components: {
    Projects,
  },
  data() {
    return {
      projects: [
        {
          name: "Deakin Detonator Toolkit - Penetration Testing GUI",
          date: "20/03/2023 - Present",
          description: "The Deakin Detonator Toolkit is a react.js project that looks to implement the various penetration testing tools"+
          " available in Kali Linux into an easy to understand, user freindly GUI program that caters to both beginners and experienced users."+
          " My contributions on this particular project have included the implementation of the tools dnsenum, nbtscan, foremost, and msfvenom.",
          image: "src/assets/DDT_PT_GUI.jpg" 
        },
        {
          name: "VIT Chennai Data Analysis & Cyber Security program",
          date: "07/11/2022 - 16/12/2022",
          description: "I took part in the 2022 Data Analysis & Cyber Security program that was run virtually by VIT Chennai and K7 "+
          "Computing. The program covered a large range of data alysis techniques and how they could be used in the Cyber Security realm "+
          " to effectively pick up on malicious activity. Additionally, we worked with K7 computing on activities such as malware analysis, "+
          "both static and dynamic, and iformation gathering.",
          image: "src/assets/K7.jpg", 
        },
        {
          name: "SSL certificate dataset collection and analysis",
          date: "01/05/2023 - 25/05/2023",
          description: "I collected a data set of SSL certificates for the purposes of data analysis, specifically whether malicious "+
          "certificates could be accurately picked out of a large set of certificates using Decision Tree and Boosted Tree models. The "+
          "dataset i collected contained over 50,000 Clean/valid certificates and over 1000 malicious/invalid certificates, and I ran a "+
          "variety of tests on this data to prove that certain certificate fields could be used to accurately assess the" +
          "validity of a certificate.",
          image: "src/assets/SSL_cert-project.jpg", 
        },
        {
          name: "To Do App",
          date: "03/08/2023 - 16/08/2023",
          description: "I built a ToDo List web application capable of compiling a list of user inputted tasks in a list, which could then "+
          "be marked as completed or not, with different stylistic aspects depending on their status. This was one of my first forays into the "+
          "realm of Web Applications.",
          image: "src/assets/ToDo.jpg", 
        },
        
      ],
      selectedProjectIndex: -1,
    };
  },
  computed: {
    selectedProject() {
      return this.projects[this.selectedProjectIndex];
    },
  },
};
</script>

<style scoped>

.project-select {
  font-size: 1.75vw; 
  padding: 0.5vw; 
  margin-bottom: 2vw;
}
.projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
</style>
