# Examination-Hall-Seating-Invigilator-Allocation-Register
A web-based Examination Hall Seating and Invigilator Allocation Register that manages student seating, hall allocation, and invigilator assignments with search, validation, and record management.
# Examination Hall Seating & Invigilator Allocation Register

## Project Overview

This project helps examination staff allocate students to examination halls and assign invigilators efficiently. It reduces manual errors such as duplicate seat allocation, hall overcapacity, and assigning the same invigilator to multiple halls during the same session.

## Features

* Student seating allocation
* Invigilator duty allocation
* Live search
* Hall filter
* Record count
* Add new records
* View record details
* Edit records
* Delete records
* Validation for duplicate seats
* Validation for duplicate invigilator duties
* Hall capacity checking
* Dashboard summary

## Technologies Used

* HTML
* CSS
* JavaScript
* LocalStorage
* JSON

## How to Run

1. Open the project folder in VS Code.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## Field Description

* Student Name – Name of the student
* Register Number – Student register number
* Subject – Exam subject
* Hall – Allocated examination hall
* Seat – Seat number
* Session – Morning or Afternoon
* Invigilator – Staff assigned to the hall

## Summary Calculations

* Total Students = Number of student records
* Total Halls = Unique halls
* Total Invigilators = Unique invigilators
* Available Seats = Hall Capacity − Occupied Seats

## Author

Nikilesh Prakash V.
