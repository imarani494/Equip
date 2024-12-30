

const express = require('express');
const dotenv = require('dotenv');
const userRouter = require("./route/user.route");
const sequelize = require("./configue/db");
dotenv.config();

const app = express();
app.use(express.json());

app.use('/user', userRouter);

// Ensure you are listening on the correct port
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    try {
        console.log(`Server is running on port ${PORT}`);
        await sequelize.authenticate();
        console.log('Database connected');
    } catch (error) {
        console.log('Error connecting to the database:', error);
    }
});
