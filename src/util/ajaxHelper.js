import axios from 'axios';


export const ajaxCall = (url, callback) => {
   
    axios.get(url)
      .then(res => {

         callback(res.data);
         return;
      })
      .catch(err =>{
         console.log(err)

         return;
      })

   
}