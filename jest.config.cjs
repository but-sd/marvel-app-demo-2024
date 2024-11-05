module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx}", // Collect coverage from all js or jsx files in src folder
    "!src/**/*.test.{js,jsx}", // Exclude test files from coverage
  ],
  coverageReporters: ["text", "lcov"], // Add lcov as a coverage reporter
  testResultsProcessor: "jest-sonar-reporter", // Add jest-sonar-reporter as a test results processor
};