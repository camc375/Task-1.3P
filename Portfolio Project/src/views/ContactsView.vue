<template>
    <div>
      <h1 class="contact-header">Contact Details</h1>
      <div class="contact-grid">
        <div class="contact-item top-left">
          <strong>Phone Number:</strong> 0416529329
        </div>
        <div class="contact-item top-right">
          <strong>Email Address:</strong> camcrabb1@gmail.com
        </div>
        <div class="contact-item bottom-left">
          <strong>LinkedIn:</strong>
          <a href="https://www.linkedin.com/in/cameron-crabb-207307234" target="_blank">
            https://www.linkedin.com/in/cameron-crabb-207307234
          </a>
        </div>
        <div class="contact-item bottom-right">
          <strong>Email Address 2:</strong> ccrabb@deakin.edu.au
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .contact-header {
  text-align: center;
  margin-bottom: 20px;
}
  .contact-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .contact-item {
    flex-basis: calc(50% - 20px);
    padding: 10px;
    border: 1px solid var(--color-border);
    background-color: var(--color-background-soft);
  }
  
  .top-left {
    align-self: flex-start;
  }
  
  .top-right {
    align-self: flex-start;
    text-align: right;
  }
  
  .bottom-left {
    align-self: flex-end;
  }
  
  .bottom-right {
    align-self: flex-end;
    text-align: right;
  }
  </style>
  