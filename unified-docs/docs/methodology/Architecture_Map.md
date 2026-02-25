# 🗺️ Architecture Map: S&A Unified Data Landscape

**Goal:** Transition from fragmented data to a centralized ODS (Operational Data Store) based on PostgreSQL with automated data enrichment.

## 🏛️ Current State (As-Is)

Chaotic connections, manual data transfer, "junk portal."

```mermaid
flowchart TD;
    HHAX[("🏢 HHAeXchange
    (SaaS Master)")]
    Viv[("💰 Viventium
    (Payroll)")]
    DB[("🚀 Database (Iryna's data)")]
    Portal[("🕸️ Legacy Portal
    (Yii/PHP/MySQL)")]
    WP[("🌍 Wordpress Site
    (Public)")]
    Excel[("📄 Manual Excel Reports")]
    
    HHAX -->|Manual CSV Export| Excel
    HHAX -->|Manual CSV Export| Viv
    HHAX -->|Manual CSV Export| DB
    Excel -->|Manual Upload| Portal
    WP
    
    style HHAX fill:#f9f,stroke:#333,stroke-width:2px
    style Portal fill:#ffaaaa,stroke:#333,stroke-width:2px
```


## 🚀 Target State (To-Be)

PostgreSQL as a single hub, portal as a user-friendly interface.

```mermaid
flowchart TD;
    %% --- External Systems ---
    HHAX[("🏢 HHAeXchange
    (Master: Patients, Visits, Hours)")]
    Viv[("💰 Viventium
    (Payroll Processor)")]
    MedNY[("🏥 eMedNY API
    (Eligibility/Recert Check)")]
    
    
    %% --- Internal Infrastructure ---
    subgraph "Internal Infrastructure (S&A)"
        ETL[("⚙️ ETL Workers
        (Node.js Scripts)")]
        
        Postgres[("🐘 PostgreSQL (ODS)
        (Single Source of Truth for Internal Apps)")]
        
        NewPortal[("💻 New Portal
        (React Interface)")]
        
        Queue[("📥 Intake & InService Queue
        (Staging Area)")]
        
        SAweb[("🌍 WebSite (Public)")]
        
        SAReport[("🚀 Report Tool (All Depts)")]
    end
    
    %% --- Data Flows ---
    
    %% 1. Ingestion from HHAX
    HHAX == Manual CSV Export ==> ETL
    ETL -- Parse & Clean --> Postgres
    
    %% 2. Medicaid Verification
    Postgres -- Get IDs --> ETL
    ETL <-- SOAP Request --> MedNY
    ETL -- Update Status --> Postgres
    
    %% 3. Payroll Logic
    HHAX -.->|Source Hours/Visits| Postgres
    Postgres -- Formatted Reports --> Viv
    Viv -- Payroll Results --> Postgres
    
    %% 4. Web InTake & InService
    SAweb -- JSON / Webhook --> Queue
    Queue -- Human Review --> NewPortal
    NewPortal -- Approve & Commit --> Postgres
    
    %% 5. User Interaction
    Postgres <--> NewPortal
    NewPortal --> SAReport
    
    %% --- Styles ---
    style Postgres fill:#bbf,stroke:#333,stroke-width:4px
    style HHAX fill:#f9f,stroke:#333,stroke-width:2px,stroke-dasharray: 5 5
    style Queue fill:#ffeca0,stroke:#d4b106,stroke-width:2px
    style SAReport fill:#fceca0,stroke:#d4b106,stroke-width:2px
```
