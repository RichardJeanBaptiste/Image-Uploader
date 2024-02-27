"use client"

import React, {useState, useEffect} from 'react';
import Nav from "@/app/components/Nav"
import Background from "@/app/components/Background";
import styles from '@/app/page.module.css';
import { LightProvider } from "../../components/LightContext";
import axios from 'axios';
import { base64ToBlob } from '@/app/commons';
import Button from '@mui/material/Button';
import LinkIcon from '@mui/icons-material/Link';
import DownloadIcon from '@mui/icons-material/Download';
import Image from "next/image";

export default function ShareImg({params}: any){

    const [imgBlob, SetImgBlob] = useState<Blob | null>(null);

    useEffect(() => {
        console.log(params.id);
        axios.get('/api/get_image', {
            params: {
              id: params.id
            }
          })
          .then(function (response) {
            SetImgBlob(base64ToBlob(response.data.img_file, 'image/jpeg'));
          })
          .catch(function (error) {
            console.log(error);
          })
          .finally(function () {
            // always executed
          }); 
    },[]);


    const BlobImg = () => {
        if(imgBlob != null){
            return(
                <Image
                    src={URL.createObjectURL(imgBlob)}
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

    return (
        <>
            <LightProvider>
                <Background/>
                <Nav/>
                <div style={{position:'absolute', top: '58%', left: '50%', transform:'translate(-50%,-50%)', width: '60%', height: '60%'}}>
                    <div style={{ width: '100%', height: '100%', position: 'relative'}}>
                        <div style={{ width: '100%', height: '80%'}}>
                            <div style={{ width: '95%', height: '93%', position: 'relative', top: '3.5%', left: '2.5%'}}>
                                <BlobImg/>
                            </div>  
                        </div>
                        
                        <div>
                            <Button variant="contained" startIcon={<LinkIcon/>}>
                                Share
                            </Button>
                            <Button variant="contained" startIcon={<DownloadIcon/>}>
                                Download
                            </Button>
                        </div>

                    </div>  
                </div>
                
            </LightProvider>
            
        </>
    )

}