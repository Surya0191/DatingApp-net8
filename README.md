# Dating App

A feature-rich dating application built using Angular for the front-end, .NET for the back-end, Entity Framework with SQLite for database management, and Bootstrap for responsive design. The project leverages HTML5, CSS, and TypeScript for a modern and seamless user experience.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Database Design](#database-design)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Overview
This Dating App connects users looking to build meaningful relationships. The application includes features such as user authentication, profile creation, real-time messaging, and compatibility matching.

---

## Features
- **User Registration & Authentication**: Secure login and registration system with JWT authentication.
- **Profile Management**: Create, update, and manage user profiles.
- **Real-Time Messaging**: Chat functionality with real-time updates.
- **Match Recommendations**: Smart matching algorithm based on user preferences.
- **Responsive Design**: Works seamlessly across desktops, tablets, and mobile devices.

---

## Technologies Used

### Front-End:
- Angular
- TypeScript
- HTML5
- CSS
- Bootstrap

### Back-End:
- .NET Core
- C#
- Entity Framework Core
- SQLite

---

## Prerequisites
Ensure you have the following installed on your system:

- **Node.js** (Latest LTS version recommended)
- **Angular CLI**
- **.NET SDK**
- **SQLite**
- **Git**

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/dating-app.git
cd dating-app
```

### 2. Front-End Setup
1. Navigate to the Angular project folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the Angular development server:
   ```bash
   ng serve
   ```
4. Open your browser and navigate to `http://localhost:4200`.

### 3. Back-End Setup
1. Navigate to the .NET project folder:
   ```bash
   cd backend
   ```
2. Restore dependencies:
   ```bash
   dotnet restore
   ```
3. Apply migrations and update the database:
   ```bash
   dotnet ef database update
   ```
4. Run the .NET server:
   ```bash
   dotnet run
   ```

The back-end server will be available at `https://localhost:5001`.

---

## Usage
1. **Registration**: Sign up for a new account.
2. **Login**: Log in using your credentials.
3. **Profile**: Create or update your profile.
4. **Matchmaking**: Browse recommended matches and connect.
5. **Messaging**: Start a conversation with other users.

---

## Database Design
The application uses SQLite for data storage, managed via Entity Framework Core.

### Key Tables:
- **Users**: Stores user account information.
- **Profiles**: Stores detailed profile information.
- **Messages**: Tracks real-time chat messages.
- **Matches**: Records user compatibility and connections.

---

## Future Improvements
- **AI Matching Algorithm**: Integrate machine learning for better match recommendations.
- **Media Sharing**: Enable users to share images and videos.
- **Push Notifications**: Notify users of new messages and profile matches.
- **Premium Features**: Add subscription plans for advanced features.

---


