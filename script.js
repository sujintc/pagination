document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById("userList");

            data.forEach(user => {
                const card = document.createElement("div");
                card.classList.add("card");

                const keysOrder = ["name", "email", "address.street", "address.city"];
                keysOrder.forEach(key => {
                    const value = key.includes('.') ? user[key.split('.')[0]][key.split('.')[1]] : user[key];
                    const keyElement = document.createElement("p");
                    keyElement.innerHTML = `${key.split('.').pop()}: ${value}`;
                    card.appendChild(keyElement);
                });

                userList.appendChild(card);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});
