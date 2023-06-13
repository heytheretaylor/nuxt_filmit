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
	<nav class="w-max">
		<ul>
			<li v-for="link in links" class="transition-transform hover:translate-x-6 mb-2">
				<NuxtLink class="mix-blend-difference text-white" :to="link.to">{{ link.title }}</NuxtLink>
			</li>
			<li class="transition-transform hover:translate-x-6 mb-2">
				<a @click="scrollTo">Conttact</a>
			</li>
		</ul>
	</nav>
</template>
<style>
	.diff{
		mix-blend-mode: difference;
		color: white;
		/* z-index: 10; */
	}
	li .router-link-active{
		background: var(--rn-orange)
	}
</style>