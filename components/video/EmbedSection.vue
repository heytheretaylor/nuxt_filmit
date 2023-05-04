<template>
	<section>

		<slot></slot>
		<div>{{ props.title }}</div>
	</section>
</template>
<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true
	}
})
</script>