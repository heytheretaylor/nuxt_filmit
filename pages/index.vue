<template>
	<main class="">
		<!-- <section class="full-sec text-white bg-black flex"> -->
			<LandingSection is-black>

				<!-- <div class="fixed left-4 top-8 h-min w-max mix-blend-difference"> -->
					<SideNav/>
				<!-- </div> -->
				<div class="flex text-white flex-col my-auto justify-center items-center">
					<h1>we're filmit.xyz</h1>
					<h3>we make videos, design stuff, and really enjoy it.</h3>
					<h3>most of the time we call ourselves an agency</h3>
				</div>
				<BoxNav></BoxNav>
			</LandingSection>
		<!-- </section> -->
		<!-- <LandingSection> -->
			<div>
				<div class="relative">
					<video ref="videoPlayer" autoplay loop muted class="h-full w-full object-cover transition-opacity duration-300 pointer visible opacity-100">
						<source src="~assets/video/hero.mp4">
					</video>
					<VideoPlayPause :is-playing="isPlaying" @toggle="togglePlay"></VideoPlayPause>
				</div>
				<div class="h-40 relative flex flex-col items-center">
					<div class="w-fit">

						<div class="text-5xl font-bold bg-black text-white -mt-8 p-3">This is one of those videos</div>
						<div class="text-right mt-4">It should be simple, clients should enjoy and love the process.</div>
						<div class="text-right">That's where we come in.</div>
					</div>
				</div>
			</div>
		<!-- </LandingSection> -->
		<section>
			<img src="~assets/img/ladder.jpg">
		</section>
	</main>
</template>
<script setup>
const videoPlayer = ref(null)
const isPlaying = ref(true)
function togglePlay(){
	isPlaying.value = videoPlayer.value.paused
	isPlaying.value ? videoPlayer.value.play() : videoPlayer.value.pause()
}
</script>
<style>
	body{
		width: 100vw;
		overflow-x: hidden;
		margin: 0;
		background-color: white;
		font-family: 'Poppins-Regular', 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	}
	h1{
		font-size: 4.5rem;
		display: inline;
		color: white;
		font-family: 'Poppins-Bold';
	}
	h3{
		font-weight: 300;
	}
	.ui-button{
		z-index: 10;
    outline: 2px solid transparent;
    outline-offset: 2px;
	}
	/* .full-sec{
   width: 100vw;
	 height: 100vh;
	} */
</style>