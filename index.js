const translate = require("translate-google");
const express = require("express")
const path = require("path")

const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.resolve("acumalaka.html"))
})

app.get("/translate/:lang/:input", async(req, res)=> {
    if(req.params.lang &&  req.params.input) {
    const translated = await translate(req.params.input, {to: req.params.lang})
    console/log(`From: ${req.params.input} \n To: ${translated}`)
    res.status(200).send(translated)
} else{
    res.status(400).send("Invalid request")
}
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
