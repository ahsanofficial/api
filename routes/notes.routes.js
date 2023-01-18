const { Router } = require("express")
const { getNotes, postNotes, deleteNotes, updateNotes } = require("../controllers/notes.controller")
const notesRouter = Router();

notesRouter.get("/", getNotes)
notesRouter.post("/create", postNotes)
notesRouter.delete("/delete/:noteId", deleteNotes)
notesRouter.patch("/edit/:noteId", updateNotes)

module.exports = { notesRouter } 