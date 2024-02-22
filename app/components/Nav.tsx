"use client"

import React, {useEffect,useContext} from 'react';
import { LightContext } from './LightContext';
import styles from '../page.module.css';
import Image from 'next/image';
import uploadIcon from '../../public/logo.svg';
import uploadWhite from '../../public/white-logo.svg';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

export default function Nav() {

    const {lightmode, SetLightMode} = useContext(LightContext);

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
                <Image
                    src={uploadIcon}
                    width={200}
                    height={100}
                    alt="Image Upload"
                    style={{ marginLeft: '4%'}}
                />
                
                
                <IconButton aria-label='Light Mode' className={styles.dark_mode_icon} onClick={changeLightMode}>
                    <ThemeIcon/>
                </IconButton> 
            </div>
        )
    } else {
        return(
            <div className={styles.nav_root_dark}>
                <Image
                    src={uploadWhite}
                    width={200}
                    height={100}
                    alt="Image Upload"
                    style={{ marginLeft: '4%'}}
                />
                
                
                <IconButton aria-label='Light Mode' className={styles.light_mode_icon} onClick={changeLightMode}>
                    <ThemeIcon/>
                </IconButton> 
            </div>
        )
    }

    
}