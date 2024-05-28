**Welcome to Linger**

This is a language Learining App. 
It works with the Users that subscribe to language to learn through lesson and quizes and their test score recorded in finishedQuiz. The User can subscribe to multiple languages and achieve different levels of proficiency recorded in UserLanguage. Obviously each quiz has different sets of questions and answers.

**BACKEND - REST API**

To be able to use the server setup, open the project in your IDE and enter the terminal. Make sure it is in the "server" directory using the following command:

```plaintext
cd server
```

Then run the following command to install all dependencies:

```plaintext
npm i
```

Then run the following command to obtain your prisma client for database access:

```plaintext
npx prisma generate
```

Then create a file called ".env" for your database access keys and add the follwing code to it:

```plaintext
# Connect to Supabase via connection pooling with Supavisor.
DATABASE_URL=<YOUR_DATABASE_URL>

# Direct connection to the database. Used for migrations.
DIRECT_URL=<YOUR_DIRECT_URL>
```

Finally, we are one setting up the project. You can run the following command to start the server:

```plaintext
npm run dev
```

You can test your api routes at https://localhost:8000 using the Postman software.
