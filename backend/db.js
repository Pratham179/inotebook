const mongoose = require('mongoose');

const connectToMongo = () => {
    mongoose.connect(process.env.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to MongoDB Atlas successfully");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB Atlas:", error);
    });
};

module.exports = connectToMongo;
