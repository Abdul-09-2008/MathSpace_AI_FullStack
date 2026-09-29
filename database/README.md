# Database

Development defaults to SQLite for zero-friction Windows setup.

For production, set:

DATABASE_URL=postgresql+psycopg://USER:PASSWORD@HOST:5432/mathspace

and install a PostgreSQL driver such as psycopg.
