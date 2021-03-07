import express from 'express';

const app = express();


app.get("/users", (request, response) => {
    return response.json({"message":"Hello World - NLW"})
})

app.listen(3333, () => console.log("Server is running!"));
