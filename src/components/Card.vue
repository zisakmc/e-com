<template>
	<div class="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg  bg-gray-200 shadow-lg">
		<div>
			<img src="https://source.unsplash.com/random/100x100/?5" alt="" class="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500">
			<h2 class="mb-1 text-xl font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
			<p class="text-sm text-black">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
		</div>
		<div class="flex flex-wrap justify-between">
			<div class="space-x-2">
				<button aria-label="Share this post" type="button" class="p-2 text-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current text-black">
						<path d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
					</svg>
				</button>
				<button aria-label="Bookmark this post" type="button" class="p-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-4 h-4 fill-current text-black">
						<path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
					</svg>
				</button>
                <button aria-label="add to cart" type="button" class="p-2 text-center">
                <svg>
                    
                </svg>    
                Add</button>
			</div>
		</div>
	</div>
</template>