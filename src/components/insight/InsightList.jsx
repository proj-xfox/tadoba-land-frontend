// src/components/insights/InsightList.jsx

import { Link } from "react-router-dom";

function InsightList({ articles }) {
    return (

        <div className="col-span-12 lg:col-span-8">

            <div className="space-y-5">

                {articles.map(article => (

                    <div
                        key={article.id}
                        className="flex gap-6 border-b pb-5"
                    >

                        {/* IMAGE */}
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-60 h-40 object-cover"
                        />

                        {/* CONTENT */}
                        <div>

                            <p className="text-sm text-gray-500 mb-2">
                                BY {article.author} | {article.date}
                            </p>

                            <h2 className="text-xl font-semibold mb-2 hover:text-purple-600">
                                <Link to={`/insights/${article.slug}`}>
                                    {article.title}
                                </Link>
                            </h2>

                            <p className="text-gray-600 mb-3">
                                {article.description}
                            </p>

                            <Link
                                to={`/insights/${article.slug}`}
                                className="text-purple-600 text-sm font-medium"
                            >
                                Read full story →
                            </Link>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default InsightList;