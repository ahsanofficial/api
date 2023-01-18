const { NoteModel } = require("../models/Note.model")

const getNotes = async (req, res) => {
    const { tag } = req.query
    const notes = await NoteModel.find({ userId: req.body.userId, tag })
    res.send(notes)
}

const postNotes = async (req, res) => {
    const { Heading, Note, Tag, userId } = req.body;
    const note = new NoteModel({
        Heading,
        Note,
        Tag,
        userId
    })
    try {
        await note.save()
        res.send("note created")
    }
    catch (err) {
        res.send("something went wrong")
    }
}

const deleteNotes = async (req, res) => {
    const { noteId } = req.params
    const deletedNote = await NoteModel.findOneAndDelete({ _id: noteId, userId: req.body.userId })
    if (deletedNote) {
        res.status(200).send("Deleted")
    }
    else {
        res.send("couldn't delete")
    }
}

const updateNotes = async (req, res) => {
    const { noteId } = req.params
    const updatedNote = await NoteModel.findOneAndUpdate({ _id: noteId, userId: req.body.userId }, req.body)
    if (updatedNote) {
        res.send("updated")
    }
    else {
        res.send("couldn't updated")
    }
}

module.exports = { getNotes, postNotes, deleteNotes, updateNotes }