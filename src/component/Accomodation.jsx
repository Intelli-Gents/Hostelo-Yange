//Components
import Nav from "./Nav"
import Footer from "./Footer";

//Icons
import { Wifi, Coffee, CigaretteOff, Timer, BedSingle, BedDouble} from "lucide-react";

//Images
import Image1 from "../assets/images/hostel1.png";
import Image2 from "../assets/images/hostel2.jpg";
import Image3 from "../assets/images/hostel3.jpg";
import Image4 from "../assets/images/hostel4.jpg";
import Image5 from "../assets/images/hostel5.jpg";

const Accomodation = () => {
    return (
        <div className="bg-[#F8F9FA]">
            <Nav />

            <div className="relative pt-8">

                <div className="h-[12em] z-10 w-full absolute top-0 bg-gradient-to-b from-blue-300 via-blue-100 to-white">
                </div>

                <div className="w-[90%] mx-auto relative z-20 bg-blue-100 h-[28em] rounded flex gap-2 p-2">
                    <div className="w-[45%] bg-slate-300 rounded">
                        <img src={Image4} alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 h-full grid grid-cols-2 grid-rows-2 gap-2 *:rounded">
                        <div>
                            <img src={Image1} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <img src={Image2} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div>
                            <img src={Image3} alt="" className="w-full h-full object-cover"/> 
                        </div>
                        <div>
                            <img src={Image5} alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>

                <div className="w-[90%] mt-8 pb-6 mx-auto flex gap-8">

                    {/* Left with the amenities and description */}
                    <div className="w-[62%]">

                        {/* Amenities Available */}
                        <div className="rounded shadow-xs py-6 bg-white flex items-center gap-8 px-6">
                            <p className="flex gap-2">
                                <Wifi className="text-blue-400" />
                                <span>Wifi Available</span>
                            </p>
                            <p className="flex gap-2">
                                <Coffee className="text-blue-400" />
                                <span>Breakfast Available</span>
                            </p>
                            <p className="flex gap-2">
                                <CigaretteOff className="text-blue-400" />
                                <span>No Smoking</span>
                            </p>

                            <p className="flex gap-2">
                                <Timer className="text-blue-400" />
                                <span>24/7 operation</span>
                            </p>
                        </div>

                        {/* About Hostel Section */}
                        <div className="p-8 bg-white rounded my-4 shadow-xs">
                            <h2 className="text-2xl font-medium mb-6">About Urban Oasis Hostel</h2>
                            <div className="space-y-6 py-3 *:text-gray-800">
                                <p>
                                    Urban Oasis Hostel offers a perfect blend of comfort, style, and affordability in the heart of New York City. Our recently renovated property features modern amenities, spacious common areas, and a vibrant social atmosphere that makes it easy to connect with fellow travelers
                                </p>
                                <p>
                                    Located just steps away from major subway lines, you'll have easy access to all of NYC's iconic attractions including Times Square, Central Park, and the Empire State Building. After a day of exploration, unwind on our rooftop terrace with stunning city views or join one of our nightly social events.
                                </p>
                                <p>
                                    Whether you're looking for a private room or a budget-friendly bed in our dormitories, Urban Oasis provides clean, secure, and comfortable accommodations for every type of traveler.
                                </p>
                            </div>
                        </div>

                        {/* Hostel Location */}
                        <div className="rounded shadow-xs bg-white p-8 mb-4">
                            <h2 className="text-2xl text-slate-800 font-medium">Location</h2>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4874.26424641242!2d32.63670173072445!3d0.3540824784134623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177db98574e94f17%3A0xedaf7c435acdec31!2sGood%20Shepherd%20Student&#39;s%20Hostel!5e0!3m2!1sen!2sug!4v1751838475414!5m2!1sen!2sug" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded mt-4"></iframe>
                        </div>

                    </div>

                    {/* Right Red Square - Rooms available */}
                    <div className="rounded bg-white flex-1 p-4 shadow-xs h-max pb-13">
                        <h2 className="text-xl font-medium text-slate-800 py-2">Book Your Stay</h2>
                        
                        <h3 className="text-slate-800 pb-3">Available Options</h3>
                        <div className="space-y-5">
                            
                            <div className="border border-gray-200 hover:border-blue-200 rounded-md p-2 cursor-pointer">
                                <h4 className="text-slate-800 pb-1 text-lg">Single Room</h4>
                                <p className="flex items-center gap-2 text-gray-800">
                                    <BedSingle className="text-gray-500 w-5 h-5" />
                                    <span>1 bed in Single Room</span>
                                </p>
                                <p className="py-1 text-sm text-gray-800">Includes: charging outlet, lighting, personal locker</p>
                            </div>

                            <div className="border border-gray-200 hover:border-blue-200 rounded-md p-2 cursor-pointer">
                                <h4 className="text-slate-800 pb-1 text-lg">Double Room</h4>
                                <p className="flex items-center gap-2 text-gray-800">
                                    <BedDouble className="text-gray-500 w-5 h-5" />
                                    <span>1 bed in Double Room</span>
                                </p>
                                <p className="py-1 text-sm text-gray-800">Includes: charging outlet, lighting, personal locker</p>
                            </div>

                            <div className="border border-gray-200 hover:border-blue-200 rounded-md p-2 cursor-pointer">
                                <h4 className="text-slate-800 pb-1 text-lg">Triple Room</h4>
                                <p className="flex items-center gap-2 text-gray-800">
                                    <BedSingle className="text-gray-500 w-5 h-5" />
                                    <span>1 bed in Triple Room</span>
                                </p>
                                <p className="py-1 text-sm text-gray-800">Includes: charging outlet, lighting, personal locker</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
    );
}

export default Accomodation;