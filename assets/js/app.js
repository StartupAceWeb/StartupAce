/** @format */

var firebaseConfig = {
  apiKey: "AIzaSyCRZNemA4dfk_Vy1orvVR9d0gZ11xue6zM",
  authDomain: "startupace-auth-system.firebaseapp.com",
  projectId: "startupace-auth-system",
  storageBucket: "startupace-auth-system.appspot.com",
  messagingSenderId: "849716672945",
  appId: "1:849716672945:web:b3c00ca321b274c843a590",
  measurementId: "G-NHL7JGYVGR",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
function saveSubscribers(email) {
  db.collection("subscribers")
    .add({
      email: email,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

async function sendmail(email) {
  try {
    const r = await axios.post("https://eamilservice.herokuapp.com/email", {
      data: { email },
      headers: {
        "Content-Type": "application/json",
      },
    });
    return r.data;
  } catch (e) {
    if (e.response && e.response.data) {
      return e.response.data;
    }
  }
}
const btn = document.querySelector(".subscribe-btn");
console.log(btn);
const email = document.querySelector("#mail");

btn.addEventListener("click", () => {
  console.log(email.value);
  console.log("hello");
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    return sendmail(email.value)
      .then((r) => {
        console.log(r);
        if (r.status) {
          saveSubscribers(email.value);
          alert(r.message);
          return (email.value = "");
        }
        alert(r.message);
        return (email.value = "");
      })
      .catch((error) => {
        console.log("error");
      });
  }
  alert("You have entered an invalid email address!");
  return (email.value = "");
});
