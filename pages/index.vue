<template>
	<div>
			<LandingSection>
				<template v-slot:media>
					<VideoPlayer>
						<source src="~assets/video/hero.mp4">
					</VideoPlayer>		
				</template>
				<LandingSectionBody white>
					<template v-slot:h>This is one of those videos</template>
					<template v-slot:b>
						<div class="text-right mt-2">It should be simple, clients should enjoy and love the process.</div>
						<div class="text-right">That's where we come in.</div>
					</template>
				</LandingSectionBody>
			</LandingSection>
			<LandingSection>
				<template v-slot:media>
					<VideoPlayer>
						<source src="~assets/video/mid.mp4">
					</VideoPlayer>		
				</template>
				<LandingSectionBody white pos="right">
					<template v-slot:h>Storytelling is key to any business</template>
					<template v-slot:b>
						<div>We bridge together your business with designs that transform imagination into innovation.</div>
					</template>
				</LandingSectionBody>
			</LandingSection>
			<LandingSection>
				<template v-slot:media>
					<VideoPlayer>
						<source src="~assets/video/final_section.mp4">
					</VideoPlayer>
				</template>
				<LandingSectionBody white pos="left">
					<template v-slot:h>We tell stories through media</template>
					<template v-slot:b>
						<div>Your business is your baby, let us document and tell the story</div>

					</template>
				</LandingSectionBody>
			</LandingSection>
		</div>
</template>
<script setup>
definePageMeta({
	middleware: (to, from ) => {
		console.log(to, from)
	},
  // pageTransition: {
  //   name: 'custom-flip',
  //   mode: 'out-in',
  //   onBeforeEnter: (el) => {
  //     console.log('Before enter...')
  //   },
  //   onEnter: (el, done) => {},
  //   onAfterEnter: (el) => {}
  // }
})
</script>
<style>

</style>