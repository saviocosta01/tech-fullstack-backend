import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { customerRoutes } from "./routes/customers.routes"
import { errorHandler } from "./middlewares/handleError"
import { contactRoutes } from "./routes/contacts.routes"
import { loginRouter } from "./routes/login.routes"



const app = express()
app.use(express.json())

app.use("/customers", customerRoutes)
app.use("/contacts", contactRoutes)
app.use("/login", loginRouter)


app.use(errorHandler)

export default app