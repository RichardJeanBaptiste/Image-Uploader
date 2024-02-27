"use client"

import React, {useState,useContext, useRef} from 'react';
import { LightContext } from './LightContext';
import Image from "next/image";
import styles from "../page.module.css";
import arrowIcon from "../../public/logo-small.svg";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
import { convertFileToBase64 } from '../commons';
import { useRouter } from 'next/navigation';



export default function Uploader() {

    const router = useRouter();
    const {lightmode, SetLightMode} = useContext(LightContext);

    const [selectedFile, SetSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [loading, SetLoading] = useState(false);
   

    const handleFileChange = async (e: any) => {
        const file = e.target.files[0];
        SetSelectedFile(file);
        handleUpload(file);
    }

    const handleDrop = (e: any) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        SetSelectedFile(file);
        handleUpload(file);
    };

    const handleDragOver = (e: any) => {
        e.preventDefault();
    };

    const handleClickBrowse = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
    };

  
    const handleUpload = async (file: any) => {
        
        if (!file) {
            console.log("No file selected");
            return;
        }

        if (file) {

            SetLoading(true);

            let convertedFile =  await convertFileToBase64(file);
            
            axios.post('/api/upload_image',{
                img_file: convertedFile
            }).then((res) => {
                console.log(res.data.image_id);
                setTimeout(() =>{
                    router.push(`/share/${res.data.image_id}`)
                    SetLoading(false);
                },2000);
            }).catch((err) => {
                alert("Something went wrong:(. Try again");
                SetLoading(false);
                console.log(err);
            })
        }
    };

    // const FileName = () => {
    //     if(selectedFile === null){
    //         return ""
    //     } else {
    //         return selectedFile.name
    //     }
    // }

    if(lightmode === 'light'){

        if(!loading){
            return (
                <div className={styles.uploader_root}>
                    <div className={styles.inner_root}>
                        <div 
                            style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}}
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                        >
                            <input
                                type="file"
                                accept=".jpg,.jpeg,.png"
                                style={{ display: 'none'}}
                                ref={fileInputRef}
                                onChange={handleFileChange}
                            />
                        </div>
                        <div className={styles.img_container}>
                            <Image
                                src={arrowIcon}
                                width={70}
                                height={50}
                                alt="Upload Icon Small"
                            />
                        </div>
                        <div className={styles.upload_selector}>
                            <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px'}}>Drag & drop a file or <span style={{ color: "#3662E3", cursor: 'pointer'}} onClick={handleClickBrowse}>browse files</span></p>
                            <p style={{ textAlign: 'center', fontSize: '14px'}}>JPG, PNG or GIF - Max file size 2MB</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.load_container}>
                    <div className={styles.loader}>
                        <p style={{ textAlign: 'center', marginTop: '7%'}}><span style={{ fontWeight: 'bold'}}>Uploading</span>, please wait.....</p>
                        <Box className={styles.loader1}>
                            <LinearProgress sx={{ borderRadius: '20px'}}/>
                        </Box>
                    </div>
                </div>
                
            )
        }
        
    } else {
        return (
            <div className={styles.uploader_root_dark}>
                <div className={styles.inner_root}>
                    <div 
                        style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0}}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        <input
                            type="file"
                            accept=".jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            style={{ display: 'none'}}
                            ref={fileInputRef}
                        />
                    </div>
                    <div className={styles.img_container}>
                        <Image
                            src={arrowIcon}
                            width={70}
                            height={50}
                            alt="Upload Icon Small"
                        />
                    </div>
                    <div className={styles.upload_selector}>
                        <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px', color: 'white'}}>Drag & drop a file or <span style={{ color: "#3662E3", cursor: 'pointer'}}  onClick={handleClickBrowse}>browse files</span></p>
                        <p style={{ textAlign: 'center', fontSize: '14px', color: 'white'}}>JPG, PNG or GIF - Max file size 2MB</p>
                    </div>
                </div>
            </div>
        )
    }

    
}