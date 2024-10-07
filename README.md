```mermaid
graph TD
    A[Customer] -->|Uses| B[Angular Frontend]
    B -->|API Calls| C[Quarkus Backend]
    C -->|Reads/Writes| D[(Database)]
    C -->|Produces Events| E[Kafka]
    E -->|Consumes Events| C
    F[Admin] -->|Uses| B
    G[Staff] -->|Uses| B

    subgraph Frontend
    B -->|Displays| H[Menu]
    B -->|Manages| I[Orders]
    B -->|Shows| J[Order Status]
    B -->|Provides| K[Admin Dashboard]
    end

    subgraph Backend
    C -->|Handles| L[Menu Management]
    C -->|Processes| M[Order Management]
    C -->|Updates| N[Inventory Management]
    C -->|Manages| O[User Authentication]
    end

    subgraph Kafka Topics
    E --> P[New Orders]
    E --> Q[Order Status Updates]
    E --> R[Inventory Updates]
    end
