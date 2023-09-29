# Prompt Hub - Next.js Project

Welcome to Prompt Hub, a Next.js project that provides a platform for users to create and share prompts, connect with others, and explore a world of content. This README will guide you through the project, its features, and how to set it up.

## Table of Contents

- [Prompt Hub - Next.js Project](#prompt-hub---nextjs-project)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [Technologies Used](#technologies-used)
  - [Usage](#usage)

## Introduction

Prompt Hub is a web application built using Next.js that offers various features for users to interact with. It leverages Next Auth for secure user authentication, tailwindcss for an elegant and responsive design, and MongoDB to store user data and posts.

## Features

- **User Authentication**: Utilizes Next Auth to provide a secure sign-in page, allowing users to log in and out of their accounts.

- **Styling with Tailwind CSS**: Implements Tailwind CSS for a clean and responsive user interface, ensuring a great user experience across devices.

- **Data Storage with MongoDB**: Stores user data, prompts, and other relevant information in a MongoDB database, ensuring data persistence and reliability.

- **Post Management**: Provides users with functionalities such as creating, editing, and deleting prompts. Users can also use hashtags to categorize their posts.

- **Search Functionality**: Includes a search feature to help users find posts based on keywords or hashtags.

- **User Profiles**: Allows users to view profiles of other users, including their prompts and other relevant information.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

- MongoDB: You'll need a MongoDB database to store user data and posts. You can set up a MongoDB cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or run it locally.

## Getting Started

Follow these steps to get Prompt Hub up and running on your local machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/Akash160801/prompt_hub.git
   ```

2. Change into the project directory:

   ```bash
   cd prompt-hub
   ```

3. Install project dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env.local` file in the project root and configure the following variables:
     ```
     NEXT_PUBLIC_MONGODB_URI=<your-mongodb-uri>
     NEXT_PUBLIC_MONGODB_DB=<your-mongodb-database>
     NEXTAUTH_URL=http://localhost:3000
     ```

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access Prompt Hub.

## Technologies Used

Prompt Hub is built using the following technologies:

- [Next.js](https://nextjs.org/) - A React framework for building server-rendered React applications.

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for quickly building custom designs.

- [MongoDB](https://www.mongodb.com/) - A NoSQL database for storing user data and posts.

- [Next Auth](https://next-auth.js.org/) - An authentication library for Next.js applications.

## Usage

1. Sign up for an account on Prompt Hub.

2. Log in to access the features such as creating posts, editing your profile, and exploring other users' content.

3. Create posts, categorize them using hashtags, and share your thoughts with the community.

4. Use the search functionality to find posts based on keywords or hashtags.

5. Explore other users' profiles and discover their posts.

Thank you for choosing Prompt Hub! We hope you enjoy using this platform to connect, create, and share your thoughts with the world. If you encounter any issues or have suggestions for improvements, please don't hesitate to open an issue or submit a pull request. Happy coding!
