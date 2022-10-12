import storage from "./fb_config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const uploadMultipleImagesAsync = async (images) => {
  let promises = [];
  await images.forEach((x) => {
    promises.push(uploadImageAsync(x));
  });
  return Promise.all(promises)
    .then((upload_res) => {
      return upload_res;
    })
    .catch((err) => console.error(err.code));
};

export const uploadImageAsync = async (uri) => {
  return await new Promise(async (resolve, reject) => {
    const fileRef = ref(storage, `ff_${uri.name}`);
    const result = await uploadBytes(fileRef, uri);

    let downloadUrl = await getDownloadURL(fileRef);

    resolve(downloadUrl); // peviously return;
    reject("failed to upload");
  });
};
