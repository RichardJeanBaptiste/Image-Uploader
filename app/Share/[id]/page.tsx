"use client"

import React, {useState, useEffect, useContext} from 'react';
import Nav from "@/app/components/Nav"
import Background from "@/app/components/Background";
import { LightProvider } from "../../components/LightContext";
import axios from 'axios';
import { base64ToBlob } from '@/app/commons';
import Button from '@mui/material/Button';
import LinkIcon from '@mui/icons-material/Link';
import DownloadIcon from '@mui/icons-material/Download';
import Image from "next/image";
import styles from '../page.module.css';
import { LightContext } from '../../components/LightContext';

export default function ShareImg({params}: any){

    const {lightmode, SetLightMode} = useContext(LightContext);
    const [imgBlob, SetImgBlob] = useState<Blob | null>(null);
    const [hrefString, SetHrefString] = useState("");

    useEffect(() => {
        axios.get('/api/get_image', {
            params: {
              id: params.id
            }
          })
          .then(function (response) {

            SetHrefString(URL.createObjectURL(base64ToBlob(response.data.img_file, 'image/jpeg')));
            SetImgBlob(base64ToBlob(response.data.img_file, 'image/jpeg'));
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          }); 
    },[]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`localhost:3000/share/${params.id}`);
        alert("Copied To Clipboard");
    }


    const BlobImg = () => {
        if(imgBlob != null){
            return(
                <Image
                    src={URL.createObjectURL(imgBlob)}
                    style={{borderRadius: '20px'}}
                    fill={true}
                    priority={true}
                    alt="Share Image"
                />
            )
        } else {
            return (
                <>
                </>
            )
        }
    }

    const ImgBackgroundStyle = () => {
        if(lightmode === "light"){
            return (
                <div className={styles.img_background}>
                    <div className={styles.img_style}>
                        <BlobImg/>
                    </div>  
                </div>
            )
            
        } else {
            
            return (
                <div className={styles.dark_img_background}>
                    <div className={styles.img_style}>
                        <BlobImg/>
                    </div>  
                </div>
            )
        }
    }

    return (
        <>
            <LightProvider>
                <Background/>
                <Nav/>
                <div className={styles.share_root}>
                    <div className={styles.share_root2}>
                        <ImgBackgroundStyle/>
                        
                        <div className={styles.button_container}>

                            <div style={{paddingRight: '2%'}}>
                                <Button variant="contained" startIcon={<LinkIcon/>} onClick={copyToClipboard}>
                                    Share
                                </Button>
                            </div>
                           
                            <Button variant="contained" startIcon={<DownloadIcon/>} href={hrefString}>
                                Download
                            </Button>
                        </div>

                    </div>  
                </div>
                
            </LightProvider>
            
        </>
    )

}