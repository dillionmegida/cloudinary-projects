<script>
	import { CldImage } from "svelte-cloudinary";
  import { onMount } from 'svelte';
	import "../lib/styles.css";

  onMount(() => {
    function cleanup() {
      const customImages = document.querySelectorAll('.custom-image img');

      customImages.forEach(image => {
        image.addEventListener('load', () => {
          console.log(image.parentElement)
          image.parentElement?.classList.remove('loading-indicator')
        });
      });
    }

    cleanup()

    return () => {
      cleanup();
    };
  });

  const demoImage = {
    truck: {
      src: 'demo/car.webp',
      alt: 'Teal colored truck in a desert'
    },
    "white-sneaker": {
      src: 'demo/white-adidas-sneaker.jpg',
      alt: 'White Adidas sneaker'
    },
    "red-sneaker": {
      src: 'demo/red-nike-sneaker.jpg',
      alt: 'Red Nike sneaker'
    }
  }

  const currentImageKey = 'red-sneaker'
</script>

<div class="container">
	<h1>AI Background Removal</h1>
	<p>Remove backgrounds from images using AI</p>  

	<div class="images-column">
		<div>
			<span class="image-label">Original</span>
			<div class="image-container">
				<CldImage
					src={demoImage[currentImageKey].src}
					width="800"
					height="800"
					alt={demoImage[currentImageKey].alt}
				/>
			</div>
		</div>
		<div>
			<span class="image-label">Bg Removed</span>
			<div class="image-container custom-image loading-indicator">
				<CldImage
					src={demoImage[currentImageKey].src}
					width="800"
					height="800"
					alt={demoImage[currentImageKey].alt}
					removeBackground={true}
				/>
			</div>
		</div>
	</div>
  

		<!-- <div>
			<span class="image-label">Original</span>
			<div class="image-container">
				<CldImage
					src={demoImage[currentImageKey].src}
					width="800"
					height="600"
					alt={demoImage[currentImageKey].alt}
					gravity="auto"
					crop="fill"
				/>
			</div>
		</div>
		<div>
			<span class="image-label">Bg Removed</span>
			<div class="image-container">
				<CldImage
					src={demoImage[currentImageKey].src}
					width="800"
					height="600"
					alt={demoImage[currentImageKey].alt}
					removeBackground={true}
					gravity="auto"
          crop="fill"
				/>
			</div>
		</div> -->
	<!-- </div> -->
</div>