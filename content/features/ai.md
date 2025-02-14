---
title: AI Assistant (Premium)
subtitle: Leverage AI to effortlessly generate and refine your SQL queries with ease
description: Context-aware AI assistant will help you to build, complete or change your SQL queries
icon: ai.svg
weight: 14
---

AI assistant in DbGate helps you to create and modify SQL queries. It uses internally LLM gpt-4o-mini from OpenAI.

Of course, you could open ChatGPT and request a query directly. However, because DbGate’s integration knows your underlying database schema—such as table and column names—it can generate queries that are better tailored to your specific database.

As a first step, DbGate will request your permission to share table and column names with its AI service—without this consent, the AI assistant won’t function. We respect your privacy, which is why DbGate will **never transmit** any of your database information without your **explicit approval**.

What information will be sent to DbGate's AI service:
- tables
  - name
  - comment
- columns
  - name
  - comment
  - data type name
- primary key - column names
- foreign keys - base and referenced table and column names
- snippets of your SQL queries


After that, the AI assistant offers three capabilities:
- **Text to SQL** - You write your query in natural language, and DbGate will generate the corresponding SQL query based on your current database schema.
- **Complete SQL on cursor** - DbGate will attempt to generate the next part of your query.
- **Make changes on your SQL** - If you already have a query, you can describe the modifications in natural language, and DbGate will produce the updated SQL.
