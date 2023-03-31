const container = document.querySelector(".intro")
const texts1 = document.querySelector(".let-dress")
const texts2 = document.querySelector(".let-dress2")

container.addEventListener("mouseenter", () => {
    texts2.classList.toggle("active")
    texts1.classList.toggle("active")
})
container.addEventListener("mouseleave", () => {
    texts2.classList.remove("active")
    texts1.classList.remove("active")
})


// FOR NOTIFICATION ON ADDED ITEMS ON CART
const addItem = document.querySelectorAll(".add-cart")
const notification_Circle = document.querySelector(".circle-notify")
const notification_counter = document.querySelector(".num")

let counter = 0
addItem.forEach((button) => {
    button.addEventListener("click", () => {
        notification_Circle.classList.add("active")

        counter++
        notification_counter.textContent = counter
    })


})

// TO POPULATE THE GRID TEMPLATE AND SEARCH ITEMS

// const cardTemplate = document.querySelector("[data-template]")
// const userContainer = document.querySelector("[data-usercard-container]")




// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.json())
//     .then(data => {
//         users = data.map(user => {
//             const card = cardTemplate.content.cloneNode(true).children[0]
//             const pic = card.querySelector("[data-pic]")
//             const description = card.querySelector("[data-description]")
//             pic.textContent = user.picture
//             description.textContent = user.description
//             userContainer.append(card)

//             return { pic: user.picture, description: user.description, element: card }



//         })
//     })


let users = []

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        users = data.map(values => values)

        let data1 = ""
        users.forEach(user => {
            data1 += `
        <div class="card">
          <center>
            <img src="${user.image}" alt="" class="pic">
          </center>
          <center>
            <div class="description" data-description></div>
          </center>
          <p class="para" data-para>${user.title}</p>
          <button type="submit" class="add-cart" data-btn>Add Item</button>
        </div>`
        })

        document.querySelector(".item-grid").innerHTML = data1


        // <<<<<<<<<< SEARCHING WITH INPUT >>>>>>>>>>>>>>>>>>>>>>>>>
        // In this BELOW code, we use querySelector to find the first p element within the card 
        // that has a data-para attribute. We then check if that element exists, and if it does, 
        // we check if its text content matches the title of any of the filtered users. 
        // If there's a match, we show the card, and if not, we hide it.



        // Add event listener to search button
        const searchBtn = document.querySelector(".search-btn")
        searchBtn.addEventListener("click", () => {
            // Get search term from input field
            const searchTerm = document.querySelector(".search").value.trim().toLowerCase()

            // Show only filtered cards
            const filteredUsers = users.filter(user => user.title.toLowerCase().includes(searchTerm))
            const cards = document.querySelectorAll(".card")
            cards.forEach(card => {
                const cardElem = card.querySelector(".card p[data-para]")
                if (cardElem && filteredUsers.some(user => user.title === cardElem.textContent)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });


    })
    .catch(error => {
        console.log(error);
    })






