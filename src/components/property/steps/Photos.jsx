function Photos() {
    return (
        <div>

            <h2 className="text-lg font-semibold mb-4">
                Upload Property Photos
            </h2>

            <input
                type="file"
                multiple
                className="border p-2 rounded"
            />

        </div>
    );
}

export default Photos;