<template>
	<main id="root" class="w-full">
			<LandingHero is-black>
				<!-- <SideNav/> -->
				<ResponsiveHamburger></ResponsiveHamburger>
				<div class="flex text-white flex-col my-auto justify-center items-center">
					<h1>{{ currentCopy.head }}</h1>
					<h3 v-for="text in currentCopy.body">{{ text }}</h3>
				</div>
				<BoxNav></BoxNav>
			</LandingHero>
		<slot></slot>
		<LandingFooter></LandingFooter>

	</main>
</template>
<script setup>
const route = useRoute()
const copy = {
	index: {
		head: "we're filmit.xyz",
		body: ["we make videos, design stuff, and really enjoy it.", "most of the time we call ourselves an agency"]
	},
	about: {
		head: "about Filmit.xyz",
		body: ["Curious about the faces behind the screen at Filmit.xyz? Let's get acquainted!"]
	},
	services: {
		head: "Filmit.xyz services",
		body: ["Discover how Filmit.xyz can bring your brand to life with our range of creative and digital services."]
	}
	
}
const currentCopy = computed(()=> {
	return copy[route.name] ? copy[route.name] : copy.index
})
// console.log(route)
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);	
}
body{
		/* width: 100vw; */
		scroll-behavior: smooth !important;
		overflow-x: hidden;
		margin: 0;
		background-color: black;
		color: white;
		font-family: 'Poppins-Regular', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}
	h1{
		font-size: clamp(1.0rem, 4.5rem, 12rem);
		display: inline;
		color: white;
		font-family: 'Poppins-Bold';
	}
	h2{
		font-size: 3.75rem;
		display: inline;
		color: white;
		font-family: 'Poppins-Bold';
	}
	h3{
		font-weight: 300;
	}
	.ui-button{
		z-index: 10;
    outline: 2px solid transparent;
    outline-offset: 2px;
	}

</style>