import Marquee from "react-fast-marquee";

function DealsTicker() {
    return (
        <div className="bg-green-700 text-white py-2">
            <Marquee pauseOnHover gradient={false} speed={40}>
                🌿 5 Acre Resort Land – Moharli ₹25L &nbsp;&nbsp; | &nbsp;&nbsp;
                3 Acre Farm Land – Kolara Lease &nbsp;&nbsp; | &nbsp;&nbsp;
                10 Acre Eco Resort Land – Chimur ₹60L &nbsp;&nbsp; | &nbsp;&nbsp;
                7 Acre Jungle Edge Land – Kolara ₹40L
            </Marquee>
        </div>
    );
}

export default DealsTicker;