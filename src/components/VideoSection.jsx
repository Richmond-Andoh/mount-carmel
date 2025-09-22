import React from 'react'


const VideoSection = () => {
    return (
        <section
            className="relative py-10 md:py-16 bg-gradient-to-br from-[#fff8f9] via-[#f6f3f4] to-[#fff] overflow-hidden"
            aria-label="Hospital Introduction Video"
        >
            {/* Decorative blurred shapes */}
            <div
                aria-hidden="true"
                className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#6f3348]/10 blur-3xl z-0"
            />
            <div
                aria-hidden="true"
                className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#daa520]/10 blur-2xl z-0"
            />

            <div className="relative z-10 w-full text-center px-0 md:px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#3b2a2f]">Discover Mount Carmel</h2>
                <p className="text-gray-600 mb-8 text-lg md:text-xl">
                    Watch our short video to learn more about our mission, facilities, and the compassionate care we provide every day.
                </p>

                <div className="relative w-full aspect-[16/8] overflow-x-hidden shadow-xl group">
                    {/* Video overlay */}
                    <video
                        className="w-full h-full object-cover"
                        src="/videos/5124290_Person_People_3840x2160.mp4"
                        // poster="/images/feature.jpg"
                        controls
                        preload="none"
                        aria-label="Mount Carmel Hospital Introduction Video"
                        autoPlay
                        loop
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-mount-carmel-primary/90 to-mount-carmel-secondary/90 mix-blend-multiply"></div>

                    {/* Optional: Play button overlay for custom controls */}
                    <button className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/30 hover:bg-black/40 transition group-hover:scale-105">
                        <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
                            <circle cx="32" cy="32" r="32" fill="#fff" fillOpacity="0.7" />
                            <polygon points="26,20 48,32 26,44" fill="#6f3348" />
                        </svg>
                    </button>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        href="/appointment"
                        className="inline-block px-8 py-3 rounded-full font-semibold bg-[#6f3348] text-white shadow-lg hover:bg-[#b66b7a] transition"
                    >
                        Book an Appointment
                    </a>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-3 rounded-full font-semibold bg-[#daa520] text-[#3b2a2f] shadow-lg hover:bg-[#bfa14a] transition"
                    >
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
}

export default VideoSection;