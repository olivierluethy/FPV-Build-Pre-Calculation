# FPV Drone Calculation Project

## Overview

This project is designed to assist drone enthusiasts, particularly those involved in FPV (First-Person View) drones, with crucial motor and battery calculations. The application provides a way to calculate and optimize key parameters such as motor RPM (Revolutions Per Minute), KV (RPM per volt), voltage, and maximum current. By inputting basic values, users can quickly determine if their chosen components (motors, batteries, etc.) are suitable for their drone setup. The tool also offers recommendations for different battery types (3S, 4S, 5S, or 6S) and motors based on calculated results.

## Purpose

The primary goal of this tool is to help users make informed decisions about drone hardware, ensuring that motors and batteries are appropriately matched for safe and efficient performance. This can save users time and money by avoiding mismatched components that can lead to overheating, reduced performance, or even hardware damage.

## Features

1. **RPM Calculation:**
   - Allows users to input KV (motor constant) and battery voltage to calculate motor RPM.
   - Provides recommendations for batteries (e.g., 3S, 4S, 5S, 6S) based on the calculated RPM.
   - Displays warnings if the RPM is too high, suggesting hardware changes to ensure safety.

2. **KV Calculation:**
   - Given the desired RPM and battery voltage, the tool calculates the necessary KV for the motor.
   - Warns if the KV is too high and recommends appropriate motors to match the setup.

3. **Voltage Calculation:**
   - Allows users to calculate the required voltage by inputting RPM and KV.
   - Alerts users if the voltage is too high, suggesting adjustments in motor or battery choice.

4. **Maximum Current Calculation:**
   - Determines the maximum current the drone can handle based on battery capacity (Ah) and C-rate.
   - Helps users ensure that their setup does not overload the battery, which could lead to performance issues or battery damage.

5. **Capacities and C-Rate:**
   - Includes calculations for determining capacity (Ah) based on maximum current and C-rate.
   - Provides insights on safe battery usage based on current draw and capacity.

6. **Error Handling:**
   - Displays warnings in red for high values that exceed safe operating conditions.
   - Handles invalid inputs, ensuring smooth and error-free user interaction.

## Usage

1. **RPM Calculation:**
   - Input the **KV** and **voltage** values.
   - The tool will display the calculated RPM and provide suggestions if the RPM is too high, recommending battery changes if necessary.

2. **KV Calculation:**
   - Input the **RPM** and **voltage** values.
   - The result will show the required KV value for your motor. If the KV is too high, the tool will recommend motors with lower KV ratings.

3. **Voltage Calculation:**
   - Input the **RPM** and **KV** values.
   - The tool will calculate the necessary battery voltage and suggest a safer voltage range if the result exceeds standard limits.

4. **Maximum Current Calculation:**
   - Input the **battery capacity** (in Ah) and **C-rate**.
   - The result will display the maximum current the battery can handle.

5. **Capacity Calculation:**
   - Input the **C-rate** and **current draw** values to calculate the capacity.

6. **C-Rate Calculation:**
   - Input the **current draw** and **capacity** values to determine the C-rate of your battery.

## Warnings and Recommendations

- The tool dynamically calculates thresholds for RPM, KV, and voltage and gives recommendations for safe operation.
- When a value exceeds safe limits, the corresponding field is highlighted, and a red warning message is displayed.
- Users are provided with battery and motor suggestions to optimize their drone configuration for safety and performance.

## Installation and Setup

1. Clone or download the repository to your local machine.
2. Open the `index.html` file in your browser.
3. Ensure the JavaScript files (`script.js`) are linked properly to enable functionality.
4. Optionally, customize the CSS file (`style.css`) for your own design preferences.

## Future Improvements

- **Expanded Component Database:** The project could be expanded to include specific motor and battery models for even more tailored recommendations.
- **User Interface Improvements:** Add more interactive UI elements to enhance user experience, such as sliders for values, real-time feedback, and color-coded warnings.
- **More Detailed Warnings:** Include more specific recommendations based on other components such as ESC (Electronic Speed Controllers) or propeller sizes.

## Contributions

Contributions to improve the functionality, performance, or design of this tool are welcome! Feel free to fork the repository, make your changes, and submit a pull request.

---

This project is intended to provide drone enthusiasts with a helpful and intuitive tool for calculating key hardware values and making informed decisions when building or upgrading their FPV drones.