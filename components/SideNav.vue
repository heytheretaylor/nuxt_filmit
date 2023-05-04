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
			<li v-for="link in links" class="transition-all hover:translate-x-6 mb-2">
				<NuxtLink class="mix-blend-difference text-white" :to="link.to">{{ link.title }}</NuxtLink>
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
</style>