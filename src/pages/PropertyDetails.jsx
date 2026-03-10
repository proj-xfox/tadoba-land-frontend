import { useParams } from "react-router-dom";

function PropertyDetails() {
    const { id } = useParams();

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold">Property Details</h1>
            <p className="mt-2">Property ID: {id}</p>
        </div>
    );
}

export default PropertyDetails;