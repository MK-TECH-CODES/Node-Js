const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactmodel");

const getContactById = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }
    res.status(200).json(contact);
  } catch (err) {
    res.status(404);
    throw new Error("Contact not found");
  }
});

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  if (!contacts) {
    res.status(404);
    throw new Error("Contacts not found");
  }
  res.status(200).json(contacts);
});

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phoneno } = req.body;
  if (!name || !email || !phoneno) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const contact = await Contact.create({
    name,
    email,
    phone: phoneno,
    user_id: req.user.id,
  });
  res.status(201).json(contact);
});

const editContact = asyncHandler(async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      res.status(404);
      throw new Error("Contact not found");
    }

    if (contact.user_id.toString() !== req.user.id) {
      res.status(403);
      throw new Error("User not have permission to update other user account");
    }

    const updateContact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateContact);
  } catch (err) {
    res.status(404);
    throw new Error("Contact not found");
  }
});

const deleteContact = asyncHandler(async (req, res) => {
  const contactId = req.params.id;
  // console.log("Delete request received for ID:", contactId);

  const contact = await Contact.findById(contactId);
  if (!contact) {
    console.log("Contact not found for ID:", contactId);
    res.status(404);
    throw new Error("Contact not found");
  }

  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error("User not have permission to update other user account");
  }

  await Contact.deleteOne({ _id: contactId });
  //console.log("Contact removed for ID:", contactId);

  res.status(200).json({ message: "Contact removed", id: contactId });
});

module.exports = {
  getContactById,
  getAllContacts,
  createContact,
  editContact,
  deleteContact,
};
