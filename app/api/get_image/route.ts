import { NextResponse } from "next/server";


export async function GET(){
    try {
        //let mongo_uri:string | undefined = process.env.MONGO_URI;
  
        return NextResponse.json("abcde", {status: 200});
  
    } catch (error) {
  
        
      
        console.log(error);
    }
  }