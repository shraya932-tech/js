const express = require('express');
const router = express.Router();

const students = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

// GET /students - List all students
router.get('/', (req, res) => {
    const studentNames = students.map(s => s.name).join(', ');
    res.send(`Students: ${studentNames}`);
});

// GET /students/:id - Fetch a student by ID
router.get('/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (student) {
        res.send(`Student: ${student.name}`);
    } else {
        res.send("Student not found");
    }
});

module.exports = router;