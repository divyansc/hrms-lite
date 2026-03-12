# HRMS-LITE

## Project Overview

HRMS-LITE is a lightweight **Human Resource Management System** developed as a Full Stack Developer assessment project. The application allows organizations to manage employee information and track employee attendance.

The backend is built using **Django and Django REST Framework**, which provides RESTful APIs for managing employees and attendance records. The frontend is developed using **React.js**, which interacts with these APIs to display and manage the data through a user interface.

This project demonstrates integration between a modern JavaScript frontend and a Python-based backend.

---

## Tech Stack Used

### Backend
- Python
- Django
- Django REST Framework

### Frontend
- React.js
- JavaScript
- HTML
- CSS

### Database
- SQLite (default Django database)

---

## Steps to Run the Project Locally

### 1. Clone the Repository

```bash
git clone <your-github-repository-link>
cd HRMS-LITE
```

---

### 2. Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment:

**Windows**

```bash
venv\Scripts\activate
```

Install required dependencies:

```bash
pip install django djangorestframework
```

Apply migrations:

```bash
python manage.py migrate
```

Run the Django development server:

```bash
python manage.py runserver
```

The backend server will start at:

```
http://127.0.0.1:8000/
```

---

### 3. Frontend Setup

Open another terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

The frontend will run at:

```
http://localhost:3000
```

---

## API Endpoints

### Employee Endpoints

```
GET    /employees/           - Retrieve all employees
POST   /employees/           - Create a new employee
GET    /employees/{id}/      - Retrieve employee by ID
PUT    /employees/{id}/      - Update employee
DELETE /employees/{id}/      - Delete employee
```

### Attendance Endpoints

```
GET    /attendance/          - Retrieve all attendance records
POST   /attendance/          - Mark employee attendance
GET    /attendance/{id}/     - Retrieve attendance record by ID
PUT    /attendance/{id}/     - Update attendance record
DELETE /attendance/{id}/     - Delete attendance record
```

---

## Assumptions and Limitations

- The project uses **SQLite** as the database for simplicity and development purposes.
- Authentication and authorization are not implemented.
- The system is designed for demonstration and small-scale usage.
- Additional validation and security features can be added for production environments.

---

## Author

**Divyanshi Chaurasia**  
