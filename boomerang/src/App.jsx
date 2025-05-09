import { Cloudinary } from "@cloudinary/url-gen"
import { boomerang } from "@cloudinary/url-gen/actions/effect"
import { trim, preview } from "@cloudinary/url-gen/actions/videoEdit"
import { scale } from "@cloudinary/url-gen/actions/resize"
import "./App.css"

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
})

const myVideo = cld.video("demo/moving-car")

// create a preview
myVideo.videoEdit(
  preview().duration(3)
)

// Apply affects to video
myVideo.effect(boomerang())
myVideo.resize(scale().width(1000))

// trim the video
myVideo.videoEdit(
  trim().startOffset(0).endOffset(4)
)



// Get the URL of the video
const myURL = myVideo.toURL()

function App() {
  return (
    <div className="container">
      <h1>Video Boomerang</h1>
      <video controls src={myURL} />
      <p>Click on play and watch the boomerang</p>
    </div>
  )
}

export default App


// cost
// developer community
  // with reviews
// frontend & backend