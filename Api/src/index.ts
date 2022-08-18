import express from "express"
import app from "./app"
import "./db"
import "./schemas/User"

app.listen(app.get("port"), () => {
    console.log("Listening on port 3001")
})

