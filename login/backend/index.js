const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors({
  origin: 'http://localhost:5173',  // Your React frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'], // headers you expect from client
}))

app.use(express.json())

const mockUser = {
  email: "user@example.com",
  password: "123"
}

app.post("/api/login", (req, res) => {
  const {email, password} = req.body

  if (email === mockUser.email && password === mockUser.password) {
     res.json({ success : true})
  } else {
     res.json({ success : false, message: "Invalid email or password"})
  }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
