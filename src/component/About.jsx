// Components
import Nav from "./Nav";
import Footer from "./Footer";

// Icons
import { Home, MapPin, Users, Star } from "lucide-react";

// Images
import BannerImage from "../assets/images/hostel6.jpg";

const About = () => {
  return (
    <div className="bg-[#F8F9FA]">
      <Nav />

      {/* Hero Section */}
      <div className="relative pt-8">
        <div className="h-[12em] z-10 w-full absolute top-0 bg-gradient-to-b from-blue-300 via-blue-100 to-white" />
        <div className="w-[90%] mx-auto relative z-20 rounded overflow-hidden h-[28em]">
          <img
            src={BannerImage}
            alt="About Hostelo Yange"
            className="h-full w-full object-cover rounded"
          />
        </div>
      </div>

      {/* About Content */}
      <div className="w-[90%] mx-auto mt-10 pb-6 space-y-10">

        {/* Overview */}
        <div className="p-8 bg-white rounded shadow-xs">
          <h2 className="text-3xl font-medium text-slate-800 mb-6">About Hostelo Yange</h2>
          <p className="text-gray-800 leading-relaxed">
            Hostelo Yange is a student-focused accommodation locator platform built to simplify how students discover, compare, and book hostels near their campuses. We connect students to verified, affordable, and safe accommodation options tailored to their preferences and budgets.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded shadow-xs p-6">
            <h3 className="text-2xl font-medium text-slate-800 mb-4">Our Vision</h3>
            <p className="text-gray-800">
              To be the most trusted and student-friendly accommodation platform in Uganda and beyond.
            </p>
          </div>

          <div className="bg-white rounded shadow-xs p-6">
            <h3 className="text-2xl font-medium text-slate-800 mb-4">Our Mission</h3>
            <p className="text-gray-800">
              To simplify hostel hunting for students by offering a reliable, transparent, and convenient online platform.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-white rounded shadow-xs p-8">
          <h3 className="text-2xl font-medium text-slate-800 mb-6">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <Home className="text-blue-400 w-10 h-10" />
              <h4 className="text-lg text-slate-800 font-medium">Safe Spaces</h4>
              <p className="text-gray-800 text-sm">
                Verified hostels prioritizing student safety and wellbeing.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <MapPin className="text-blue-400 w-10 h-10" />
              <h4 className="text-lg text-slate-800 font-medium">Accessibility</h4>
              <p className="text-gray-800 text-sm">
                Accurate locations and hostel details for seamless booking.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <Users className="text-blue-400 w-10 h-10" />
              <h4 className="text-lg text-slate-800 font-medium">Community</h4>
              <p className="text-gray-800 text-sm">
                Empowering students through a trusted network of hostels.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <Star className="text-blue-400 w-10 h-10" />
              <h4 className="text-lg text-slate-800 font-medium">Excellence</h4>
              <p className="text-gray-800 text-sm">
                Striving for top-notch service and a user-friendly experience.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-100 rounded shadow-xs p-8 flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-2xl font-medium text-slate-800 mb-4 md:mb-0">
            Ready to find your perfect hostel?
          </h3>
          <a
            href="/accomodation"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition"
          >
            Explore Accommodations
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
