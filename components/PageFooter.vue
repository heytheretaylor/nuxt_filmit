<template>
	<footer id="contact" class="">
		<div class="w-full md:rounded-t-chungus rounded-t-4xl bg-gray-200 lg:pt-20 pt-8 pb-8 grid grid-cols-10">
			<div 
			class="
			row-span-1 
			col-start-1
			col-end-12
			md:col-end-9 
			justify-self-center
			md:justify-self-end 
			text-black 
			font-['Poppins-SemiBold']
			md:text-[100px]
			text-6xl">Contact</div>
			<p class="row-span-1 mt-4 lg:col-start-6 lg:col-end-9 md:col-start-6 col-start-2 col-end-10 justify-self-end text-black">
				Drop us a line with your name and company, and we'll get back to you within 24 hours to discuss how Filmit.xyz can help your business grow.
			</p>
			<form class="row-span-1 mt-6 text-step--1 lg:col-start-6 lg:col-end-9 md:col-start-6 col-start-2 col-end-10 flex flex-col gap-2" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
				<p>
					<label class="flex">
						<span class="w-24 flex justify-center py-2 bg-orange-400">Name</span>
						<input class="flex-1" type="text" name="name" />
					</label>
				</p>
				<p>
					<label class="flex">
						<span class="w-24 flex justify-center py-2 bg-orange-400">Company</span>
						<input class="flex-1" type="text" name="company" />
					</label>
				</p>
				<p>
					<label class="flex">
						<span class="w-24 flex justify-center py-2 bg-orange-400">Email</span>
						<input class="flex-1" type="email" name="email" />
					</label>
				</p>
				<p class="flex justify-end mt-2">
					<button class="w-24 flex justify-center py-2 bg-orange-400" type="submit">Send</button>
				</p>
			</form>
			<form
	name="Website Contact Form"
	method="post"
	action="/success"
	data-netlify="true"
	data-netlify-honeypot="bot-field"
>
	<input type="hidden" name="form-name" value="Website Contact Form" />
	<p hidden>
		<label>Don't fill this out: <input name="bot-field" /></label>
	</p>

	<!-- Add your form inputs here -->
</form>
		</div>
	</footer>
</template>
