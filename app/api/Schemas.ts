import mongoose from "mongoose";

const ImgSchema = new mongoose.Schema({
    imageData: {
        type: Buffer, // Use the Buffer type for storing binary data
        required: true
    },
})

export const imgfile = mongoose.models.imgfile || mongoose.model("imgfile", ImgSchema, "imgfile");