<script setup>
const links= [
	{color: 'orange', tagLines: ['Our Strategy', 'Good Marketing']},
	{color: 'blue', tagLines: ['Who we are', 'The Team']},
	{color: 'red', tagLines: ['Campaigns', 'Our Clients']}
]
</script>
<template>
	<nav class="absolute flex justify-end items-end bottom-0 right-0 sm:w-full max-h-32">
		<a class="sm:flex-1 md:flex-none cursor-pointer" v-for="link in links">
			<div class="p-3 select-none transition-all ease-in-out delay-150 duration-300 max-h-16 h-20 hover:max-h-20" :style="{'background-color': `var(--rn-${link.color})`}">
				<div v-for="line in link.tagLines">{{ line }}</div>
			</div>
		</a>
	</nav>
</template>

<style scoped>

</style>