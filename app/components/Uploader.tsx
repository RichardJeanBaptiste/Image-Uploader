"use client"

import React, {useState,useContext, useRef} from 'react';
import { LightContext } from './LightContext';
import Image from "next/image";
import styles from "../page.module.css";
import arrowIcon from "../../public/logo-small.svg";



export default function Uploader() {

    const {lightmode, SetLightMode} = useContext(LightContext);

    const [selectedFile, SetSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: any) => {
        const file = e.target.files[0];
        SetSelectedFile(file);
    }

    const handleDrop = (e: any) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        SetSelectedFile(file);
    };

    const handleDragOver = (e: any) => {
        e.preventDefault();
    };

    const handleClickBrowse = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
    };

    const FileName = () => {
        if(selectedFile === null){
            return ""
        } else {
            return selectedFile.name
        }
    }

    if(lightmode === 'light'){
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
                            onChange={handleFileChange}
                            style={{ display: 'none'}}
                            ref={fileInputRef}
                        />
                        <p>
                            <FileName/>
                        </p>
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
                        <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px'}}>Drag & drop a file or <span style={{ color: "#3662E3"}} onClick={handleClickBrowse}>browse files</span></p>
                        <p style={{ textAlign: 'center', fontSize: '14px'}}>JPG, PNG or GIF - Max file size 2MB</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.uploader_root_dark}>
                <div className={styles.inner_root}>
                    <div className={styles.img_container}>
                        <Image
                            src={arrowIcon}
                            width={70}
                            height={50}
                            alt="Upload Icon Small"
                        />
                    </div>
                    <div className={styles.upload_selector}>
                        <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px', color: 'white'}}>Drag & drop a file or <span style={{ color: "#3662E3"}}> browse files</span></p>
                        <p style={{ textAlign: 'center', fontSize: '14px', color: 'white'}}>JPG, PNG or GIF - Max file size 2MB</p>
                    </div>
                </div>
            </div>
        )
    }

    
}