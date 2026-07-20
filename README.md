# NestJS GraphQL Federation Microservices

A modern, high-performance NestJS GraphQL Federation microservices application, comprising a Gateway and two subgraphs (Users and Posts).

## Architecture

This project is a backend-only GraphQL Federation API. It is split into three main packages:
- **Gateway**: Serves as the single entry point, orchestrating requests to the subgraphs.
- **Users Subgraph**: Manages user-related data and schema definitions.
- **Posts Subgraph**: Manages post-related data and federated schema extensions.

---

## Installation

Install dependencies using `pnpm` (or `npx pnpm` if not installed globally):

```bash
$ pnpm install
# or
$ npx pnpm install
```

---

## Running the App

To run all services concurrently in development mode (with hot-reloading enabled):

```bash
$ pnpm dev
# or
$ npx pnpm dev
```

### Accessing the GraphQL Sandbox UI
Since this is a backend API, there is no traditional frontend UI. Instead, you can interact with the APIs using the **Apollo Sandbox / GraphQL Playground** in your web browser:

- **Gateway (Main Entry Point)**: [http://localhost:3002/graphql](http://localhost:3002/graphql)
- **Users Subgraph**: [http://localhost:3000/graphql](http://localhost:3000/graphql)
- **Posts Subgraph**: [http://localhost:3001/graphql](http://localhost:3001/graphql)

---

## Testing

```bash
# Unit tests
$ pnpm run test

# E2E tests
$ pnpm run test:e2e

# Test coverage
$ pnpm run test:cov
```

---

## Author

- **Mohamed Hassanin**

## License

This project is [MIT licensed](LICENSE).
