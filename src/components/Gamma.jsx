import wineData from "../utils/Wine-Data.json";
import { calculateStatistics } from "../utils/statistics";
import * as React from 'react';

// Calculate Gamma property for each data point
wineData.forEach((item) => {
  item.Gamma = (item?.Ash * item.Hue) / item.Magnesium;
});

// Separate data by classes for the new property "Gamma"
const gammaClasses = {};
wineData.forEach((item) => {
  const alcoholClass = item.Alcohol;
  if (!gammaClasses[alcoholClass]) {
    gammaClasses[alcoholClass] = [];
  }
  gammaClasses[alcoholClass].push(item?.Gamma);
});

// Calculate mean, median, and mode for each class for the new property "Gamma"
const gammaStatistics = {};
for (const classKey in gammaClasses) {
  gammaStatistics[classKey] = calculateStatistics(gammaClasses[classKey]);
}

// Display the results in React component format
export function WineGammaStatisticsComponent() {
  return (
    <table>
      <thead>
        <tr>
          <th>Measure</th>
          {Object.keys(gammaStatistics).map((classKey) => (
            <th key={classKey}>Class {classKey}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Gamma (Mean, Median, Mode)</td>
          {Object.keys(gammaStatistics).map((classKey) => (
            <td key={classKey}>
              {gammaStatistics[classKey]?.Mean} <br />
              {gammaStatistics[classKey]?.Median} <br />
              {gammaStatistics[classKey]?.Mode}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}
