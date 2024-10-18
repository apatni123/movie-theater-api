const express = require("express");
const userRouter = require("./routers/userRouter");
const showRouter = require("./routers/showRouter");
const { db } = require("./db/connection"); 

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRouter);
app.use("/shows", showRouter)


app.listen(port, () => {
    db.sync() 
      .then(() => console.log("Database synced successfully"))
      .catch(err => console.error("Failed to sync database:", err));

    console.log(`Listening at http://localhost:${port}/`);
});







