const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const contactsRouter = require("./routes/contacts");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/contactdb")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error", err));

// Routes
app.use("/api/contacts", contactsRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});





