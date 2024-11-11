import Image from "next/image";
function RaampObj() {
    return ( 
        <>
            <section className="news-letter text-white flex flex-col gap-3 items-center text-center md:text-start md:items-start justify-center p-12 md:p-24 relative">
                <div className="w-full h-full bg-black absolute top-0 left-0 opacity-70"></div>
                <h2 className="text-3xl md:text-4xl font-bold z-10 relative">RAAMP Objective</h2>
                <p className="text-lg md:text-xl relative z-10">The overall objective of RAAMP is to improve rural access and agricultural marketing in selected participating states whilst enhancing sustainability of the rural and state road networks.</p>
            </section>
        </>
    );
}

export default RaampObj;