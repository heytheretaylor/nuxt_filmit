<template>
	<footer>
		<div class="w-full rounded-t-chungus bg-gray-200 py-28 px-48 grid gap-4 grid-cols-10 grid-rows-contact">
			<div class="row-span-1 col-end-11 justify-self-end text-black font-['Poppins-SemiBold'] text-[100px]">Contact</div>
			<p class="row-span-1 col-start-8 col-end-11 justify-self-end">
				Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim.
			</p>
			<form class="row-span-1 col-start-8 col-end-11 flex flex-col gap-2" id="contact" name="contact" data-netlify="true">
				<p>
					<label class="flex">
						<span class="w-24 flex justify-center py-2 bg-orange-400">Name</span>
						<input class="flex-1" type="text" name="name" />
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
			<!-- <div class="row-span-4 col-start-6">btt</div> -->
		</div>
	</footer>
</template>
