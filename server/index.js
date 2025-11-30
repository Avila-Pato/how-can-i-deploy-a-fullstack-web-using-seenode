import express from "express"


const app = express()

const port  = process.env.PORT || 3000

app.get("/products", (req, res) => {
    res.json([
        {
            id: "1",
            name: "Indian Man",
            price: 100,
            description: "Indian Man",
            imageUrl: "https://m.media-amazon.com/images/I/71+IREvx7YL._AC_SL1200_.jpg",
        }
    ])
})

app.listen(port, () => {
    console.log("Server is running on port 3000", port)
})
