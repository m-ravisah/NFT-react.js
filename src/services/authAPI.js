import axios from "axios";

export function registerApi(data) {
  return new Promise((resolve, reject) =>
    // setTimeout(() => resolve({ data: amount }), 500)
    axios
      .post(`${process.env.REACT_APP_API_STAGING_URL}/users/register`, data)
      .then(function (response) {
        localStorage.setItem("user1", JSON.stringify(response.data));

        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
        reject(error);
      })
  );
}

export function loginApi(data) {
  return new Promise((resolve, reject) =>
    axios
      // .post(`https://stgn.appsndevs.com:9067/api/v1/users/login`, data)
      .post(`${process.env.REACT_APP_API_STAGING_URL}/users/login`, data)

      .then(function (response) {
        console.log(response.data, "dtysayd");
        if (response?.data?.data?.user_id !== "") {
          console.log("response----------->", response.data.token);
          localStorage.setItem("token", JSON.stringify(response.data.token));
        } else {
          console.error(response);
        }
        resolve(response);
      })
      .catch(function (error) {
        reject(error);
        console.error(error);
      })
  );
}


export function fetchApi(data) {
  const fetchData=JSON.parse(localStorage.getItem('token', data))
  return new Promise((resolve, reject) =>
    axios
      .get(`${process.env.REACT_APP_API_STAGING_URL}/users/profile`,{
        headers :{
        'token': fetchData
          },
          
        })
      .then(function (response) {
      //  console.log(response.data, "fdhsdufc")
        resolve(response);
      })
      .catch(function (error) {
        reject(error)
        console.error(error);
      })
  )
}






export function updateApi(data) {
  const updateData = JSON.parse(localStorage.getItem('token'))
  var formData = new FormData();
  formData.append("username", data?.username);
  formData.append("firstname", data?.firstname);
  formData.append("lastname", data?.lastname);
  formData.append("phone_number", data?.phone_number);
  // formData.append("photo", data?.photo);

  return new Promise((resolve) =>
    // setTimeout(() => resolve({ data: amount }), 500)
    axios
      .put(`${process.env.REACT_APP_API_STAGING_URL}/users/auth`, formData,{
        headers: {
          'token': updateData, 
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          type: "application/json",
          
        },
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  );
}
