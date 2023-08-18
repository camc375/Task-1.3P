<template>
  <div class="['app', bgClass]">
    <header>
      <div class="header-content">
        <div class="logo-wrapper">
          <img alt="Portfolio Pic" class="logo" src="@/assets/profile_pic.jpeg" width="160" height="160" />
        </div>
    
        <div class="header-title">
          <h1> Cameron Crabb </h1>
        </div>

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/projects">Projects</RouterLink>
          <RouterLink to="/contacts">Contact Details</RouterLink>
          <RouterLink to="/about">About Cameron</RouterLink>
        </nav>
      </div>
    </header>
      <div class="content-wrapper">
        <RouterView />
      </div>
        
    
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  min-height: 100vh;

}

.header-content {
  text-align: center;
  padding: 1rem 0;
}

.logo-wrapper {
  display: flex;
  justify-content: center; 
  align-items: center;
}

.logo {
  display: flex;
  max-width: 100%; 
  height: auto;
  margin-bottom: 20px;
  text-align: center;
}

.header-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.content-wrapper {
  display: flex;
  justify-content: center; 
  align-items: center; 
  flex-grow: 1;
}

</style>
