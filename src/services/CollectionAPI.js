import axios from "axios";


export function createCollectionApi(data) {
  const storeCollection=JSON.parse(localStorage.getItem('token'))
  var formData = new FormData();
  formData.append("collection_name", data?.collection_name);
  formData.append("logo_image", data?.logo_image);
  formData.append("banner_image", data?.banner_image);
  formData.append("feature_image", data?.feature_image);
  formData.append("description", data?.description);
  formData.append("category", data?.category);
  formData.append("create_earning", data?.create_earning);
  formData.append("blockchain", data?.blockchain);
  
  
  return new Promise((resolve, reject) =>
  // setTimeout(() => resolve({ data: amount }), 500)
  axios
  .post(`${process.env.REACT_APP_API_STAGING_URL}/collections`, data,{
    headers: {
      'token': storeCollection, 
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      type: "application/json",
      
        },
      })
      .then(function (response) {
        localStorage.setItem("token", JSON.stringify(response.data));
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      })
  );
}





export function assetsApi(data) {
  console.log(data,"aftfsh")
  const storeAssets=JSON.parse(localStorage.getItem('token'))
    var formData = new FormData();
    formData.append("asset", data?.banner_image[0]);

  return new Promise((resolve, reject) =>
    // setTimeout(() => resolve({ data: amount }), 500)
    axios
      .post(`${process.env.REACT_APP_API_STAGING_URL}/assets`, data,{
      headers :{
        'token': storeAssets,
          Accept: "application/json",
          type: "multipart/form-data",
      },
      })    
      .then(function (response) {
        localStorage.setItem("token", JSON.stringify(response));
        console.log(response, "dfjhirh")
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      })
  );
}