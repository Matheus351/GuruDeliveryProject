# GuruDeliveryProject
Delivery Project as a requirement for completion of the Corporate Application Development discipline at the Federal Institute of Paraíba.

## Running locally

Clone the project

```bash
  git clone https://github.com/Matheus351/GuruDeliveryProject.git
```

Enter the project's frontend directory:

```bash
  cd GuruDeliveryProject/frontend 
```

```bash
  npm install 
```

```bash
  npm start
```

Create another terminal and enter the backend directory:

```bash
  cd GuruDeliveryProject/backend
  npm install
```
Create an .env file in the current directory like:

```bash
  DATABASE_URL = "postgresql://youtPostgresConfiguration"
```

Start the server and create an initial migration:

```bash
 npx prisma migrate dev
```
```bash
 npm run dev
```

The server will be running on:

```bash
  http://localhost:3003
```


