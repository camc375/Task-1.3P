<template>
    <div class="about-container">
      <div class="about-general-info">
        <h3>General Information</h3>
        <p>I am a student at Deakin University studying a Bachelor's of Cyber Security. I have a passion for coding and programming, as well as learning about all things technical in nature. In my spare time, I like to play video games and board games, read, and occasionally head to the beach for a surf.</p>
      </div>
      <div class="resume-link">
        <h3>Resume</h3>
        <a :href="resumePdf" target="_blank">Download Resume (PDF)</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        resumePdf: "src/assets/CamCrabb_resume.pdf"
      };
    }
  };
  </script>
  
  <style scoped>
  .about-container {
    text-align: center;
    padding: 20px;
  }
  
  .about-general-info, .resume-link {
    margin-bottom: 20px;
  }
  
  .resume-link a {
    font-size: 1.5rem; 
    color: #007BFF;
    text-decoration: none;
  }
  
  .resume-link a:hover {
    text-decoration: underline;
  }
  </style>
  