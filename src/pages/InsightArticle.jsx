import { useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

function InsightArticle() {

    const { slug } = useParams();

    return (
        <>
            <Navbar />

            <div className="max-w-4xl mx-auto px-4 mt-10 py-10">

                <h1 className="text-4xl font-bold mb-4">
                    Article Title
                </h1>

                <p className="text-gray-500 mb-6">
                    TadobaLand Editorial • Oct 2025
                </p>

                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
                    className="w-full rounded-lg mb-6"
                />

                <p className="text-lg leading-relaxed">
                    Article content will go here.
                </p>

                <p className="text-lg leading-relaxed mt-4">
                    Later you can load article data based on slug.
                </p>

            </div>

            <Footer />
        </>
    );
}

export default InsightArticle;