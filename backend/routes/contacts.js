import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

// GET all contacts
router.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// GET one contact
router.get("/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
});

// POST new contact
router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update contact
router.put("/:id", async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE contact
router.delete("/:id", async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Contact deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
