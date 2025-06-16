<script>
	import { CldImage } from "svelte-cloudinary";
	import "../lib/styles.css";

  const demoImage = {
    "white-adidas-sneaker": {
      src: 'demo/white-adidas-sneaker.jpg',
      alt: 'White Adidas sneaker'
    },
    "plant-in-a-vase": {
      src: 'demo/plant-in-a-vase.jpg',
      alt: 'Plant in a vase'
    },
    "airspun-cream-with-flowers": {
      src: 'demo/airspun-cream-with-flowers.jpg',
      alt: 'Airspun cream with flowers'
    },
    "man_foggy_sky": {
      src: 'demo/man_foggy_sky.jpg',
      alt: 'Man in foggy sky'
    },
    "people_jumping": {
      src: 'demo/people_jumping.jpg',
      alt: 'People jumping'
    },
  }

  const currentImageKey = 'people_jumping'
</script>

<div class="container">
	<h1>AI Smart Cropping</h1>
	<p>Smart crop images using Cloudinary AI</p>

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
			<span class="image-label">Smart Cropped</span>
			<div class="image-container">
				<CldImage
					src={demoImage[currentImageKey].src}
					width="800"
					height="800"
					alt={demoImage[currentImageKey].alt}
          crop="auto" 
          gravity="faces"
				/>
			</div>
		</div>
	</div>
</div>
