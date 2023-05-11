<template>
	<section class="w-full">
		<div 
		style="padding:56.25% 0 0 0;position:relative;"
		>
			<iframe 
				:src="src" 
				frameborder="0" 
				allow="autoplay; fullscreen; picture-in-picture" 
				allowfullscreen 
				style="position:absolute;top:0;left:0;width:100%;height:100%;" 
				:title="props.title"
				>
			</iframe>
		</div>

		<div>{{ props.title }}</div>
	</section>
</template>
<script setup>
const props = defineProps({
	title: {
		type: String,
		required: true
	},
	videoId: {
		type: String,
		required: true
	}
})
const src = computed(()=> {
	return `https://player.vimeo.com/video/${props.videoId}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`
})
// onMounted(() => {
// 	player.value = new Player(videoContainer.value, {id: props.videoId})
// 	})
</script>