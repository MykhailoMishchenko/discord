"use client"

import {UploadDropzone} from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";

import {X} from "lucide-react"
import Image from "next/image";

type Props = {
    endpoint: "messageFile" | "serverImage";
    onChange: (url?: string) => void;
    value: string;
};
const FileUpload = (props: Props) => {
    const fileType = props.value.split('.').pop();

    if(props.value && fileType !== 'pdf') {
        return (
            <div className='relative h-20 w-20'>
                <Image src={props.value} alt='Upload' className='rounded-full' fill />
                <button onClick={() => props.onChange("")} className='bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm' type='button'>
                    <X className='h-4 w-4'/>
                </button>
            </div>
        )
    }

    return <UploadDropzone endpoint={props.endpoint} onClientUploadComplete={(res) => {
        props.onChange(res?.[0].url)
    }} onUploadError={(error) => console.error(error)}/>
};

export default FileUpload