"use client"

import React, {useContext} from 'react';
import { LightContext } from './LightContext';
import styles from '../page.module.css';
import Image from 'next/image';
import uploadIcon from '../../public/logo.svg';
import uploadWhite from '../../public/white-logo.svg';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useRouter } from 'next/navigation';


export default function Nav() {

    const {lightmode, SetLightMode} = useContext(LightContext);
    const router = useRouter();

    const changeLightMode = () => {
        if(lightmode === "light"){
            SetLightMode("dark");
        } else {
            SetLightMode("light");
        }
    }

    const ThemeIcon = () => {
        if(lightmode == "light"){
            return(
                <DarkModeIcon/>
            )
        } else {
            return (
                <LightModeIcon sx={{ color: 'black'}}/>
            )
        }
    }

    if(lightmode == "light"){
        return(
            <div className={styles.nav_root}>
                <div className={styles.upload_icon}>
                    <Image
                        fill    
                        src={uploadIcon}
                        alt="Image Upload"
                        onClick={() => router.push('/')}
                    />
                </div>
                
                
                <button className={styles.dark_mode_icon} onClick={changeLightMode}>
                    <DarkModeIcon sx={{ color: "rgba(77, 85, 98, 0.8)"}}/>
                </button>
            </div>
        )
    } else {
        return(
            <div className={styles.nav_root_dark}>
                <div className={styles.upload_icon}>
                    <Image
                        fill
                        src={uploadWhite}
                        alt="Image Upload"
                        onClick={() => router.push('/')}
                    />
                </div>
                
                
                
                
                <button className={styles.light_mode_icon} onClick={changeLightMode}>
                    <LightModeIcon sx={{ color: "#E5E7EB", backgroundColor:"#4D5562"}}/>
                </button>
            </div>
        )
    }

    
}