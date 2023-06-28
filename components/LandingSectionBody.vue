<template>
	<div :class="['relative flex flex-col', position]">
		<div class="w-fit -translate-y-10">
			<div :class="['text-5xl font-bold p-3', hColorClasses]">
				<slot name="h"></slot>
			</div>
			<div class="p-3">
				<slot name="b"></slot>

			</div>
			<!-- </p>			 -->
		</div>
	</div>
</template>
<script setup>
const props = defineProps({
	white: {
		type: Boolean,
		default: false
	},
	pos:{
		type: String,
		default: 'center'
	}
})

const hColorClasses = computed(() => {
	return props.white? 'bg-white text-black' : 'bg-black text-white'
})
const position = computed(()=> {
	switch (props.pos) {
		case 'center':
			return 'items-center'
		case 'right':
			return 'items-end'
		case 'left':
			return 'items-start'
	
		default:
			break;
	}
})
</script>