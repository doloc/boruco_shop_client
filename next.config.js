const intercept = require("intercept-stdout");

// Safely ignore Recoil stdout warning messages
function interceptStdout(text) {
  if (text.includes('Duplicate atom key')) {
    return '';
  }
  return text;
}

// Intercept in dev and prod
intercept(interceptStdout);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js configuration options here
};

module.exports = nextConfig;
