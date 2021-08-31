import React, { useCallback, useState, useMemo, useEffect } from 'react';
import { useDropzone } from 'react-dropzone'
import done from '../assets/done.svg';

const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

const activeStyle = {
    borderColor: '#2196f3'
};

const acceptStyle = {
    borderColor: '#00e676'
};
const rejectStyle = {
    borderColor: '#ff1744'
};

const ApplyNow = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const onFileInputChange = (event) => {
        const { files } = event.target;
        // do something with your files...
        setSelectedFile(event.target.files[0])
    }

    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        isDragAccept
    } = useDropzone({ maxFiles: 1 });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    useEffect(() => {
        setSelectedFile(acceptedFiles[0])
    }, [acceptedFiles])
    return (

        <form action="" class="form bg-white p-6 my-10 relative" className={'contact-us'}>

            <div class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-4" styles="left:-40px"><i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div>
            <h3 class="text-2xl text-gray-900 font-semibold">Apply Now!</h3>
            <p class="text-gray-600">Be a part of amazing team</p>
            <div class="flex space-x-5 mt-3">
                <input type="text" name="" id="" placeholder="Your Name" class="border p-2  w-1/2" />
                <input type="tel" name="" id="" placeholder="Your Number" class="border p-2 w-1/2" />
            </div>
            <input type="email" name="" id="" placeholder="Your Email" class="border p-2 w-full mt-3" />

            <label class="block text-sm font-bold text-gray-700 mt-2">
                Upload Your Resume If You Have.
            </label>


            <div  {...getRootProps({ style })} class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                {
                    selectedFile ? (
                        <img src={done} color={'blue'} className={'h-10'} />

                    ) : (

                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    )
                }
                <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <input {...getInputProps()} multiple={false} onChange={onFileInputChange} onSelect={(e) => { console.log(e.target) }} />
                    </label>
                    <p class="pl-1">Tap to browse or drag and drop</p>
                </div>
                {
                    selectedFile ? (
                        <p class={"text-xs text-gray-500"}>
                            {selectedFile.name}
                        </p>
                    ) : (

                        <p class="text-xs text-gray-500">
                            PNG, JPG, PDF up to 10MB
                        </p>
                    )
                }
            </div>

            <input type="email" name="" id="" placeholder="Your Country Name" class="border p-2 w-full mt-3" />

            <textarea name="" id="" cols="10" rows="3" placeholder="Tell us about yourself" class="border p-2 mt-3 w-full"></textarea>
            <p class="font-bold text-sm mt-3">GDPR Agreement *</p>
            <div class="flex items-baseline space-x-2 mt-2">
                <input type="checkbox" name="" id="" class="inline-block" />
                <p class="text-gray-600 text-sm">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
            </div>
            <input type="submit" value="Submit" class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3" />

        </form >
    );
}

export default ApplyNow;
