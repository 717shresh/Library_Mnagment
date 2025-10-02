
# 📚 Library Management System (Backend)

A full-stack **Library Management System** built with **Node.js, Express, PostgreSQL (Supabase)**, and deployed on **Render + Vercel**.  
This backend provides REST APIs for **user authentication, book management, section management, and issuing/returning e-books**.  

---

## 🚀 Features
- Multi-user system: **Admin, Librarian, Student**
- User authentication with **JWT**
- Librarian/Admin:
  - Add sections & books
  - Approve/Reject issue requests
- Students:
  - Request, read, and return books
- Automatic tracking of issued/returned books
- Secure role-based access
- Supabase PostgreSQL for persistent storage

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js  
- **Database:** PostgreSQL (Supabase)  
- **Auth:** JWT + bcrypt for password hashing  
- **Deployment:**  
  - Backend → Render  
  - Frontend → Vercel  
  - Database → Supabase  

---

## 📂 Project Structure
```
lms-backend/
├── controllers/        # Business logic
├── models/             # Database queries
├── routes/             # API route definitions
├── middleware/         # Auth middleware
├── db.js               # DB connection (Supabase Postgres)
├── server.js           # Main server entry point
├── package.json
└── .env
```


---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repo
```bash
git clone https://github.com/<your-username>/Library_Management.git
cd Library_Management/lms-backend
````

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment

Create a **.env** file in root:

```env
PORT=5000
DATABASE_URL=your_supabase_postgres_connection_url
JWT_SECRET=your_jwt_secret
```

### 4️⃣ Run Locally

```bash
npm start
```

Server will run on → `http://localhost:5000`

---

## 🗄 Database Schema (Supabase)

Create the following tables in Supabase:

```sql
-- Users
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  date_created TIMESTAMP DEFAULT NOW()
);

-- Sections
CREATE TABLE sections (
  section_id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  date_created TIMESTAMP DEFAULT NOW()
);

-- Books
CREATE TABLE books (
  book_id SERIAL PRIMARY KEY,
  section_id INT REFERENCES sections(section_id),
  name VARCHAR(200) NOT NULL,
  author VARCHAR(150),
  content TEXT,
  date_added TIMESTAMP DEFAULT NOW()
);

-- Book Issues
CREATE TABLE book_issues (
  issue_id SERIAL PRIMARY KEY,
  book_id INT REFERENCES books(book_id),
  user_id INT REFERENCES users(user_id),
  issued_date TIMESTAMP DEFAULT NOW(),
  return_date TIMESTAMP,
  status VARCHAR(50) DEFAULT 'pending'
);
```

---

## 🔑 API Endpoints

### Auth

* `POST /api/auth/register` → Register new user
* `POST /api/auth/login` → Login & get JWT

### Users (Admin only)

* `GET /api/users` → List all users
* `PUT /api/users/:id/role` → Change user role

### Sections

* `POST /api/sections` → Add section (Librarian/Admin)
* `GET /api/sections` → Get all sections

### Books

* `POST /api/books` → Add book (Librarian/Admin)
* `GET /api/books` → Get all books
* `GET /api/books/:id` → Get book by ID

### Issues

* `POST /api/issues` → Request book issue (User)
* `GET /api/issues/my` → Get user’s issues
* `PUT /api/issues/:id/approve` → Approve issue (Librarian/Admin)
* `PUT /api/issues/:id/return` → Mark as returned

---

## 🧪 Testing with Postman

1. Import API collection (create one or ask for JSON export).
2. Register a user → Login → Copy JWT.
3. In Postman, set `Authorization → Bearer Token` with your JWT.
4. Call protected routes.

---

## 🚀 Deployment

### Backend → Render

1. Push code to GitHub.
2. Create a Render service → Connect GitHub repo.
3. Add environment variables (`DATABASE_URL`, `JWT_SECRET`).
4. Deploy 🚀

### Frontend → Vercel

* Deploy your React frontend and connect it to backend API base URL.

### Database → Supabase

* Use Supabase dashboard → SQL editor to create schema.
* Copy connection string into `.env`.

---

## 👨‍💻 Author

* Developed by **Shreyash**
* GitHub: [@717shresh](https://github.com/717shresh)

---
