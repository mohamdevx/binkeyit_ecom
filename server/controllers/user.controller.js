// Importing user model and bcrypt for password hashing
import UserModel from '../models/user.model.js';
import bcrypt from 'bcrypt';

export async function registerUserController(request, response) {
    try {
        const { name, email, password } = request.body;

        // Check if all required fields are provided
        if (!name || !email || !password) {
            return response.status(400).json({
                message: "Please provide name, email, and password.",
                success: false
            });
        }

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return response.status(409).json({
                message: "Email is already registered.",
                success: false
            });
        }

        // Generate salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt); // ✅ FIX: Use `bcrypt`, not `bcryptjs`

        // Create payload for user creation
        const payload = {
            name,
            email,
            password: hashedPassword
        };

        // Save the new user to the database
        const newUser = new UserModel(payload);
        const savedUser = await newUser.save();

        // Send success response
        return response.status(201).json({
            message: "User registered successfully.",
            userId: savedUser._id,
            success: true
        });

    } catch (error) {
        return response.status(500).json({
            message: error.message || "Internal Server Error",
            success: false
        });
    }
}
