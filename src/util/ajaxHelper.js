import axios from 'axios';


export const ajaxCall = (url, callback) => {
   
    axios.get(url)
      .then(res => {

         callback(res.data);
         
      })
      .catch(err =>{
         callback(err);
      })

   
}


export const ajaxPost = (url, callback) => {
   
   axios.get(url)
     .then(res => {

        callback(res.data);
        
     })
     .catch(err =>{
         callback(err);       
     })

  
}