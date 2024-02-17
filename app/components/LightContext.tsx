"use client"

import React, {useState, createContext, SetStateAction, Dispatch, ReactNode} from "react";

export interface LightContextInterface {
    lightmode: string,
    SetLightMode: Dispatch<SetStateAction<string>>;
}

const defaultState = {
    lightmode: "light",
    SetLightMode: (lightmode: string) => {}
} as LightContextInterface;

export const LightContext = createContext<LightContextInterface>(defaultState);

type LightProviderProps = {
    children: ReactNode,
}

export const LightProvider = ({children}: LightProviderProps) => {

    const [lightmode, SetLightMode] = useState("light");

    return (
        <LightContext.Provider value={{ lightmode, SetLightMode }}>
            {children}
        </LightContext.Provider>
    )
}