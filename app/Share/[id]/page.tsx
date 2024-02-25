"use client"

import React, {useState, useEffect} from 'react';
import Nav from "@/app/components/Nav"
import Background from "@/app/components/Background";
import styles from '@/app/page.module.css';
import { LightProvider } from "../../components/LightContext";
import axios from 'axios';
import { base64ToBlob } from '@/app/commons';
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
                <img src={URL.createObjectURL(imgBlob)} alt="Image" />
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
                <p>Share IMage</p>
                <BlobImg/>
            </LightProvider>
            
        </>
    )

}