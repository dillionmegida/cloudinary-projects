import {
  Cloudinary,
  CloudinaryImage,
  Transformation,
} from "@cloudinary/url-gen";
import { opacity } from "@cloudinary/url-gen/actions/adjust";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { image } from "@cloudinary/url-gen/qualifiers/source";
import { focusOn, autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import {
  crop,
  fill,
  scale,
  thumbnail,
} from "@cloudinary/url-gen/actions/resize";
import { cat, FocusOn, person } from "@cloudinary/url-gen/qualifiers/focusOn";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
});

// * import {Cloudinary} from "@cloudinary/url-gen";
// * import {autoGravity} from "@cloudinary/url-gen/qualifiers/gravity";
// * import {crop} from "@cloudinary/url-gen/actions/resize";
// * import {cat} from "@cloudinary/url-gen/qualifiers/focusOn";
// * import {AutoFocus} from "@cloudinary/url-gen/qualifiers/autoFocus";
// *
// * const yourCldInstance = new Cloudinary({cloud: {cloudName: 'demo'}});
// * const image = yourCldInstance.image('woman');
// * image.resize(crop().width(300).gravity(autoGravity().autoFocus(AutoFocus.focusOn(cat()))))

const demoImage = cld.image("overlay-demo/blue-shirt");
// const demoImage = cld.image("overlay-demo/white-shirt");

// demoImage.gravity('auto')
// demoImage.resize(thumbnail().width(1000).gravity(focusOn(FocusOn.person())))
// demoImage.resize(thumbnail().width(1000).gravity(focusOn(FocusOn.faces())));
// demoImage.resize(thumbnail().width(1000));
demoImage.resize(
  crop().width(800).height(1200).focusOn(FocusOn.face()).gravity('north'),
  // crop().width(800).height(1200).gravity('north'),
);

demoImage.overlay(
  source(
    image("overlay-demo/cld-logo").transformation(
      new Transformation().resize(scale().width(0.5)).adjust(opacity(70)),
    ),
  ),
);

// const imageUrl = new CloudinaryImage("overlay-demo/white-shirt").overlay(
//   source(image("docs/logo"))
// ).toURL();

// const image = cld.image('overlay-demo/white-shirt')
const imageUrl = demoImage.toURL();

function App() {
  return (
    <div className="image-block">
      <img src={imageUrl} />
    </div>
  );
}

export default App;
