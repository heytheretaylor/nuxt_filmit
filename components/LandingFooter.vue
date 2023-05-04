<template>
	<footer>
		<div class="w-full rounded-t-chungus bg-gray-200 py-40 px-48 grid gap-4 grid-cols-10 grid-rows-contact">
			<div class="row-span-1 col-end-11 justify-self-end text-black text-[150px]">Contact</div>
			<p class="row-span-1 col-start-8 col-end-11 justify-self-end">
				We can't wait to hear from you. Let us know what projects you'd like to get started.
			</p>
			<form  class="row-span-1 col-start-8" id="contact" name="contact" netlify>
				<p>
					<label>Name <input type="text" name="name" /></label>
				</p>
				<p>
					<label>Email <input type="email" name="email" /></label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
			<!-- <div class="row-span-4 col-start-6">btt</div> -->
		</div>
	</footer>
</template>