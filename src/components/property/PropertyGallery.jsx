// src/components/property/PropertyGallery.jsx

function PropertyGallery({ images }) {

    if (!images || images.length === 0) {
        return (
            <div className="bg-gray-200 h-64 flex items-center justify-center">
                No Images
            </div>
        );
    }

    return (
        <div>

            {/* Main Image */}
            <img
                src={images[0]}
                alt="Property"
                className="w-full h-80 object-cover rounded"
            />

            {/* Thumbnail Images */}
            <div className="flex gap-3 mt-3">

                {images.slice(1).map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="Property"
                        className="h-20 w-28 object-cover rounded"
                    />
                ))}

            </div>

        </div>
    );
}

export default PropertyGallery;