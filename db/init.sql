SELECT 'CREATE DATABASE BudgetMagic'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'BudgetMagic')\gexec