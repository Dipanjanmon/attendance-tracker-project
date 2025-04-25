# Attendance Tracker

## Description

This project is a simple **Attendance Tracker** built using **Spring Boot** for the backend and **HTML, CSS, JavaScript** for the frontend. The application allows students to check their attendance percentage by entering their roll number. The backend connects to a database (or a mock data source) and returns the attendance percentage, while the frontend displays it in a user-friendly interface.

---

## Features

- Enter your **roll number** to check your **attendance**.
- Backend built with **Spring Boot**.
- Frontend using **HTML**, **CSS**, and **JavaScript**.
- Simple **REST API** for fetching attendance details.

---

## Prerequisites

### Backend Requirements

- **Java 17 or later**.
- **Maven** (for building and running the Spring Boot application).
- An IDE such as **VS Code**, **IntelliJ IDEA**, or **Eclipse**.

### Frontend Requirements

- **VS Code** (or any text editor to edit frontend files).
- **Live Server extension** (for running the frontend).

---

## Setup

### 1. Backend Setup (Spring Boot)

1. **Extract the project files** and navigate to the `attendance-tracker-backend` directory.
2. **Install dependencies** by running the following command in the terminal:

    ```bash
    mvn install
    ```

3. **Run the Backend** by executing the following command in the terminal:

    ```bash
    mvn spring-boot:run
    ```

    - The backend will now run on `http://localhost:8080`.

4. **Test the Backend API** by visiting:

    ```
    http://localhost:8080/attendance?roll=CSE123456
    ```

    You should see attendance details in response.

---

### 2. Frontend Setup (HTML, CSS, JavaScript)

1. **Open the `attendance-tracker-frontend` folder** in your text editor (VS Code recommended).
2. **Install the Live Server extension** in VS Code.
3. **Open `index.html`** in your editor.
4. **Run the Frontend** by right-clicking on `index.html` and selecting **"Open with Live Server"**.
   
   - The frontend will run on `http://127.0.0.1:5500`.

5. **Enter your roll number** on the frontend and click **Check Attendance** to see the data fetched from the backend.

---

## Folder Structure

attendance-tracker-project/
│
├── attendance-tracker-backend/        # Backend (Spring Boot) folder
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/
│   │   │   │       └── example/
│   │   │   │           └── attendancetracker/
│   │   │   │               ├── AttendanceController.java       # Controller for Attendance API
│   │   │   │               └── AttendanceTrackerApplication.java # Main Spring Boot Application class
│   │   └── resources/
│   │       └── application.properties  # Spring Boot configuration file
│   └── pom.xml                         # Maven build file for backend dependencies
│
└── attendance-tracker-frontend/        # Frontend (HTML, CSS, JS) folder
    ├── index.html                      # Frontend HTML file
    ├── style.css                       # Frontend CSS file
    └── script.js                       # Frontend JavaScript file



---

## Usage

1. **Run the backend**: `mvn spring-boot:run` (Backend should be running on `localhost:8080`).
2. **Run the frontend**: Open `index.html` using **Live Server** in VS Code or open it directly in your browser.

---

## License

This project is licensed under the MIT License.

---

## Contributing

If you find any issues or want to suggest improvements, feel free to open an issue or a pull request.

---

