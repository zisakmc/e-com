<template>

		<div class="flex  bg-gray-100 shadow-lg rounded-lg p-4">
			<div class="flex w-48 relative  justify-center"> 
				<img src="https://source.unsplash.com/random/100x100/?5" alt="" 

				class=" relative items-center object-cover
					    inset-0 h-full w-full mb-4
					   dark:bg-gray-500  rounded-md">
			</div>
			<form action="flex-auto p-6 pl-4">
				<div class="flex flex-wrap">
					<h2 class="flex-auto text-xl font-semibold pl-4">Nam cu platonem </h2>
					<div class="text-sm text-black pl-4 mt-1 font-semibold">
						10,239  
					</div>
					<div class="text-sm w-full text-yellow-400 font-semibold pl-4 ">
						vailable 
					</div>
					
				</div>

				<div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200 pl-4">
					<div class="space-x-2 flex text-sm font-bold">
						<label>
						<input class="sr-only peer" name="size" type="radio" value="xs" checked />
						<div class="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
							XS
						</div>
						</label>
						<label>
						<input class="sr-only peer" name="size" type="radio" value="s" />
						<div class="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
							S
						</div>
						</label>
						<label>
						<input class="sr-only peer" name="size" type="radio" value="m" />
						<div class="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
							M
						</div>
						</label>
						<label>
						<input class="sr-only peer" name="size" type="radio" value="l" />
						<div class="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
							L
						</div>
						</label>
						<label>
						<input class="sr-only peer" name="size" type="radio" value="xl" />
						<div class="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
							XL
						</div>
						</label>
					</div>
					</div>
					<div class="flex space-x-4 mb-5 text-sm font-medium">
					<div class="flex-auto flex space-x-4 pl-4">
						<button class="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white hover:bg-violet-500" type="submit">
						Buy now
						</button>
						<button class="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900 bg-violet-300" type="button">
						Add to bag
						</button>
					</div>
					<button class="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50 hover:text-sky-500 hover:animate-pulse" type="button" aria-label="Like">
						<svg width="20" height="20" fill="currentColor" aria-hidden="true">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
						</svg>
					</button>
					</div>
					<p class="text-sm text-slate-500 p-4">
					Free shipping on all the country.
					</p>

				</form>
		</div>
       
</template>