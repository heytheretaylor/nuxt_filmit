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
				<VideoPlayer>
					<source src="~assets/video/hero.mp4">
				</VideoPlayer>
				<div class="h-40 relative flex flex-col items-center">
					<div class="w-fit">

						<div class="text-5xl font-bold bg-black text-white -mt-8 p-3">This is one of those videos</div>
						<div class="text-right mt-4">It should be simple, clients should enjoy and love the process.</div>
						<div class="text-right">That's where we come in.</div>
					</div>
				</div>
			</LandingSection>
			<LandingSection>
				<img style="width: 100%; height: auto" src="~assets/img/design.jpg">
				<div class="h-40 relative flex flex-col items-end">
					<div class="w-max">

						<div class="text-5xl font-bold bg-black text-white p-3">This is one of those videos</div>
						<div class="text-right">It should be simple, clients should enjoy and love the process.</div>
						<div class="">That's where we come in.</div>
					</div>
				</div>
			</LandingSection>
		<!-- <section>
			<img src="~assets/img/ladder.jpg">
		</section> -->
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