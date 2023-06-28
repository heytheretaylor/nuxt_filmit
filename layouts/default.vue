<template>
	<main id="root" class="w-full">
			<PageHero is-black>
				<!-- <SideNav/> -->
				<ResponsiveHamburger></ResponsiveHamburger>
				<div class="hero-wrapper flex text-white flex-col my-auto justify-center items-center">
					<h1>{{ currentCopy.head }}</h1>
					<h3 v-for="text in currentCopy.body">{{ text }}</h3>
				</div>
				<BoxNav></BoxNav>
			</PageHero>
		<slot></slot>
		<PageFooter></PageFooter>

	</main>
</template>
<script setup>
const route = useRoute()
const copy = {
	index: {
		head: "we're filmit.xyz",
		body: ["We make videos, design stuff, and really enjoy it."," Most of the time we call ourselves an agency.","Scroll down to see more."]
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
/* .page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);	
} */

	.ui-button{
		z-index: 10;
    outline: 2px solid transparent;
    outline-offset: 2px;
	}
	.hero-wrapper{
		width: min(100% - 3rem, 90ch);
		
	}
</style>