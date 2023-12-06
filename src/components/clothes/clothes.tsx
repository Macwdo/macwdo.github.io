import "./clothes.css";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <div className="gallery-content">
      <div className="gallery-images">
        {images.map((image) => (
          <div className="gallery-image">
            <img src={image} alt={image} />
          </div>
        ))}
      </div>
    </div>
  );
}
