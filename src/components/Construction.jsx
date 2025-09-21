import React from "react";
import { Link } from "react-router-dom";

const Construction = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4"
      style={{
        background: "linear-gradient(135deg,#fff8f9 0%, #f6f3f4 40%, #fff 100%)"
      }}
      aria-live="polite"
    >
      {/* Decorative shapes */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: "50%",
          right: -80,
          top: -60,
          background:
            "radial-gradient(circle at 30% 30%, rgba(111,51,72,0.12), rgba(111,51,72,0.04))",
          filter: "blur(28px)"
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 260,
          height: 260,
          borderRadius: "50%",
          left: -60,
          bottom: -40,
          background:
            "radial-gradient(circle at 70% 70%, rgba(218,165,32,0.08), rgba(218,165,32,0.02))",
          filter: "blur(20px)"
        }}
      />

      <div className="relative z-10 max-w-xl w-full text-center">
        <div
          className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-6 mx-auto"
          style={{
            background:
              "linear-gradient(180deg, rgba(111,51,72,0.12), rgba(111,51,72,0.06))"
          }}
        >
          {/* simple wrench / tools svg */}
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M21 4.3l-1.3-1.3a1 1 0 0 0-1.4 0L15 6.3 17.7 9l3.3-3.3a1 1 0 0 0 0-1.4z"
              fill="#6f3348"
            />
            <path
              d="M14.5 7.8l-8.3 8.3a5 5 0 1 0 1.4 1.4l8.3-8.3-1.4-1.4z"
              fill="#b66b7a"
            />
          </svg>
        </div>

        <h1
          className="text-2xl md:text-3xl font-bold mb-3"
          style={{ color: "#3b2a2f" }}
        >
          Page is under maintenance
        </h1>

        <p className="text-gray-600 mb-6">
          We're performing scheduled updates to improve your experience. Please
          check back shortly. If this is urgent, contact us and we'll assist
          you.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 rounded-full font-semibold"
            style={{
              backgroundColor: "#6f3348",
              color: "#fff",
              boxShadow: "0 8px 28px rgba(111,51,72,0.18)",
              textDecoration: "none"
            }}
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Construction;