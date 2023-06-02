<template>
	<div class="flex flex-col items-center my-10 mx-24">
		<!-- <SideNav></SideNav> -->
		<VideoEmbedSection v-for="video in videos" :title="video.title" :video-id="video.id">
		</VideoEmbedSection>
	</div>
</template>
<script setup>
	const videos = [
		{
			title: 'Bike Ride Test | Red Helium',
			id: '728611217?h=380144f2fe'
		},
		{
			title: 'Walking Sequence',
			id: "725880927?h=1675ccc83d"
		},
		{
			title: 'World Tour 3.0',
			id: "728923199?h=ae0bf44259"
		},
		{
			title: 'Charleston Aerials',
			id: "589119705?h=cbcf919dbd"
		}
	]
</script>