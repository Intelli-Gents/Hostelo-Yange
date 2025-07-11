import { useState, useEffect } from "react";

import Nav from "./component/Nav";
import Footer from "./component/Footer";

//Images
import Image1 from "./assets/images/hostel1.png";
import Image2 from "./assets/images/hostel2.jpg";
import Image3 from "./assets/images/hostel3.jpg";
import Image4 from "./assets/images/hostel4.jpg";
import Image5 from "./assets/images/hostel5.jpg";

//Icons
import { Search, Heart } from "lucide-react";

//Shadcn components
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const App = () => {

    const [hostels, setHostels] = useState([]);

    const handleClick = () => {
        console.log("Clicked search button");
    }

    useEffect(() => {
        fetch("http://127.0.0.1:8000/hostels")
            .then((response) => response.json())
            .then((json) => {
                setHostels(json);
            })
    }, []);

    return (
        <div>
            <Nav />

            {/* Hero Section */}
            <div className="h-[28em] bg-gradient-to-r from-indigo-600 to-purple-600 p-8">
                <h2 className="mt-12 mb-4 text-4xl text-white font-medium">Find Your Perfect Hostel <br /> Accomodation </h2>
                <p className="text-white opacity-90">
                    Discover affordable, comfortable and social hostels around the campus. Book directly with no hidden fees.
                </p>
                <div className="w-[30em] mt-6 rounded-md p-6 bg-white">
                    <h3 className="text-gray-800 text-base">Location</h3>
                    <div className="flex gap-2 items-center mt-3">
                        <input type="text" className="bg-[#fafafa] border border-gray-300 rounded-md outline-none block w-[70%] px-4 py-2" placeholder="Where are you?" />
                        <button className="flex gap-2 items-center bg-blue-500 *:text-white py-2 px-4 rounded-md" onClick={handleClick}>
                            <Search />
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </div>


            {/* Featured Hostels */}
            <div className="bg-[#F9FAFB] p-8">

                <h2 className="text-slate-900 text-2xl font-medium mb-2 mt-4 px-16">Featured Hostels</h2>

                <div className="mt-8 mb-6 px-16">

                    <Carousel
                        opts={{
                            align: "start",
                            loop: true
                        }}
                    >

                        <CarouselContent>

                            {hostels.map((hostel, index) => {
                                return (
                                    <CarouselItem className="lg:basis-1/3 md:basis-1/2 sm:basis-1" key={index}>
                                        <div className="min-h-96 bg-white rounded">
                                            <div className="w-full h-[14em] relative">
                                                <button className="absolute top-4 right-2 bg-white/80 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer p-1.5 hover:bg-white">
                                                    <Heart className="text-indigo-600" />
                                                </button>
                                                <img src={`http://127.0.0.1:8000${hostel.image}`} alt="" className="w-full h-full object-cover" />
                                            </div>
                                            <div className="my-2 py-2 px-4">
                                                <h3 className="font-medium text-xl text-[#1f2937]">{hostel.name}</h3>
                                                <p className="text-lg text-gray-800 py-2">{hostel.location}</p>
                                                <div className="flex gap-2">
                                                    <span className="block px-3 py-1 bg-[#F3F4F6] rounded text-sm text-gray-700">Free Wifi</span>
                                                    <span className="block px-3 py-1 bg-[#F3F4F6] rounded text-sm text-gray-700">Breakfast</span>
                                                    <span className="block px-3 py-1 bg-[#F3F4F6] rounded text-sm text-gray-700">24/7 operation</span>
                                                </div>
                                            </div>
                                            <div className="pb-4 px-4 mt-2">
                                                <button className="bg-[#4f46e5] transition-colors duration-300 hover:bg-[#4338CA] block rounded-md text-white cursor-pointer py-1.5 px-3">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                </div>
            </div>

            {/* Locations Section */}
            <div>

            </div>

            <Footer />
        </div>
    );
}

export default App;