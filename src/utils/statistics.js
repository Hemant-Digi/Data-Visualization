// Function to calculate mean
export function calculateMean(values) {
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

// Function to calculate median
export function calculateMedian(values) {
  const sortedValues = values.sort((a, b) => a - b);
  const middle = Math.floor(sortedValues.length / 2);
  if (sortedValues.length % 2 === 0) {
    return (sortedValues[middle - 1] + sortedValues[middle]) / 2;
  } else {
    return sortedValues[middle];
  }
}

// Function to calculate mode
export function calculateMode(values) {
  const frequency = {};
  values.forEach((value) => {
    frequency[value] = (frequency[value] || 0) + 1;
  });

  let maxFrequency = 0;
  let mode = null;

  for (const value in frequency) {
    if (frequency[value] > maxFrequency) {
      maxFrequency = frequency[value];
      mode = value;
    }
  }

  return mode;
}

// Function to calculate mean, median, and mode for an array of values
export function calculateStatistics(values) {
  const sortedValues = values.sort((a, b) => a - b);
  const middle = Math.floor(sortedValues.length / 2);
  const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
  const median =
    sortedValues.length % 2 === 0
      ? (sortedValues[middle - 1] + sortedValues[middle]) / 2
      : sortedValues[middle];

  const frequency = {};
  values.forEach((value) => {
    frequency[value] = (frequency[value] || 0) + 1;
  });

  let maxFrequency = 0;
  let mode = null;

  for (const value in frequency) {
    if (frequency[value] > maxFrequency) {
      maxFrequency = frequency[value];
      mode = value;
    }
  }

  return {
    Mean: mean.toFixed(3),
    Median: median.toFixed(3),
    Mode: parseInt(mode, 10).toFixed(3),
  };
}
