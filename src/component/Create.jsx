import { useState } from 'react';

//Components
import Nav from "./Nav";
import Footer from "./Footer";

import { Button } from "@/components/ui/button";

//React file Pond

import { FilePond, registerPlugin } from 'react-filepond'

import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const Accomodation = () => {

    const [files, setFiles] = useState([])  

    const handleSubmit = (event) => {

        const formData = new FormData(event.target);
        
        files.forEach((fileItem)=> {
            formData.append('image', fileItem.file);
        });

        fetch("http://127.0.0.1:8000", {
            method: 'POST',
            body: formData
        })
        .then((response)=>response.json())
        .then((json)=>{
            console.log(json)
        })

    }

    return (
        <div>
            <Nav />

            <div className="py-8 lg:px-36 md:px-16 sm:px-8 bg-gray-100">

                <div className="shadow-sm p-4 my-8 bg-white rounded">

                    <h3 className="px-4 font-medium text-slate-800 text-xl pb-8">Create new Accomodation</h3>

                    <form action="#" className="*:text-gray-600" onSubmit={handleSubmit}>

                        <div className="flex items-center gap-32 border-b py-5 px-4 ">
                            <label className="w-[10%]">Name: </label>
                            <input type="text" className="py-2.5 px-4 border outline-none border-[#d1d5dc] focus:border-[#4f39f6] focus:border-2 rounded-md text-gray-800 w-[40%]" name="name" placeholder="Name of accomodation" />
                        </div>

                        <div className="flex items-center gap-32 border-b py-5 px-4 ">
                            <label className="w-[10%]">Location </label>
                            <input type="text" className="py-2.5 px-4 border outline-none border-[#d1d5dc] focus:border-[#4f39f6] focus:border-2 rounded-md text-gray-800 w-[40%]" name="location" placeholder="Location of accomodation" />
                        </div>

                        <div className="flex items-center gap-32 border-b py-5 px-4 ">
                            <label className="w-[10%]">About </label>
                            <textarea type="text" className="h-[8em] py-2.5 px-4 border outline-none border-[#d1d5dc] focus:border-[#4f39f6] focus:border-2 rounded-md text-gray-800 w-[60%]" name="about" placeholder="Location of accomodation" />
                        </div>

                        <div className="flex items-center gap-32 border-b py-5 px-4 ">
                            <label className="w-[10%]">Amenities Available </label>
                            <div>
                                <div className="flex gap-4 items-center">
                                    <div>
                                        <input type="checkbox" name="amenity_wifi" id="wifi" />
                                        <label>Wifi</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="amenity_lockers" id="lockers" />
                                        <label>lockers</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="amenity_cafeteria" id="cafeteria" />
                                        <label>Cafeteria</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-32 border-b py-5 px-4 ">
                            <label className="w-[10%]">Rooms Available </label>
                            <div className="flex gap-16 lg:flex-row lg:gap-8 md:flex-col md:gap-2">
                                <div className="flex-1">
                                    <label>Room Type</label>
                                    <select type="text" className="py-2.5 px-4 block border outline-none border-[#d1d5dc] focus:border-[#4f39f6] focus:border-2 rounded-md text-gray-800 mt-4" name="room_type" placeholder="Room Type">
                                        <option value="single">Single</option>
                                        <option value="double">Double</option>
                                        <option value="triple">Triple</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <label>Description</label>
                                    <textarea type="text" className="py-2.5 px-4 block border outline-none border-[#d1d5dc] focus:border-[#4f39f6] focus:border-2 rounded-md text-gray-800 mt-4" name="room_description" placeholder="Brief Description" />
                                </div>
                                <div className="flex-1">
                                    <label>Inclusions</label>
                                    <textarea type="text" className="py-2.5 px-4 block border outline-none border-[#d1d5dc] focus:border-[#4f39f6] focus:border-2 rounded-md text-gray-800 mt-4" name="room_inclusions" placeholder="Brief Description" />
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-32 border-b py-5 px-4 ">
                            <label className="w-[10%]">Images </label>
                            <div className='flex-1'>
                                <div className="App">
                                    <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        name="files"
                                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                                    />
                                </div>
                            </div>
                        </div>

                        <Button className="mt-6">
                            <span className="text-white">Submit</span>
                        </Button>


                    </form>

                </div>

            </div>

            <Footer />
        </div>
    );
}

export default Accomodation;