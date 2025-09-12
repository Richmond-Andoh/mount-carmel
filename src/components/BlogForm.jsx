
import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const initialState = {
  title: "",
  author: "",
  summary: "",
  content: "",
  tags: "",
  image: "",
  category: "General Health",
};

const categories = [
  "General Health",
  "Nutrition",
  "Mental Health",
  "Fitness",
  "Disease Prevention",
  "Women's Health",
  "Men's Health",
  "Children's Health",
  "Other"
];

const BlogForm = ({ onClose }) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setForm(f => ({ ...f, image: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "blogs"), {
        ...form,
        tags: form.tags.split(",").map(tag => tag.trim()),
        createdAt: serverTimestamp(),
        date: new Date().toLocaleDateString(),
      });
      setSuccess(true);
      setForm(initialState);
      setImagePreview("");
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 1200);
    } catch (err) {
      alert("Failed to post blog. Try again.");
    }
    setLoading(false);
  };

  return (
    <form className="p-4" style={{minWidth:320, maxWidth:400}} onSubmit={handleSubmit}>
      <h4 className="mb-3" style={{color:'#6f3348'}}>Post a Health Blog</h4>
      <div className="mb-3">
        <input
          type="text"
          name="title"
          className="form-control rounded-3"
          placeholder="Blog Title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="author"
          className="form-control rounded-3"
          placeholder="Author Name"
          value={form.author}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <select
          name="category"
          className="form-control rounded-3"
          value={form.category}
          onChange={handleChange}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="tags"
          className="form-control rounded-3"
          placeholder="Tags (comma separated)"
          value={form.tags}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <textarea
          name="summary"
          className="form-control rounded-3"
          placeholder="Short Summary"
          rows={2}
          value={form.summary}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          name="content"
          className="form-control rounded-3"
          placeholder="Full Content"
          rows={5}
          value={form.content}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Blog Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          className="form-control rounded-3"
          onChange={handleChange}
        />
        {imagePreview && (
          <img src={imagePreview} alt="Preview" className="mt-2 rounded-3 shadow" style={{width:'100%',maxHeight:180,objectFit:'cover'}} />
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary w-100 rounded-3"
        disabled={loading}
        style={{background: 'linear-gradient(90deg,#6f3348,#4B1438)', border: 'none'}}
      >
        {loading ? "Posting..." : "Post Blog"}
      </button>
      {success && <div className="alert alert-success mt-3">Blog posted!</div>}
    </form>
  );
};

export default BlogForm;
