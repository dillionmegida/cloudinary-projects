<script>
	import "../lib/styles.css";
  import { generativeFill } from '@cloudinary/url-gen/qualifiers/background';
  import { Cloudinary } from '@cloudinary/url-gen';
  import { pad } from "@cloudinary/url-gen/actions/resize";
  import { CldImage } from "svelte-cloudinary";

  // const cld = new Cloudinary({
  //   cloud: { cloudName: 'dillionmegida' }
  // });

// Example of how to use generative fill with a CldImage component


  const demoImage = {
    "forest-man": {
      src: 'demo/forest-man.jpg',
      alt: 'A man standing in a forest',
    },
    "nice-red-shoe": {
      src: 'demo/nice-red-shoe.jpg',
      alt: 'A nice red shoe',
      vertical: true
    }
  }

  const currentImageKey = 'nice-red-shoe'

//   const myImage = cld.image(demoImage[currentImageKey].src).resize(
//   pad()
//     .height(1600)
//     .width(900)
//     .background(generativeFill().prompt('A futuristic cityscape'))
// ).toURL();
</script>

<div class="container">
	<h1>AI Generative Fill</h1>
	<p>Fill images using Cloudinary AI</p>

	<div class="images-column">
    <div class="image-container">
      <div>
        <CldImage
        width={1080}
        height={1920}
        alt={demoImage[currentImageKey].alt}
        src={demoImage[currentImageKey].src}
        fillBackground
        crop='pad'
        />  
          <!-- <img class={demoImage[currentImageKey].vertical ? 'vertical' : ''} src={myImage} alt={demoImage[currentImageKey].alt} /> -->
      </div>
    </div>
	</div>
</div>
