# Security
Passwords are hashed with bcrypt via Passlib. JWT tokens are issued by the auth API. Keep JWT_SECRET and AI keys in environment variables. Production should add HTTPS, rate limiting, refresh-token rotation, RBAC enforcement, audit logging, CSP and stricter CORS.
