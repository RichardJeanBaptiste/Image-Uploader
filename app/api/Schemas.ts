import mongoose from "mongoose";

const ImgSchema = new mongoose.Schema({
    img_file: String,
})

export const imgfile = mongoose.models.imgfile || mongoose.model("imgfile", ImgSchema, "imgfile");