# Task Management Dashboard with Kanban Board

## Table of Contents
- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

The Task Management Dashboard is a full-stack web application built with Next.js, React, and MongoDB. It provides users with a powerful and intuitive interface to manage their tasks using both a list view and a Kanban board. This project demonstrates the implementation of modern web development practices, including responsive design, user authentication, and real-time updates.

## Features

- **User Authentication**: Secure signup, login, and logout functionality.
- **Task List View**: A comprehensive list of all tasks with sorting and filtering options.
- **Kanban Board**: Visual task management with drag-and-drop functionality.
- **CRUD Operations**: Create, read, update, and delete tasks seamlessly.
- **Responsive Design**: Fully responsive interface using Shadcn UI components.
- **Real-time Updates**: Instant reflection of changes across views.

## Tech Stack

- **Frontend**: Next.js 14+, React 18+
- **Backend**: Next.js API Routes
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **State Management**: React Context API
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS
- **Drag and Drop**: react-beautiful-dnd

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MongoDB (v4.0.0 or later)

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository
   ```
   git clone https://github.com/aaryan182/task-management-dashboard.git
   ```

2. Navigate to the project directory
   ```
   cd task-management-dashboard
   ```

3. Install NPM packages
   ```
   npm install
   ```

4. Set up your environment variables by creating a `.env.local` file in the root directory. Use the `.env.example` file as a template.

5. Start the development server
   ```
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
task-management-dashboard/
├── app/                    # Next.js 14 app directory
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page
│   ├── login/              # Login page
│   ├── signup/             # Signup page
│   └── dashboard/          # Dashboard pages
├── components/             # React components
├── lib/                    # Utility functions and modules
├── models/                 # MongoDB models
├── pages/api/              # API routes
├── public/                 # Static files
├── styles/                 # Global styles
├── .env.local              # Environment variables (create this file)
├── .gitignore
├── next.config.js          # Next.js configuration
├── package.json
├── README.md
└── tsconfig.json           # TypeScript configuration
```

## Configuration

Create a `.env.local` file in the root directory with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

Replace `your_mongodb_connection_string` with your actual MongoDB connection string and `your_jwt_secret` with a secure random string.

## Running the Application

After setting up the project and configuring the environment variables:

1. Start the development server:
   ```
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser.

3. Sign up for a new account or use the following test credentials:
   - Email: test@example.com
   - Password: password123

## Deployment

To deploy the application to production:

1. Build the application:
   ```
   npm run build
   ```

2. Start the production server:
   ```
   npm start
   ```

For deployment to platforms like Vercel or Netlify, refer to their respective documentation for Next.js deployments.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@AaryanBajaj18](https://x.com/AaryanBajaj18) - aaryanbajaj385@hmail.com
