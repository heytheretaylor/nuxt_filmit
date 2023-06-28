<script setup>
const links = [
		{to: '/', title: 'Home'},
		{to: '/services', title: 'Services'},
		{to: '/work', title: 'Our Work'},
		{to: '/about', title: 'About Us'},
		{to: '#contact', title: 'Contact'}
	]
</script>
<template>
	<nav class="z-10 fixed left-4 top-8 h-min w-max mix-blend-difference">
		<ul>
			<li v-for="link in links.slice(0,-1)" class="transition-transform hover:translate-x-6 mb-2">
				<NuxtLink class="mix-blend-difference text-white" :to="link.to">{{ link.title }}</NuxtLink>
			</li>
			<li>
				<a :href="links.at(-1).to">{{links.at(-1).title }} bob</a>
			</li>
		</ul>
	</nav>
</template>
<style scoped>
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
	.diff{
		mix-blend-mode: difference;
		color: white;
		/* z-index: 10; */
	}
	li a{
		font-family: 'Inter', sans-serif;
	}
	li .router-link-active{
		background: var(--rn-orange)
	}
</style>