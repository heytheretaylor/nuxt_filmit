<script setup>
const checkbox = ref(null)
const sidebarMenu = ref(null)
function setOrToggleMenu(bool){
  if(bool === true || bool === false) {
    checkbox.value.checked = bool
    return
  }
  checkbox.value.checked = !checkbox.value.checked

}
onMounted(()=> {
	document.addEventListener('click', (e) => {
		const isNotElementOrDecentant = (!sidebarMenu.value.contains(e.target) && sidebarMenu.value !== e.target && checkbox.value !== e.target)
		console.log(e.target, isNotElementOrDecentant)
		if(checkbox.value.checked && isNotElementOrDecentant) {
			setOrToggleMenu(false)
		} 
	})
})
</script>

<template>
<nav id="main-menu">
  <SideNav></SideNav>
	<!-- <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Store</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul> -->
</nav>

<input type="checkbox" ref="checkbox" id="hamburger-input" class="burger-shower" />
<label id="hamburger-menu" ref="sidebarMenu" for="hamburger-input">
  <div class="relative pl-5">
    <SideNav id="sidebar-menu"></SideNav>
  </div>
</label>

<div class="overlay"></div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');

/* body {
  padding: 0px;
  margin: 0px;
  font-size: 20px;
  min-height: 200vh;
  font-family: 'Cabin', Sans-serif;
} */

.overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    transition: opacity .35s, visibility .35s, height .35s;
    overflow: hidden;
    background: black;
    z-index: -1;
}

/* #main-menu {
  display: block;
  height: 100px;
  width: 100%;
  background: transparent;
  margin: 0px;  
  z-index: 9;
} */

#main-menu ul {
  max-width: 800px;
  width: 100%;
  height: 100%;
  margin: 0px auto;
  padding: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 9;
}

#main-menu li {
  list-style-type: none;
  font-size: 2rem;
}

#main-menu a {
  color: #B9FAF8;
  font-size: 1.5rem;
  text-decoration: none;
}

#main-menu a:hover {
  text-decoration: underline;
}

#hamburger-input{
  display: none;
}

#hamburger-menu {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 40px;
    height: 30px;
    display: none;
    border: none;
    padding: 0px;
    margin: 0px;
    font-family: 'Cabin', Sans-serif;
    background: linear-gradient(
      to bottom, 
      white, white 20%, 
      transparent 20%, transparent 40%, 
      white 40%, white 60%, 
      transparent 60%, transparent 80%, 
      white 80%, white 100%
    );
}

#hamburger-menu #sidebar-menu {
    visibility: hidden;
    position: fixed;
    top: 0;
    left: -250px;
    width: 200px;
    height: 100%;
    background-color: black;
    transition: 0.3s;
    padding: 0px 10px;
    box-sizing: border-box;
}

#hamburger-menu h3 {
  color: #B9FAF8;
  font-size: 2.2rem;
}

#hamburger-menu ul {
  padding-left: 0px;
}

#hamburger-menu li {
  list-style-type: none;
  line-height: 3rem;
}

#hamburger-menu a {
  color: #B9FAF8;
  font-size: 1.3rem;
  text-decoration: none;
}

#hamburger-menu a:hover {
  text-decoration: underline;
}

#hamburger-input:checked + #hamburger-menu #sidebar-menu {
    visibility: visible;
    left: 0;
}
#hamburger-input:checked ~ .overlay{
	visibility: visible;
  opacity: 0.4;
}
#hamburger-input:checked + #hamburger-menu{
	visibility: hidden;
}

@media screen and (max-width: 750px) {
  #main-menu {
    display: none;
  }
  #hamburger-menu {
    display: inline;
  }
}
</style>