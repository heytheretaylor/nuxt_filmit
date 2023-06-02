<template>
	<figure class="w-[321px] h-[468px]">
		<img :src="imgUrl" alt="" srcset="">
		<figcaption class="flex flex-col">
			<div>
				{{ props.name }}

			</div>
			<div>
				{{ props.title }}
			</div>
		</figcaption>
	</figure>
</template>
<script setup>
const props = defineProps({
	img: {
		type: String,
		default: 'test'
	},
	name: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	}
})
const imgUrl = computed(()=>{
	return props.img ? props.img : '/about/Max_Ridgeway.png'
})
</script>