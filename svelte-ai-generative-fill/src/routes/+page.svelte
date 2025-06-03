<script>
	import "../lib/styles.css";
  import { CldImage } from "svelte-cloudinary";

  import { onMount } from 'svelte';
onMount(() => {
    function cleanup() {
      const images = document.querySelectorAll('img');

      images.forEach(image => {
        image.addEventListener('load', () => {
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
    "man_standing_with_a_backpack": {
      src: 'demo/man_standing_with_a_backpack.avif',
      alt: 'A man with a backpack',
      vertical: false
    },
    "buildings": {
      src: 'demo/white_buildings.avif',
      alt: 'Buildings',
      vertical: true
    }
  }

  const currentImageKey = 'man_standing_with_a_backpack'

  const targetImage = demoImage[currentImageKey]

  const aspectRatio = {
    width: targetImage.vertical ? 1080 : 1920,
    height: targetImage.vertical ? 1920 : 1080,
  }
</script>

<div class="container">
	<h1>AI Generative Fill</h1>
	<p>Fill images using Cloudinary AI</p>

    <div class="image-container">
      <div
        class='image-wrapper loading-indicator'>
        <CldImage
        
        width={aspectRatio.width}
        height={aspectRatio.height}
        alt={demoImage[currentImageKey].alt}
        src={demoImage[currentImageKey].src}
        fillBackground
        crop='pad'
        class={targetImage.vertical ? 'vertical' : ''}
        />  
          <!-- <img class={demoImage[currentImageKey].vertical ? 'vertical' : ''} src={myImage} alt={demoImage[currentImageKey].alt} /> -->
      </div>
	</div>
</div>
