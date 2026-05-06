import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getFotoByAngkatan(angkatan) {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      max_results: 500,
    });

    // Log semua unique asset_folder
    // const folders = [...new Set(result.resources.map((r) => r.asset_folder))];
    // console.log("Semua folder:", folders);
    // console.log("Mencari:", `gallery-kelas/${angkatan}`);

    const filtered = result.resources.filter(
      (r) => r.asset_folder === `gallery-kelas/${angkatan}`,
    );

    return filtered;
  } catch (error) {
    console.error("Error:", error.message);
    return [];
  }
}

export async function getAllAngkatan() {
  try {
    const result = await cloudinary.api.sub_folders("gallery-kelas");
    return result.folders;
  } catch (error) {
    console.log("Cloudinary Error:", error);
  }
}
