import { User } from "@prisma/client";
import JWT from "jsonwebtoken";

const JWT_Secret = "m!e@t£i$c%u^l&o*u(s)";
class JWTService {
  public static generateTokenForUser(user: User) {
    const payload = {
      id: user?.id,
      email: user?.email,
    };

    const token = JWT.sign(payload, JWT_Secret);
    return token;
  }
}

export default JWTService;
