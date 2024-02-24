import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { imgfile } from "../Schemas";


export async function POST(request: Request){
    try {
        let mongo_uri:string | undefined = process.env.NEXT_PUBLIC_MONGO_URI;

        if(mongo_uri != undefined){
            await mongoose.connect(mongo_uri);
        }

        let data = await request.json();
        
        let newImgFile = new imgfile({
            img_file: data.img_file,
        })

        console.log(newImgFile);
        await newImgFile.save();
        return NextResponse.json({image_id: newImgFile._id}, {status: 200})

    } catch (error) {
        
        // console.log(process.env.MONGO_URI);
        console.log(error);
        
        return NextResponse.json({msg: "Server Error :("}, {status: 500});
    }
}