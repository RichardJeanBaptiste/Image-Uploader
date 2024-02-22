"use client"

import React, {useEffect,useContext} from 'react';
import { LightContext } from './LightContext';


export default function Background(){

    const {lightmode, SetLightMode} = useContext(LightContext);

    if(lightmode === 'light'){
        return(
            <div style={{position: 'absolute', top: 0, left: 0,width: '110vw', height: '100vh', overflowX: 'hidden', overflowY: 'hidden', zIndex: -1}}></div>
        )
    } else {
        return(
            <div style={{position: 'absolute', top: 0, left: 0,width: '110vw', height: '100vh', overflowX: 'hidden', overflowY: 'hidden', backgroundColor: '#121826', zIndex: -1}}></div>
        )
    }
   
}