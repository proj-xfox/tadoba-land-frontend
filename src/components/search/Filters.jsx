// src/components/search/Filters.jsx

function Filters({ filters, onChange }) {

    return (
        <div className="bg-white p-4 shadow rounded flex gap-4 mt-4">

            {/* Listing Type */}
            <select
                value={filters.type}
                onChange={(e) =>
                    onChange({ ...filters, type: e.target.value })
                }
                className="border p-2 rounded"
            >
                <option value="">All Types</option>
                <option value="sale">Sale</option>
                <option value="lease">Lease</option>
                <option value="rent">Rent</option>
            </select>

            {/* Area Filter */}
            <select
                value={filters.area}
                onChange={(e) =>
                    onChange({ ...filters, area: e.target.value })
                }
                className="border p-2 rounded"
            >
                <option value="">Any Area</option>
                <option value="1-3">1–3 Acres</option>
                <option value="3-5">3–5 Acres</option>
                <option value="5+">5+ Acres</option>
            </select>

        </div>
    );
}

export default Filters;