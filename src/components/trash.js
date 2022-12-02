// export default function SignIn() {
//     const classes = useStyles();
//     const [errorMsg,setErrorMsg]=useState(null)
//     const {user}  = useSelector((state) => state.auth);
  
  
  
//     const [showError, setShowError] = useState(false);
//     const dispatch = useDispatch();
//     const history = useHistory()
    
//     const handleFormSubmit =  (data) => {  
//       dispatch(loginAsync(data));
    
//     };
//     useEffect(() => { 
//         if (user?.code === 201) {
//        setErrorMsg(user.message)
//       }
//     },[user])
  
    
  
  
//     const hideError = () => {
//       setErrorMsg("")
//     }
  
//     const errorShow = () => {
//       setShowError(true);
//     };
  
// }





// export function updateApi(data) {

//   var formData = new FormData();  

//   formData.append("user_id", data?.user_id);
//   formData.append("email", data?.email);
//   formData.append("name", data?.fullName);
//   formData.append("nick_name", data?.driverNickName);
//   formData.append("photo", data?.image);
//   formData.append("country_id", data?.country);
//   formData.append("city_id", data?.city);
//    formData.append("new_password",data?.newPassword);
//   formData.append("confirm_password",data?.confirmPassword);
//   return new Promise((resolve) =>
//     // setTimeout(() => resolve({ data: amount }), 500)
//     axios
//       .post(`${process.env.REACT_APP_API_STAGING_URL}/web-update-account`, formData,
//       {headers: {"Content-Type": "multipart/form-data",
//       "Accept": "application/json",
//       "type": "formData"}})
//       .then(function (response) {
//         localStorage.setItem("user", JSON.stringify(response.data));
//         resolve(response);
//       }).catch(function (error) {
//         console.log(error);
//       })
//   );
// }





		// useEffect(() => {
		//   dispatch(getEmailAsync1())
		//   setCheckEmail(emailData?.data)
		// }, [])
	  



        // export function fakeapi() {  
//   return new Promise((resolve, reject) =>   
//     axios
//       .get(`https://fakestoreapi.com/products`)
//       .then(function (response) {
//         resolve(response);
//       })
//       .catch(function (error) {
//         console.error(error);
//       })
//   );
// }
