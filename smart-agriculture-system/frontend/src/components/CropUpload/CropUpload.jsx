import { useState } from "react";
import { detectCropDisease } from "../../api/cropApi";
import "./CropUpload.css";

function CropUpload() {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (!file) return;

        setImage(file);
        setPreview(URL.createObjectURL(file));
        setResult(null);
    };

    const handleSubmit = async () => {
        if (!image) {
            alert("Please select an image");
            return;
        }

        try {
            setLoading(true);

            const formData = new FormData();
            formData.append("image", image);

            const data = await detectCropDisease(formData);

            setResult(data);
        } catch (error) {
            console.error(error);
            alert("Failed to detect disease");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="crop-upload-container">
            <h2>Crop Disease Detection</h2>

            <div className="upload-box">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                />

                {preview && (
                    <img
                        src={preview}
                        alt="Crop Preview"
                        className="preview-image"
                    />
                )}

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {loading ? "Detecting..." : "Detect Disease"}
                </button>
            </div>

            {result && (
                <div className="result-card">
                    <h3>Detection Result</h3>

                    <p>
                        <strong>Disease:</strong>{" "}
                        {result.disease}
                    </p>

                    <p>
                        <strong>Fertilizer:</strong>{" "}
                        {result.fertilizer}
                    </p>

                    <p>
                        <strong>Water Required:</strong>{" "}
                        {result.water}
                    </p>

                    <p>
                        <strong>Solution:</strong>{" "}
                        {result.solution}
                    </p>
                </div>
            )}
        </div>
    );
}

export default CropUpload;