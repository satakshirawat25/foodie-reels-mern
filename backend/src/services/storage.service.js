// import ImageKit from "imagekit";

// const imagekit = new ImageKit({
//   publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
//   privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
//   urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
// })

// export const uploadFile = async(file,fileName)=>{
//     const result = await imagekit.upload({
//         file:file,
//         fileName:fileName
//     })
//     return result;
// }

// export const storageService = {
//     uploadFile
// }

import ImageKit from "imagekit";
import dotenv from "dotenv";
dotenv.config();



//    console.log("Public Key:", process.env.IMAGEKIT_PUBLIC_KEY);

export const uploadFile = async (file, fileName) => {
  // ✅ ImageKit yahan initialize hoga (runtime par)

  const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  });

//   console.log("PUBLIC:", process.env.IMAGEKIT_PUBLIC_KEY);
// console.log("PRIVATE:", process.env.IMAGEKIT_PRIVATE_KEY);
// console.log("ENDPOINT:", process.env.IMAGEKIT_URL_ENDPOINT);


  try {
    const result = await imagekit.upload({ file, fileName });
    console.log("ImageKit upload result:", result); // ✅ debug log
    return result;
  } catch (err) {
    console.error("ImageKit upload failed:", err); // ✅ see errors
    throw err;
  }

  

 ;
  

  return result;
};

export const storageService = {
  uploadFile,
};

