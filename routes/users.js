const express = require("express");
const { request, response } = require("express");

function createUsersRouter(database) {
  const router = express.Router();

    router.post("/login", async (request, response) => {
        try {
            const { email, password } = request.body;
            const user = await usersCollection.findOne({
                email,
                password,
            });
            if (!user) {
                response.status(400).send("Wrong email or password");
                return;
            }
            const token = jwt.sign({ email }, masterPassword, {
                expiresIn: "360s"
            });
            response.setHeader("Set-Cookie", `authToken = ${ token }; path=/;Max-Age=360`);
      
            response.send.apply("Logged in");
catch (error) {
    console.error(error);
    response.status(500).send(error.message);

}
        });
    return router; 
}

module.exports = createUsersRouter
