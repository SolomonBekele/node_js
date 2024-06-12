const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.use(express.json())
router.use(express.urlencoded({extended:false}))

// Assuming you have a Student schema defined somewhere
const Student = mongoose.model("Student");

// Routes
router.get("/", (req, res) => {
  res.render("student/addOrEdit", {
    viewTitle: "Insert Student",
  });
});

router.post("/", async (req, res) => {
  try {
    if (req.body._id === "") {
      await insertRecord(req, res);
    } else {
      await updateRecord(req, res);
    }
  } catch (error) {
    // Handle errors appropriately (e.g., logging, user messages)
    console.error(error);
    res.status(500).send("Error occurred"); // Send generic error response
  }
});

async function insertRecord(req, res) {
  if (!req.body._id || req.body._id.trim() === '') {
    delete req.body._id;
  }
  const student = new Student(req.body);
  try {
    await student.save();
    res.status(201).redirect("student/list"); // Created (201)
  } catch (error) {
    // Handle validation errors or other errors
    console.error(error);
    res.status(400).send("Error creating student"); // Bad Request (400)
  }
}

async function updateRecord(req, res) {
  try {
    const updatedStudent = await Student.findOneAndUpdate(
      { _id: req.body._id },
      req.body,
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).send("Student not found"); // Not Found (404)
    }
    res.redirect("student/list");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating student"); // Internal Server Error (500)
  }
}

router.get("/list", async (req, res) => {
  try {
    const students = await Student.find();
    res.render("student/list", {
      list: students,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving students"); // Internal Server Error (500)
  }
});

router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send("Student not found"); // Not Found (404)
    }
    res.render("student/addOrEdit", {
      viewTitle: "Update Student",
      student,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving student"); // Internal Server Error (500)
  }
});

router.get("/delete/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params._id);
    res.redirect("student/list");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting student"); // Internal Server Error (500)
  }
});

module.exports = router;
