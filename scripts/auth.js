const onSignup = () => {
    const first_name = document.getElementById("firstName").value;
    const last_name = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    auth.createUserWithEmailAndPassword(email, password).then(async (authUser) => {
        console.log({first_name, last_name, email, created_at: new Date()})
        db.collection("users").doc().set({first_name, last_name, email, created_at: new Date()})
        .then(() => {
            alert("User created successfully")
            window.location.href="./login.html"
        })
        .catch((error) => {
            console.log(error)
            console.log("Profile registration Error")
        })
    })
    .catch(error => {
        console.log("error occurered", error)
        alert("User signup error")
    })
}

const onLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    auth.signInWithEmailAndPassword(email, password).then(async (authUser) => {
       alert("You logged In successfully")
       console.log(authUser)
    })
    .catch(error => {
        console.log("error occurered", error)
        alert("Invalid credentials")
    })
}