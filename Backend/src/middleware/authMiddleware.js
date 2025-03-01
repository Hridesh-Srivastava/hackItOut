import jwt from "jsonwebtoken"
import User from "../models/User.js"

export const authenticate = async (req, res, next) => {
  try {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1]
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    const user = await User.findById(decoded.id).select("-password")

    if (!user || !user.active) {
      return res.status(401).json({ message: "Not authorized, user not found or inactive" })
    }

    req.user = user
    next()
  } catch (error) {
    res.status(401).json({ message: "Not authorized, token failed", error: error.message })
  }
}

export const authorize = (role) => (req, res, next) => {
  if (req.user && req.user.role === role) {
    next()
  } else {
    res.status(403).json({ message: "Not authorized" })
  }
}