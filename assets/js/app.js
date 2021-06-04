var firebaseConfig = {
  apiKey: "AIzaSyCdZeiS0RP3_x11MM-BeeK2REiTHhrYGbM",
  authDomain: "newsletter-cad01.firebaseapp.com",
  projectId: "newsletter-cad01",
  storageBucket: "newsletter-cad01.appspot.com",
  messagingSenderId: "662517516200",
  appId: "1:662517516200:web:3b8c92ae8816ab7547bf9d",
  measurementId: "G-N0499NLR7H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
function saveSubscribers(email){
  db.collection("subscribers").add({
    email:email
  })
  .then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
}


async function sendmail(email){
    try{
      const r = await axios.post("http://localhost:5000", {
        data:{email},
        headers: {
          "Content-Type": "application/json",
          
        },
      });return r.data;
  }
    catch(e){
        if(e.response && e.response.data){
            return e.response.data;
        }
    }
}
const btn=document.querySelector(".subscribe-btn");
console.log(btn);
 const email=document.querySelector("#mail");
 
btn.addEventListener("click",()=>{
  console.log(email.value);
console.log("hello");
if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.value))
  {
    return sendmail(email.value).then((r)=>{
      console.log(r);
      if(r.status){

        saveSubscribers(email.value);
        alert(r.message);
        return email.value=""
      }
      alert(r.message);
      return email.value=""
    }).catch((error)=>{
      console.log("error");
    })
  }
   alert("You have entered an invalid email address!")
  return email.value=""  

})


