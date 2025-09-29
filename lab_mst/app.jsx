import React, { useState } from "react";

export default function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Abhi", age: 20 },
    { id: 2, name: "Anu", age: 19 },
    { id: 3, name: "Dev", age: 21 }
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleAddStudent = (e) => {
    e.preventDefault();

    if (name.trim() === "" || age.trim() === "") return;

    const newStudent = {
      id: students.length + 1,
      name,
      age: parseInt(age)
    };

    setStudents([...students, newStudent]);
    setName("");
    setAge("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Student Management System
      </h1>

      <form
        onSubmit={handleAddStudent}
        className="flex flex-col md:flex-row gap-4 items-center justify-center mb-6"
      >
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded-lg w-60"
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="p-2 border rounded-lg w-40"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Student
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {students.map((student) => (
          <div
            key={student.id}
            className="bg-white shadow-lg rounded-2xl p-4 text-center"
          >
            <h2 className="text-xl font-semibold">{student.name}</h2>
            <p className="text-gray-600">Age: {student.age}</p>
            <p className="text-gray-400">ID: {student.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}