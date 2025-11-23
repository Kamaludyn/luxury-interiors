import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    surname: {
      type: String,
      required: [true, "Surname is required"],
      trim: true,
    },
    othername: {
      type: String,
      required: [true, "Other name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 8,
      select: false, // Exclude password from queries by default
    },
    passwordResetToken: {
      type: String,
    },
    passwordResetExpires: { type: Date },
    sessionVersion: { type: Number, default: 1 }, // to prevent from multiple login on same session
  },
  {
    timestamps: true,
  }
);

// Hash password before saving (only if modified)
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip if password hasn't changed

  // Only hash if the password is modified or it's a new user
  if (this.isModified("password") || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Compare user-provided password with the hashed password in the DB
userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password); // true or false
};

// Generate and return a password reset token
userSchema.methods.generatePasswordResetToken = function () {
  // Generate random token
  const resetToken = crypto.randomBytes(32).toString("hex");

  // Hash the token and store it in the DB
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expiry time (10 minutes from now)
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  // Return the plain token for emailing
  return resetToken;
};

const User = mongoose.model("User", userSchema);

export default User;
