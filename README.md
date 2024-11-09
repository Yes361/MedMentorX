# MedMentorX Web Application

MedMentorX is a web-based platform designed to provide users with accessible and accurate health information through structured courses, flashcards, and lessons. Built by a non-profit organization, MedMentorX compiles reliable medical knowledge into digestible, interactive resources to combat misinformation and promote health awareness.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [MongoDB](#mongoDB)
- [Future Improvements](#future-improvements)

---

### Features

- **Health Courses**: Organized into units and lessons, allowing users to explore health topics in detail.
- **Flashcard Search**: Users can search for flashcards by keywords to review or test their knowledge.
- **Dynamic Routing**: Course units, lessons, and flashcards are displayed based on MongoDB data.
- **Authentication**: User authentication through NextAuth for access to additional features.

### Technologies Used

- **Framework**: Next.js 14
- **Database**: MongoDB (using `MongoClient` for direct interaction)
- **Authentication**: NextAuth (with GitHub provider and MongoDB adapter)
- **UI Components**: Shadcn, NextUI, and custom Tailwind CSS styling

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/medicourse.git
   cd medicourse
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and include the following variables:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

   The application should be accessible at `http://localhost:3000`.

### mongoDB

- **Requirements** You'll need a *HOSA-APP* database

### Future Improvements

- **User Progress Tracking**: Enable users to track progress within each course and flashcards
- **Additional Health Resources**: Expand courses and lessons.
- **Enhanced UI**: Improve styling for better UX, adding animations and responsive design.