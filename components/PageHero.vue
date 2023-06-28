<template>

	<section class="full-sec h-screen w-full items-center flex flex-col" :class="classes">
		<slot></slot>
	</section>
	
</template>
<script setup>
const props = defineProps({
	isBlack:{
		type: Boolean,
		default: false
	}
})
const classes = computed(()=>{
	return [props.isBlack ? 'text-white bg-black': 'text-black bg-white']
})
</script>