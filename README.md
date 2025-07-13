📈 Stoxify



Stoxify is a full-stack stock trading simulation platform built with a modern tech stack. It includes a public landing page, an authenticated user dashboard, and a backend API server.





🌐 Project Structure



stoxify/

├── frontend/ → Landing page (React)

├── dashboard/ → Authenticated dashboard (React)

├── backend/ → Express + MongoDB REST API



Copy

Edit





🚀 Features



\- ✅ User signup/login with JWT authentication

\- 📊 Visual portfolio dashboard (charts, summaries)

\- 💼 Holdings, orders, and position tracking

\- 📈 Clean UI using React and custom CSS

\- 🧠 Global state management with Context API

\- 🔒 Protected routes for authenticated users

\- 🌍 RESTful backend API built with Express.js

\- 🗃️ MongoDB database integration with Mongoose



---



🛠️ Tech Stack



| Layer     | Tech                        |

|-----------|-----------------------------|

| Frontend  | React, CSS                  |

| Backend   | Node.js, Express.js         |

| Database  | MongoDB, Mongoose           |

| Auth      | JWT (JSON Web Tokens)       |

| Charts    | Chart.js or custom SVGs     |



---



⚙️ Getting Started (Local Development)



1\. Clone the Repository



```bash

git clone https://github.com/YOUR\_USERNAME/stoxify.git

cd stoxify

2\. Setup Backend

cd backend

npm install

npm run dev

Make sure to add your .env file with necessary config like DB connection and JWT secret.



3\. Setup Frontend

cd ../frontend

npm install

npm start

4\. Setup Dashboard

cd ../dashboard

npm install

npm start

📁 Environment Variables (.env Example for Backend)

MONGO\_URI=your\_mongodb\_connection\_string

JWT\_SECRET=your\_jwt\_secret\_key

