<template>
	<div class="relative">
		<video ref="videoPlayer" autoplay loop muted class="h-full w-full object-cover transition-opacity duration-300 pointer visible opacity-100">
			<!-- <source :src="videoUrl"> -->
			<slot></slot>
		</video>
		<VideoPlayPause :is-playing="isPlaying" @toggle="togglePlay"></VideoPlayPause>
</div>
</template>
<script setup>
// const props = defineProps({
// 	src:{
// 		type: String,
// 		required: true
// 	}
// })
// const videoUrl = computed(() => {
// 	return new URL(props.src, import.meta.url)
// })
const videoPlayer = ref(null)
const isPlaying = ref(true)
function togglePlay(){
	isPlaying.value = videoPlayer.value.paused
	isPlaying.value ? videoPlayer.value.play() : videoPlayer.value.pause()
}
</script>