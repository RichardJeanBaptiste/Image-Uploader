"use client"

import React, {useContext} from 'react';
import { LightContext } from './LightContext';
import styles from '../page.module.css';
import Image from 'next/image';
import uploadIcon from '../../public/logo.svg';
import uploadWhite from '../../public/white-logo.svg';
import IconButton from '@mui/material/IconButton';
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

    const icStyle= () => {
        if(lightmode === "light"){
            return {
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '50px',
                backgroundColor: '#FFFFFF',
                width: '4.5%',
                borderRadius: '8px',
            }
        } else {
            return {
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: '50px',
                backgroundColor: '#FFFFFF',
                width: '4.5%',
                borderRadius: '8px',
            }
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
                    style={{ marginLeft: '4%', cursor: 'pointer'}}
                    onClick={() => router.push('/')}
                />


                
                
                <IconButton aria-label='Light Mode' sx={icStyle} onClick={changeLightMode}>
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