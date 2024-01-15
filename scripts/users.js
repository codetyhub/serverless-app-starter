(() => {
    db.collection("users").get().then((snapshots) => {
        let usersTable = document.getElementById('tbody');
        db.collection('users').get().then((users) => {
            usersTable.innerHTML = ""; // Clear the existing content
            users.forEach((user) => {
                usersTable.innerHTML += `
                    <tr>
                        <td>${user.data().first_name}</td>
                        <td>${user.data().last_name}</td>
                        <td>${user.data().email}</td>
                        <td>${new Date(Date(user.data().createdDate)).toLocaleDateString()}</td>
                        <td onclick="triggerUpdateUserModal('${user.id}')" class="action-edit">
                        <button>Edit</button>
                        </td>
                        <td class="action-delete">
                           <button>Delete</button>
                        </td>
                    </tr>
                `;
            });
        });
    });
})();


(() => (
    auth.onAuthStateChanged((user) => {
        if (user) {
            // User is signed in
            const userEmail = user.email;
            
            // Query Firestore collection using the user's email
            db.collection('users').where('email', '==', userEmail).get()
            .then((querySnapshot) => {
                if (!querySnapshot.empty) {
                    // User with the specified email found in the collection
                    const userData = querySnapshot.docs[0].data();
                    const firstName = userData.first_name;
                    const lastName = userData.last_name;

                    // Display the user information (you can replace this with your logic)
                    console.log(`User Found!\nFirst Name: ${firstName}\nLast Name: ${lastName}`);
                    document.getElementById('user-name').innerHTML = `${firstName} ${lastName}`
                } else {
                    // User with the specified email not found in the collection
                    alert('User not found in the collection');
                }
            })
            .catch((error) => {
                window.location.href = "./login.html";
                console.error('Error querying Firestore:', error);
            });
        } else {
            // User is signed out
            window.location.href = "./login.html";
            console.log('User is signed out');
        }
    })
))()


