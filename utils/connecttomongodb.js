import mongoose from "mongoose"

export async function Connecttomongodb(){
	try{
		await mongoose.connect(process.env.MONGODBURL)

	}catch(e){
		console.log('error while connecting to monghodb ')
		throw e ;
	}
	return ;
}