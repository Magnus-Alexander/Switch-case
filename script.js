const dropdown = document.getElementById("dropdown")
const image = document.getElementById("image")


dropdown.addEventListener("change", function () {
    const selectedValue = dropdown.value
    const imageUrl = getImageUrl(selectedValue)
    if (imageUrl) {
        image.src = imageUrl;
    } else {
        image.src = "https://images.unsplash.com/photo-1678289768787-e840d400cf47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    }
})





function getImageUrl(selectedValue) {
    switch (selectedValue) {
        case "Image1":
            return "https://images.unsplash.com/photo-1696177407714-7f63e509122c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1563&q=80";
        case "Image2":
            return "https://images.unsplash.com/photo-1696300879916-630fe08218fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1581&q=80"
        case "Image3":
            return "https://plus.unsplash.com/premium_photo-1682621097202-eca012076ff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        case "Image4":
            return "https://images.unsplash.com/photo-1691276317069-84cdd25b3d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        case "Image5":
            return "https://images.unsplash.com/photo-1695849750081-4e0edf3ea6b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        default:
            return "";
    }

}