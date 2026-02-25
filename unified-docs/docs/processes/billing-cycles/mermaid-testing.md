```mermaid
graph TD;
    A[HHAX Export] --> B{ETL Worker};
    B -- Success --> C[(PostgreSQL)];
    B -- Fail --> D[Error Log];
```