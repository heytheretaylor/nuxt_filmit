<template>
	<div>
		<section class="flex flex-wrap justify-center m-24 gap-10">
			<Profile 
			v-for="profile in profiles" 
			:img="profile.img" 
			:name="profile.name" 
			:title="profile.title"></Profile>
		</section>
		<section class="m-16">
			<header class="flex justify-center mb-12">
				<h2 class="text-center xl:w-3/5"><p>The people are the real magic but here's more about us. </p><p>It's great for the SEO.</p></h2>
			</header>
			<div class="spiel">
				<p>At Filmit.xyz, we are a full-service creative agency that specializes in crafting effective brand strategies and delivering high-quality creative work that resonates with target audiences. Our mission is to help our clients grow their companies, culture, and brand through personalized solutions that achieve business goals and drive growth.</p>
				<p> We take a collaborative and customized approach to each client's needs, tailoring solutions to specific business objectives and target audiences. Our team of experienced professionals has the expertise to execute these strategies across digital channels in a way that drives results and meets business objectives.</p>
				<p>By partnering with Filmit, our clients can consolidate their creative and digital needs under one roof and achieve a cohesive and unified brand identity across all channels. Our range of services includes brand strategy, design, web development, commercial and digital video, social media management, and podcasting.</p>
				<p> At Filmit.xyz, we pride ourselves on our commitment to delivering high-quality work and outstanding customer service. Our goal is to build long-term partnerships with our clients, helping them achieve their business objectives and grow their brands.</p>
				<p> Contact us today to learn more about how we can help your business reach new heights.</p>
			</div>
		</section>
	</div>
</template>
<script setup>
const profiles = [
	{
		img: "/about/Max_Ridgeway.png",
		name: "Maxwell Ridgeway",
		title: "CEO & Founder"
	},{
img: '/about/Jayleen_Suliveres.png',
name: 'Jayleen Suliveres', 
title: 'COO'
},
{
img: '/about/Andrew_Hendrix.png',
name: 'Andrew Hendrix', 
title: 'Cinematorgrapher'
},
{
img: '/about/Marcus_Blair.png',
name: 'Marcus Blair', 
title: 'Sr. Editor'
},
{
img: '/about/Nikki_Csanyi.png',
name: 'Nikki Csanyi', 
title: 'Graphic Design | Photography'
},
{
img: '/about/Alex_Head.png',
name: 'Alex Head', 
title: 'Account Executive | Manager'
},
{
img: '/about/Joe_Micara.png',
name: 'Joe Micara', 
title: 'Advisory Board'
},
{
img: '/about/Tyler_Strand.png',
name: 'Tyler Strand', 
title: 'Content Producer'
},
{
img: '',
name: 'Taylor Mason', 
title: 'Development Advisor'
},
{
img: '',
name: 'Bill Sytsma', 
title: 'Advisory Board'
},
{
img: '',
name: 'David Shaw', 
title: 'Sound Engineer'
},
]
</script>
<style scoped>
	.spiel p{
		margin-bottom: 2.5rem;
	}
</style>