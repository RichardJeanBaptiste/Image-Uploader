import { NextResponse } from "next/server";
import mongoose from "mongoose";


export async function POST(request: Request){
    try {
        let mongo_uri:string | undefined = process.env.NEXT_PUBLIC_MONGO_URI;

        console.log(mongo_uri);

        return NextResponse.json({msg: "returned Image ID"}, {status: 200})

    } catch (error) {
        
        // console.log(process.env.MONGO_URI);
        // console.log(error);
        
        return NextResponse.json({msg: "Server Error :("}, {status: 500});
    }
}