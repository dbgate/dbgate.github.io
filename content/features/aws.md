---
title: Deploy on AWS
subtitle: Single-click deploy on Amazon EC2 cluster
icon: aws.svg
weight: 14
demo_url: https://aws.amazon.com/marketplace/pp/prodview-glw7okfnhf4cy
demo_title: View on AWS
---

DbGate AWS edition is a collaborative, multi-user web platform specifically designed for database management within Amazon Web Services (AWS). By taking advantage of AWS infrastructure, it streamlines teamwork for organizations operating in cloud environments. Its shared, browser-based interface simplifies collaboration, data access, and database oversight while seamlessly integrating with AWS.

## DbGate AWS key features
DbGate AWS supports the same features as DbGate Team Premium, but is optimalized for AWS

* Support for AWS IAM
* Administration for users, connections and roles
* Data browsing, filtering and editing
* Import and export data
* Visual query builder

## Installation process
Installation on AWS is very straighforward, it is almost single-click process. 

We recommend t2.medium instance type for best user experience, but t2.micro available in free tier will be enough for small number of users.

After installation, you have to set admin password, Then you could administer connections and users.

## Subscription and licensing
DbGate AWS can be subscribed to through the AWS Marketplace, with pricing based on the size of the chosen instance. Larger instances support more concurrent users.

A 30-day free trial gives you access to all DbGate features. After the trial, billing follows AWS’s pricing plan according to the selected instance size. No additional licensing is required, as all payments are handled through the [AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-glw7okfnhf4cy) subscription.

## DbGate AWS updates
DbGate AWS has it's special build and runs directly virtual server in EC2 (there is no additional virtualization layer like docker). There is auto-upgrade functionality - after start, the container makes request for the newest build and if found, it replaces old version. You don't have do upgrade manually. 

If you create manually new EC2 container with new version, it will have its new database (internal MySQL database is part of container), so there is no simple way of moving connections and users to new EC2 container.