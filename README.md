# Agrak Admin Users

This project is an admin interface for managing user data, built with modern web technologies. Below you'll find instructions on how to set up the project locally, an overview of the libraries used, and a discussion of some key architectural patterns and techniques employed in the project.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **npm or yarn**: The project uses npm as the package manager, but you can also use yarn if you prefer.

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/micaela-torre/agrak_admin_users.git
   cd agrak_admin_users
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or if you are using yarn:

   ```bash
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm start
   ```

   or with yarn:

   ```bash
   yarn start
   ```

4. **Open the application**

   The application will be available at `http://localhost:3000`.

## Libraries Used

- **React**: A JavaScript library for building user interfaces.
- **React Query**: For data fetching and state management.
- **Chakra UI**: A modular and accessible component library for React applications.
- **React Router DOM**: For routing within the application.
- **Axios**: A promise-based HTTP client for making API requests.

## Architectural Patterns and Best Practices

### Clean Architecture

### Separation of Concerns

The application maintains a clear separation between UI components, business logic, and data access. This separation enhances code readability, reusability, and ease of testing.

### Use of React Query

React Query is heavily utilized to manage server state, including data fetching, caching, synchronization, and background updates. Its recursive use in the project ensures efficient data handling and enhances the user experience by providing real-time data updates.

### Custom Hooks

Custom hooks are used extensively to encapsulate and reuse logic across different parts of the application. This pattern promotes DRY (Don't Repeat Yourself) principles and makes complex logic easier to manage and test.
