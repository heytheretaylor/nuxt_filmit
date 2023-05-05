<template>
	<main class="w-full">
			<LandingHero is-black>
				<SideNav/>
				<div class="flex text-white flex-col my-auto justify-center items-center">
					<h1>we're filmit.xyz</h1>
					<h3>we make videos, design stuff, and really enjoy it.</h3>
					<h3>most of the time we call ourselves an agency</h3>
				</div>
				<BoxNav></BoxNav>
			</LandingHero>
			<LandingSection>
				<template v-slot:media>
					<VideoPlayer>
						<source src="~assets/video/hero.mp4">
					</VideoPlayer>		
				</template>
				<LandingSectionBody>
					<template v-slot:h>This is one of those videos</template>
					<template v-slot:b>
						<div class="text-right mt-4">It should be simple, clients should enjoy and love the process.</div>
						<div class="text-right">That's where we come in.</div>
					</template>
				</LandingSectionBody>
			</LandingSection>
			<LandingSection>
				<template v-slot:media>
					<img style="width: 100%; height: auto" src="~assets/img/design.jpg">
				</template>
				<LandingSectionBody white pos="right">
					<template v-slot:h>Design is key to any business</template>
					<template v-slot:b>
						<div>We can do the heavy lifting, you can focus on the big picture.</div>
					</template>
				</LandingSectionBody>
			</LandingSection>
			<LandingSection>
				<template v-slot:media>
					<img style="width: 100%; height: auto" src="~assets/img/ladder.jpg">
				</template>
				<LandingSectionBody white pos="left">
					<template v-slot:h>We tell stories through media</template>
					<template v-slot:b>
						<div>Your business is your baby, let us document and tell the story</div>

					</template>
				</LandingSectionBody>
			</LandingSection>
		<LandingFooter></LandingFooter>
	</main>
</template>
<script setup>

</script>
<style>
	body{
		/* width: 100vw; */
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