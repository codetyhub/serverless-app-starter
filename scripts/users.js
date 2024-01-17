(() => {
    db.collection("users").get().then((users) => {
        console.log(users);
        const tbody = document.getElementById("tbody");
        users.forEach((user) => {
          tbody.innerHTML += `
            <tr>
              <td>${user.data().first_name}</td>
              <td>${user.data().last_name}</td>
              <td>${user.data().email}</td>
              <td>${new Date(Date(user.data().created_at)).toLocaleDateString()}</td>
              <td>
              <button class="edit-btn">Edit</button>
              <button class="delete-btn">Delete</button>
             </td>
            </tr>
          `
        })
    })
})()