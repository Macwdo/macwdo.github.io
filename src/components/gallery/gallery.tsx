import "./gallery.css";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div id="gallery" className="section primary-bg">
      <div className="main-content">
        <div className="gallery-text container">
          <h1>Nossa galeria</h1>
        </div>
        <div className="gallery-content">
          <div className="gallery-images">
            {images.map((image) => (
              <div className="gallery-image">
                <img src={image} alt={image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
