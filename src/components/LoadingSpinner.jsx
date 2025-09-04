// import { Spinner } from "flowbite-react";
import { Ripple } from "./magicui/ripple";
import { useEffect, useState } from "react";
import { AnimatedCircularProgressBar } from "./magicui/animated-circular-progress-bar";

const LoadingSpinner = () => {
  const [value, setValue] = useState(0);

  // useEffect(() => {
  //   // Animate progress bar
  //   const timer = setTimeout(() => {
  //     const progressBar = document.getElementById("progress-bar");
  //     if (progressBar) {
  //       progressBar.style.width = "100%";
  //     }
  //   }, 100000);

  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    const handleIncrement = (prev) => {
      if (prev === 100) {
        return 0;
      }
      return prev + 10;
    };

    setValue(handleIncrement);

    const interval = setInterval(() => setValue(handleIncrement), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      {/* Modern Gradient Background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #6f3348 50%, #4B1438 75%, #001122 100%)",
          backgroundSize: "400% 400%",
        }}
      />

      {/* Animated Ripple Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Ripple
          mainCircleSize={600}
          mainCircleOpacity={0.8}
          numCircles={12}
          className="opacity-60"
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20 animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 6 + 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center" style={{ width: '300px !important', height: '300px !important' }}>
        {/* Large Spinner */}
        {/* <div className="mb-8">
          <Spinner 
            aria-label="success Loading website..." 
            size="xl"
            color="success"
            className="text-white scale-150"
            style={{ width: '150px', height: '150px' }}
          />
        </div> */}

        <AnimatedCircularProgressBar
          value={value}
          gaugePrimaryColor="#ffffff"
          gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
        />

        {/* Loading Text */}
        {/* <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white mb-2">
            Mount Carmel Hospital
          </h2>
          <p className="text-xl font-medium text-white/90">
            Loading your healthcare experience...
          </p>
          <p className="text-sm text-white/70 max-w-md mx-auto">
            Preparing world-class medical services with compassion and
            excellence
          </p>
        </div> */}

        {/* Progress Bar */}
        {/* <div className="mt-8 w-64 mx-auto">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ width: "0%" }}
              id="progress-bar"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LoadingSpinner;
