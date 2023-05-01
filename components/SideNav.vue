<script setup>
const links = [
		{to: '/', title: 'Home'},
		{to: '/services', title: 'Services'},
		{to: '/work', title: 'Our Work'},
		{to: '/about', title: 'About Us'},
		{to: '/contact', title: 'Contact'}
	]
</script>
<template>
	<nav>
		<ul>
			<li v-for="link in links" class="transition-all hover:translate-x-6">
				<NuxtLink :to="link.to">{{ link.title }}</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
<style>

</style>