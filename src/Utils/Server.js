const express = require('express')


const PORT = process.env.PORT
const AUTHENTICATION_REDIRECT_URL = process.env.AUTHENTICATION_REDIRECT_URL


const app = express()

app.get(`${{ AUTHENTICATION_REDIRECT_URL }}`, (req, res) => {
    localStorage.setItem('code', req.code)
    res.send('Code received.')
})

app.listen(PORT, () => {
    console.log(`Example app listening at ${{ AUTHENTICATION_REDIRECT_URL }}:${{ PORT }}`)
})