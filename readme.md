# Task Management 
A RESTful API for efficient task management, built using MongoDB, Node.js, and Express framework.

```

backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── middleware/
│   ├── auth.js
│   └── error.js
├── models/
│   ├── User.js
│   └── Task.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
├── utils/
├── .env
└── server.js
```
 

## API Endpoints

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Task Endpoints
- `GET /api/tasks` - Get all tasks (with optional filters)
- `POST /api/tasks` - Create a new task
- `GET /api/tasks/:id` - Get a specific task
- `PUT /api/tasks/:id` - Update a specific task
- `DELETE /api/tasks/:id` - Delete a specific task

## Installation & Setup

 1. Clone the repository

   ```bash
   git clone https://github.com/sanjanaynvsdl/Task-Management.git
   cd Task-Management

```

2. Install dependencies

```shellscript
 npm install

```


3. Create a .env file in the root directory and add:

```plaintext
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=24h

```


4. Start the server

```shellscript
 npm start

```




## API Features

- User Authentication with JWT
- CRUD operations for tasks
- Filter tasks by status and priority
- Sort tasks by due date
- Pagination support
- Error handling
- Input validation


## Error Handling

The API implements proper error handling with appropriate HTTP status codes:

- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error


## Authentication

All task-related endpoints require authentication. Include the JWT token in the Authorization header:

```plaintext
 Authorization: Bearer <your_jwt_token>Authorization: Bearer <your_jwt_token>

```



