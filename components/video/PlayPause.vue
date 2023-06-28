<template>
	<div class="absolute bg-black text-white hover:bg-white hover:text-black bottom-gutter right-gutter z-50">
		<button aria-label="Play video" 
		class="
		relative 
		xs:pb-3 
		xs:pt-3 
		lg:pt-3
		lg:pb-3 
		xxl:pt-8 
		xxl:pb-10 
		border 
		border-primary 
		active:border-primary 
		active:bg-primary 
		active:text-primary 
		w-44
		xs:w-10
		flex 
		xs:px-0 
		justify-center 
		md:w-auto 
		md:px-8 
		z-[300]" 
		@click="toggle"
		type="button" 
		aria-hidden="true">
			<span class="flex items-center justify-center">
				<svg 
				fill="none" 
				xmlns="http://www.w3.org/2000/svg" 
				viewBox="0 0 16 16" 
				class="
				flex 
				md:mt-0 
				f-ui-1 
				lg:mt-1 
				md:-ml-4" 
				style="width: 1em; height: 1em;">
					<polygon fill="currentColor" points="2 2 14 8 2 14 2 2">

					</polygon>
				</svg>
				<span class="ml-8 xs:hidden md:inline f-ui-1">{{props.isPlaying ? 'Pause': 'Play'}} video</span>
			</span>
		</button>
	</div>
</template>
<script setup>
// import { emit } from 'process';
const props = defineProps({
	isPlaying: {
		type: Boolean,
		require: true
	}
})
const emit = defineEmits(['toggle'])
function toggle(){
	emit('toggle')
}
</script>
<style>
.bottom-gutter{
	bottom: 2rem
}
.right-gutter{
	right: 2rem
}
</style>