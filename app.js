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

const cardTemplate = document.querySelector("[data-template]")
const userContainer = document.querySelector("[data-usercard-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
    const Value = e.target.value.toLowerCase()



    users.forEach(user => {
        const isVisible =
            user.name.toLowerCase().includes(Value) ||
            user.email.toLowerCase().includes(Value)
        user.element.classList.toggle("hide", !isVisible)


    })
})


fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => {
        users = data.map(user => {
            const card = cardTemplate.content.cloneNode(true).children[0]
            const pic = card.querySelector("[data-pic]")
            const description = card.querySelector("[data-description]")
            pic.textContent = user.picture
            description.textContent = user.description
            userContainer.append(card)

            return { pic: user.picture, description: user.description, element: card }







        })
    })
