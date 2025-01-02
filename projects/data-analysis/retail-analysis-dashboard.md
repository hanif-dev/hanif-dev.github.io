---
layout: project
title: "Retail Sales Analysis & Power BI Dashboard"
tags: [Data Analysis, Sales Data, Power BI, MySQL, Python]
category: "Data Science"
description: "An analysis of retail sales data for bikes, components, clothing, and accessories with insights visualized in an interactive Power BI dashboard."
---

# Retail Sales Analysis & Power BI Dashboard

## Project Overview

This project focuses on analyzing raw sales data from a retail company selling **bikes, components, clothing, and accessories**. The project involves cleaning and transforming the data using **Python** and **MySQL**, followed by analyzing the data to generate insights. The final product is an interactive **Power BI dashboard** that provides real-time business insights.

### Key Steps:
1. **Data Preprocessing**: Clean, normalize, and transform the raw data from Excel to MySQL.
2. **Data Analysis**: Use Python to generate insights from the data, focusing on.
3. **Power BI Dashboard**: Build an interactive dashboard to visualize key metrics and trends, providing actionable insights for decision-making.

---

## Visualizations

### 1. **Seasonality Sales Analysis Dashboard**
- **Description**:  
  This dashboard provides insights into sales trends across months and years, highlighting seasonality patterns. It also analyzes performance by product categories and regions.
- **Visualization**:  
  ![Seasonality](https://github.com/hanif-dev/hanif-dev.github.io/raw/main/images/seasonality.PNG)
- **Conclusion**:  
  Sales show a strong seasonality pattern, with peaks during Q4. Bikes dominate sales, and regions like Canada and Australia contribute the most.

---

### 2. **Characteristics & Property Analysis Dashboard**
- **Description**:  
  This dashboard examines sales based on customer demographics, such as the number of children in families and car ownership. It also highlights trends by product categories.
- **Visualization**:  
  ![Property](https://github.com/hanif-dev/hanif-dev.github.io/raw/main/images/property.PNG)
- **Conclusion**:  
  Customers with fewer children and those owning one or two cars contribute the highest sales. Bikes remain the most popular product.

---

### 3. **History Analysis Dashboard**
- **Description**:  
  Analyzes sales trends over time by subcategory and evaluates growth rates for different products. It also examines unique row identifiers across subcategories.
- **Visualization**:  
  ![History](https://github.com/hanif-dev/hanif-dev.github.io/raw/main/images/history.PNG)
- **Conclusion**:  
  Mountain Bikes and Road Bikes show the highest growth and sales. The Bikes category continues to dominate.

---

### 4. **Demography & Distance Analysis Dashboard**
- **Description**:  
  This dashboard analyzes sales based on customer age groups and commute distances. It also explores gender-specific preferences for product categories.
- **Visualization**:  
  ![Distance](https://github.com/hanif-dev/hanif-dev.github.io/raw/main/images/distance.PNG)
- **Conclusion**:  
  Sales are highest among customers aged 25–60 and those living within 5 miles of stores. Proximity significantly impacts purchasing behavior.

---

## Overview

- This project integrates sales data with demographic, geographic, and historical insights to provide actionable recommendations for retail strategies.  
- The dashboards visualize key metrics to aid in business decision-making.

---

## Data Model

During the preprocessing stage, the data was organized into a relational database structure using MySQL. The Entity-Relationship Diagram (ERD) below represents the schema used to store and manage the data efficiently. This relational structure ensures data normalization and eliminates redundancy before further analysis and visualization in Power BI.

The data model consists of 7 tables interconnected to analyze customer demographics, sales transactions, and product details.

The image below shows the tables used in the process:

```plaintext
fact_internetsales
+------------------------+
| SalesOrderNumber       |
| SalesOrderLineNumber   |
| CustomerKey            |
| ProductKey             |
| CurrencyKey            |
| SalesTerritoryKey      |
| SalesAmount            |
| TaxAmt                 |
| Freight                |
| OrderDate              |
| DueDate                |
| ShipDate               |
+------------------------+
         |                |                  |               |
         V                V                  V               V
dim_customer      dim_product      dim_currency     dim_salesterritory
+------------+    +------------+   +------------+   +----------------+
| CustomerKey|    | ProductKey |   | CurrencyKey|   | SalesTerritory |
| FirstName  |    | ProductName|   | Name       |   | Country        |
| LastName   |    | Cost       |   +------------+   | Region         |
| Income     |    | Color      |                   +----------------+
+------------+    | SubCatKey  |
                  +------------+
                         |
                         V
              dim_productsubcategory
              +-------------------+
              | SubCatKey         |
              | Name              |
              | CategoryKey       |
              +-------------------+
                         |
                         V
              dim_productcategory
              +-----------------+
              | CategoryKey     |
              | Name            |
              | rowguid         |
              +-----------------+
```
---

## Tables Used in the Model

1. **Sales Transactions**: Contains detailed sales data.
2. **Products**: Provides product descriptions and categories.
3. **Customers**: Includes demographic information such as age and commute distance.
4. **Regions**: Identifies geographic sales performance.
5. **Time**: Tracks seasonal trends and yearly analysis.
6. **Categories**: Groups products into categories and subcategories.
7. **Growth Rates**: Calculates growth trends by product subcategory.

---

## Built With

- **MySQL**: Data cleaning, storage, and SQL queries.
- **Python**: Data preprocessing, analysis, and transformation.
- **Power BI**: Dashboard creation and visualization.

---

## Analysis

The analysis is divided into four main sections:
1. **Seasonality Analysis**: Insights into sales patterns over time.
2. **Characteristics Analysis**: Examines customer demographics and their impact on sales.
3. **Historical Trends**: Tracks sales trends and growth rates by subcategory.
4. **Distance Analysis**: Explores the effect of proximity and commute distance on sales.

---

## Dataset & Source Code  

- **Dataset**: [Download Data XLSX](https://github.com/hanif-dev/end-to-end/tree/main/data)  
- **Source Code**: [View on GitHub](https://github.com/hanif-dev/end-to-end).  
