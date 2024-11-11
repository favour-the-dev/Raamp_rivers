function NewsLetter() {
    return ( 
        <>
            <section className="news-letter flex flex-col items-center justify-center p-16 md:p-28 relative border-b-primary border-b-4">
                <div className="w-full h-full bg-black absolute top-0 left-0 opacity-70"></div>
                <div className="flex flex-col items-center justify-center gap-3 relative z-20 text-white text-center">
                    <h2 className="font-bold capitalize text-2xl md:text-4xl">Sign Up for Our Newsletter</h2>
                    <p className="text-sm font-semibold">Get the latest news and updates from us.</p>
                    <label htmlFor="email" className="flex flex-col md:flex-row md:w-2/3 gap-1">
                        <input type="email" placeholder="Enter Email" className="w-full p-2 focus:outline-none text-black"/>
                        <button className="text-sm bg-primary px-4 py-3">Subscribe</button>
                    </label>
                </div>
            </section>    
        </>
    );
}

export default NewsLetter;