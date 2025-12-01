import express from "express"
import { PrismaClient } from "@prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

const app = express()

const port = process.env.PORT || 3000

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

app.get("/products", async (req, res) => {
    const products = await prisma.product.findMany()
    return res.json(products)
})

app.listen(port, () => {
    console.log("Server is running on port 3000", port)
})
