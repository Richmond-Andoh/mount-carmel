
import React, { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const roles = [
  "Fertility Treatment Success",
  "Maternity Care Patient",
  "General Medicine Patient",
  "Anaesthetics Patient",
  "Physician Patient",
  "Pediatric Care Parent",
  "Emergency Care Patient",
  "Urology Patient",
  "Laboratory Services Patient",
  "Other"
];

const TestimonyForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState(roles[0]);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(5);
  // const [image, setImage] = useState(null); // For future image upload
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      await addDoc(collection(db, "testimonies"), {
        name,
        role,
        content,
        rating,
        // image, // For future image upload
        createdAt: Timestamp.now(),
      });
      setSuccess("Thank you for sharing your testimony!");
      setName("");
      setRole(roles[0]);
      setContent("");
      setRating(5);
      // setImage(null);
    } catch (err) {
      setError("Failed to submit testimony. Please try again.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Share Your Testimony</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full mb-2 p-2 border rounded"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
        className="w-full mb-2 p-2 border rounded"
      >
        {roles.map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>
      <textarea
        placeholder="Your Testimony"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="w-full mb-2 p-2 border rounded"
        rows={4}
      />
      <div className="mb-2">
        <label className="block mb-1">Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full p-2 border rounded"
        >
          {[5,4,3,2,1].map((val) => (
            <option key={val} value={val}>{val} Star{val > 1 ? 's' : ''}</option>
          ))}
        </select>
      </div>
      {/* For future image upload:
      <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
      */}
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
      {success && <p className="text-green-600 mt-2">{success}</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </form>
  );
};

export default TestimonyForm;
