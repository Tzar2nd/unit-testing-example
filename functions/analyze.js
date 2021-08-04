const analyze = (arr) => {
  return {
    average: arr.reduce((prev, cur) => prev + cur) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};

module.exports = analyze;
