import { Link } from "react-router-dom";

function ArticleCard({ article }) {
    return (
        <Link to={`/insights/${article.slug}`}>
            <div className="min-w-[360px] max-w-[360px] bg-white rounded-md overflow-hidden">

                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-40 object-cover"
                />

                <div className="py-3">

                    <h3 className="font-semibold text-lg leading-snug mb-2">
                        {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3">
                        {article.description}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-gray-200 my-3"></div>

                    <div className="flex justify-between text-xs text-gray-500">
                        <span>{article.author}</span>
                        <span>{article.date}</span>
                    </div>

                </div>

            </div>
        </Link>
    );
}

export default ArticleCard;