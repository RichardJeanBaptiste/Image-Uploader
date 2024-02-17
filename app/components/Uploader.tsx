"use client"

import React, {useContext} from 'react';
import { LightContext } from './LightContext';
import Image from "next/image";
import styles from "../page.module.css";
import arrowIcon from "../../public/logo-small.svg";



export default function Uploader() {

    const {lightmode, SetLightMode} = useContext(LightContext);

    return (
        <div className={styles.uploader_root}>
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
                    <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '17px'}}>Drag & drop a file or <span style={{ color: "#3662E3"}}>browse files</span></p>
                    <p style={{ textAlign: 'center', fontSize: '14px'}}>JPG, PNG or GIF - Max file size 2MB</p>
                </div>
            </div>
        </div>
    )
}