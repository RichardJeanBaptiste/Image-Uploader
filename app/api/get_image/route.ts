import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { imgfile } from "../Schemas";


export async function GET(request: Request){
    try {
        let mongo_uri:string | undefined = process.env.NEXT_PUBLIC_MONGO_URI;

        if(mongo_uri != undefined){
            await mongoose.connect(mongo_uri);
        }
        
        const url = new URL(request.url);
        const objectId = url.searchParams.get("id");


        let query = await imgfile.findOne({_id: objectId});
    
        return NextResponse.json(query, {status: 200});
  
    } catch (error) {
  
        console.log(error);
    }
}
