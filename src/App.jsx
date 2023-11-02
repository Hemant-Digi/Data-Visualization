import "./App.css";
import * as React from 'react';
import wineData from "./utils/Wine-Data.json";
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from "./utils/statistics";
import { WineGammaStatisticsComponent } from "./components/Gamma";

// Separate data by classes
const classes = {};
wineData.forEach((item) => {
  const alcoholClass = item.Alcohol;
  if (!classes[alcoholClass]) {
    classes[alcoholClass] = [];
  }
  classes[alcoholClass].push(item.Flavanoids);
});

// Calculate mean, median, and mode for each class
const result = {};
for (const classKey in classes) {
  const FlavanoidsValues = classes[classKey];
  result[classKey] = {
    Mean: calculateMean(FlavanoidsValues),
    Median: calculateMedian(FlavanoidsValues),
    Mode: calculateMode(FlavanoidsValues),
  };
}

// Display the results in React component format
function WineStatisticsComponent() {
  return (
    <>
      <></>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(result).map((classKey) => (
              <th key={classKey}>Class {classKey}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids (Mean, Median, Mode)</td>
            {Object.keys(result).map((classKey) => (
              <td key={classKey}>
                {result[classKey]?.Mean?.toFixed(2)} <br />
                {result[classKey]?.Median?.toFixed(2)} <br />
                {result[classKey]?.Mode}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <h1>Wine Gamma Statistics</h1>
      <WineGammaStatisticsComponent />
    </>
  );
}

export default WineStatisticsComponent;
