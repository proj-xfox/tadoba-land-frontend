import { useState } from "react";
import { uploadImagesApi } from "../../../api/uploadApi";
import { addPropertyImagesApi } from "../../../api/propertyApi";

function Photos({ propertyId }) {
    const [previews, setPreviews] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFileChange = async (e) => {
        const files = Array.from(e.target.files);
        if (!files.length) return;

        const previewUrls = files.map(file => URL.createObjectURL(file));
        setPreviews(prev => [...prev, ...previewUrls]);

        try {
            setLoading(true);

            // 1️⃣ Upload to Supabase
            const res = await uploadImagesApi(files);
            console.log("🔥 Response==============:", res);

            const images = res.images;

            // 2️⃣ Save to DB (IMPORTANT)
            await addPropertyImagesApi({
                propertyId,
                images
            });

        } catch (err) {
            console.error(err);
            alert("Upload failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2 className="text-lg font-semibold mb-4">
                Upload Photos
            </h2>

            <input
                type="file"
                multiple
                onChange={handleFileChange}
                disabled={loading}
                className="border p-2 rounded"
            />

            {loading && <p>Uploading...</p>}

            <div className="flex gap-2 mt-4 flex-wrap">
                {previews.map((src, i) => (
                    <img key={i} src={src} className="w-24 h-24 object-cover rounded" />
                ))}
            </div>
        </div>
    );
}

export default Photos;