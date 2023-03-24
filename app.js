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