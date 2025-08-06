import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction, RequestHandler } from "express";

const MAX = 40;

interface limit {
  count: number;
}

const requestMapper = new Map<String, limit>();

type User = {
  id: string;
  email: string;
  role: string;
};

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

export const generateToken = (user: User): string => {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    process.env.JWT_SECRET!,
    {
      expiresIn: "1d",
    }
  );
};

export const verifyToken: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];
  try {
    if (!token) {
      next({ status: 401, message: "No token provided" });
      return;
    }
    jwt.verify(token, process.env.JWT_SECRET!);
    next();
  } catch (err) {
    next({ status: 401, message: "Invalid token" });
  }
};

export const rateLimiter: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.ip) {
    const exisitng = requestMapper.get(req.ip);
    if (!exisitng) {
      requestMapper.set(req.ip, { count: 1 });
    } else {
      const currentCount = exisitng.count;

      if (currentCount > MAX) {
        return next("maximum request count has reached");
      }
      requestMapper.delete(req.ip);
      requestMapper.set(req.ip, { count: currentCount + 1 });
    }
    return next();
  }
  return next("No IP address found");
};

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error(err);

  res.status(statusCode).json({
    status: "error",
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
}
