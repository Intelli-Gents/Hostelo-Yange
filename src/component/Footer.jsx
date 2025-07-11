import { NavLink } from "react-router";

const Footer = () => {
    return (
        <div className="bg-[#111827] py-8 px-16">
            <div className="flex gap-36">
                <div className="w-[30%]">
                    <h2 className="text-white font-medium text-xl mb-4">HostelYange</h2>
                    <p className="text-[#9ca3af]">
                        Discover the world's best hostels at affordable prices. Connect with fellow travelers and create unforgettable memories
                    </p>
                </div>
                <div className="flex gap-32">
                    <div className="w-max">
                        <h2 className="text-white font-medium text-xl mb-4">Discover</h2>
                        <div className="*:block space-y-2">
                            <NavLink to="#" className="text-[#9ca3af]">
                                How it works
                            </NavLink>
                            <NavLink to="#" className="text-[#9ca3af]">
                                Featured Hostels
                            </NavLink>
                            <NavLink to="#" className="text-[#9ca3af]">
                                List your property
                            </NavLink>
                        </div>
                    </div>
                    <div className="w-max">
                        <h2 className="text-white font-medium text-xl mb-4">Support</h2>
                        <div className="*:block space-y-2">
                            <NavLink to="#" className="text-[#9ca3af]">
                                Help Center
                            </NavLink>
                            <NavLink to="#" className="text-[#9ca3af]">
                                Contact Us
                            </NavLink>
                            <NavLink to="#" className="text-[#9ca3af]">
                                Faqs
                            </NavLink>
                        </div>
                    </div>

                    <div className="flex-1">
                        <h2 className="text-white font-medium text-xl mb-4">Socials</h2>
                        <div className="*:block space-y-2">
                            <NavLink to="#" className="text-[#9ca3af]">
                                Twitter
                            </NavLink>
                            <NavLink to="#" className="text-[#9ca3af]">
                                Facebook
                            </NavLink>
                            <NavLink to="#" className="text-[#9ca3af]">
                                TikTok
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-[0.5] border-gray-800 mt-6 mb-6" />

            <div className="flex justify-between">
                <div>
                    <p className="text-[#9ca3af]">&copy; 2025 HostelYange</p>
                </div>
                <div className="flex gap-6">
                    <p className="text-[#9ca3af]">Privacy Policy</p>
                    <p className="text-[#9ca3af]">Terms of Service</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;