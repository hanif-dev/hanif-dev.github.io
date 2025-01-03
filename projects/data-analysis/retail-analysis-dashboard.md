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

### Visualizations

#### 1. **Seasonality Sales Analysis Dashboard**

- **Description**:  
  This dashboard provides insights into sales trends across months and years, highlighting seasonality patterns. It also analyzes performance by product categories and regions.

  Key components of the dashboard include:

  - **Revenue Overview**:  
    Displays total sales revenue ($29.36M), tax amount ($2.35M), and yearly income ($3.61B) along with the total number of sales orders (114K).

  - **Monthly Sales Trends by Year**:  
    Compares the sum of sales revenue and yearly income across months to identify patterns and peaks in sales activity.

  - **Sales Trends by Product Category**:  
    Highlights monthly sales trends for different product categories (Accessories, Bikes, and Clothing), showcasing seasonal patterns and key sales periods.

  - **Income vs. Sales Amount**:  
    A scatter plot visualizing the relationship between yearly income and monthly sales amounts, helping to identify high-performing periods and outliers.

  - **Regional Sales Breakdown**:  
    A tabular view summarizing sales amounts across regions (Australia, Canada, Central, France, Germany, etc.), allowing for cross-regional performance comparison.

- **Visualization**:  
  ![Seasonality](https://github.com/hanif-dev/hanif-dev.github.io/raw/main/images/seasonality.PNG)

---

### Insights

1. **Revenue Peaks**:  
   - Sales tend to peak in the last quarter of the year (October to December), likely due to seasonal promotions and holidays. December stands out with the highest revenue, suggesting a significant end-of-year shopping surge.

2. **Category Performance**:  
   - **Bikes** dominate sales throughout the year, with consistent growth from mid to late year.  
   - Accessories and Clothing show more steady trends but contribute less to overall revenue.

3. **Regional Highlights**:  
   - Canada and Australia are the top-performing regions, contributing significantly to the total sales, while smaller regions such as France and Central have lower revenues but steady performance.

4. **Correlation Between Income and Sales**:  
   - The scatter plot indicates a positive correlation, where months with higher yearly income also show increased sales amounts. This suggests income growth drives purchasing power.

---

### Conclusions

1. **Seasonality in Sales**:  
   - The data confirms strong seasonality in sales, particularly in Q4, emphasizing the importance of leveraging marketing campaigns and inventory planning during this period.

2. **Strategic Focus Areas**:  
   - Focus efforts on high-performing product categories like Bikes to maximize revenue.  
   - Tailor strategies for top regions such as Canada and Australia while exploring ways to boost performance in underperforming regions.

3. **Actionable Steps**:  
   - Enhance promotional efforts in Q4 to capitalize on seasonal demand.  
   - Strengthen inventory and logistics for high-demand products.  
   - Conduct deeper regional analysis to uncover growth opportunities in lower-performing markets.

---

### 2. **Characteristics & Property Analysis Dashboard**

- **Description**:  
  This dashboard examines sales based on customer demographics, such as the number of children in families and car ownership. It also highlights trends by product categories and customer segmentation. Key components of the dashboard include:

  - **Sales by Total Children in Families and Customer’s Cars**:  
    A horizontal stacked bar chart illustrating the relationship between the number of children in families, customer car ownership, and sales amount.

  - **Sales by Total Children and Product Category**:  
    Highlights how sales vary by the number of children in families across different product categories (Accessories, Bikes, and Clothing).

  - **Sales by Customer’s Cars and Product Category**:  
    Displays sales distribution across product categories based on the number of cars owned by customers.

  - **Customer Houses and Cars by Year**:  
    A line chart showing the trends in house ownership and car ownership over time.

  - **Segments vs Product Category**:  
    A donut chart visualizing customer segments and their preferences for different product categories, indicating the percentage contribution of each segment.

- **Visualization**:  
  ![Property](https://github.com/hanif-dev/hanif-dev.github.io/raw/main/images/property.PNG)

---

### Insights

1. **Family Characteristics and Sales**:  
   - Families with **no children** contribute the highest sales, especially in the **Bikes** category, followed by families with one or two children.  
   - Sales drop significantly as the number of children increases to three or more, suggesting a possible shift in spending priorities.

2. **Car Ownership and Sales**:  
   - Customers owning **two cars** generate the highest sales, followed closely by those owning **one car**.  
   - The sales amount declines for customers with **three or four cars**, indicating a potential saturation point or less focus on high-cost goods.

3. **Product Category Preferences**:  
   - **Bikes** dominate sales across all customer groups, followed by Accessories and Clothing. This suggests Bikes are the most popular and revenue-driving product category.

4. **Trends in Ownership (2010–2014)**:  
   - Both car ownership and house ownership saw steady growth from 2010 to 2013 but experienced a decline in 2014. This trend may reflect broader economic or demographic changes affecting customer purchasing power.

5. **Customer Segmentation**:  
   - The majority of sales are driven by the **Bikes** category, contributing 28.59% of the total. Accessories and Clothing contribute smaller but significant shares at 20.58% and 12.57%, respectively.

---

### Conclusions

1. **Target Demographics**:  
   - Marketing campaigns should focus on customers with **no or few children** and those owning **one to two cars**, as they represent the most profitable segments.

2. **Product Focus**:  
   - Prioritize inventory and promotions for **Bikes**, which consistently outperform other categories. Accessories should also be considered for upselling opportunities.

3. **Strategic Timing**:  
   - Investigate the decline in house and car ownership in 2014 to understand potential external factors and adapt strategies accordingly.

4. **Segment-Specific Strategies**:  
   - Develop tailored marketing initiatives for the largest customer segments and explore ways to engage smaller segments that may have untapped potential.

---
### 3. **History Analysis Dashboard**

- **Description**:  
  This dashboard analyzes sales trends over time by subcategory and evaluates growth rates for different products. It also examines unique row identifiers across subcategories to highlight data integrity and product diversity. Key components of the dashboard include:

  - **Summary Metrics**:  
    Displays key metrics, including total sales amount ($45.69K), total growth rate (90.07K), and unique row GUIDs (17), providing an overview of historical performance.

  - **OLAP Analysis: Subcategory Performance**:  
    A scatter plot combining the count of product subcategories and total sales amounts, showing the performance of each subcategory.

  - **Unique RowGUID by Category and Subcategory**:  
    A stacked bar chart highlighting the distribution of unique identifiers across product categories and subcategories (Accessories, Bikes, Clothing).

  - **Sales Trend by Category and Subcategory**:  
    A line chart showing how sales have trended over time (2010–2014) for different product subcategories such as Bike Racks, Helmets, and Mountain Bikes.

  - **Growth Rate by Subcategory**:  
    A vertical bar chart illustrating growth rates across subcategories, emphasizing which products have experienced the fastest growth.

- **Visualization**:  
  ![History](https://github.com/hanif-dev/hanif-dev.github.io/raw/main/images/history.PNG)

---

### Insights

1. **Sales Dominance**:  
   - **Mountain Bikes** and **Road Bikes** stand out as top-performing subcategories, with Mountain Bikes exhibiting the highest sales amount and growth rate.  
   - Subcategories like **Jerseys** and **Hydration Packs** show consistent growth, indicating a niche yet promising market.

2. **Category Contribution**:  
   - The **Bikes** category contributes the majority of sales and growth, while Accessories and Clothing play a complementary role.  
   - Within Accessories, items such as **Helmets** and **Gloves** show moderate but steady growth.

3. **Growth Trends (2010–2014)**:  
   - Significant growth in sales is observed in 2012, particularly for Mountain Bikes and Road Bikes.  
   - A decline in 2014 could suggest market saturation or shifts in consumer preferences.

4. **Unique Identifiers**:  
   - Products in the Bikes category dominate in terms of unique identifiers, signaling higher product diversity and potential market reach compared to Accessories and Clothing.

---

### Conclusions

1. **Investment in High-Performing Subcategories**:  
   - Focus on **Mountain Bikes** and **Road Bikes**, which are driving the majority of sales and growth. Consider launching new models or enhancing marketing efforts for these subcategories.

2. **Target Niche Markets**:  
   - Explore growth opportunities in niche subcategories such as **Hydration Packs** and **Jerseys**, which are showing steady upward trends.

3. **Addressing Decline in 2014**:  
   - Investigate the reasons for the decline in sales and growth rates in 2014. Factors like competition, market conditions, or pricing strategies should be analyzed to regain momentum.

4. **Balanced Strategy Across Categories**:  
   - While Bikes dominate, Accessories and Clothing have the potential to grow with targeted marketing. Ensure these categories are adequately supported to diversify revenue streams.

---

### 4. **Demography & Distance Analysis Dashboard**

- **Description**:  
  This dashboard analyzes sales based on customer age groups and commute distances. It also explores gender-specific preferences for product categories. Key components of the dashboard include:

  - **Key Metrics**:  
    - Total customers segmented by age groups:  
      - <25: Blank (data not available)  
      - 25–40: 25K  
      - 40–60: 28K  
      - 60–80: 6,884  
      - >80: 168  

  - **Sales by Age Group**:  
    A bar chart showing total sales amounts by customer age groups.

  - **Commute Distance vs Sales Amount**:  
    A line chart visualizing how sales are distributed based on customer commute distances.

  - **Sales by Age Group and Commute Distance**:  
    A treemap that combines age groups and commute distances, providing detailed segmentation.

  - **Commute Distance by Product Category**:  
    A grouped bar chart comparing sales amounts for product categories (Bikes, Accessories, Clothing) across different genders.

  - **Age Distribution of Customers**:  
    A histogram illustrating the frequency distribution of customers by age.

- **Visualization**:  
  ![Distance](https://github.com/hanif-dev/hanif-dev.github.io/raw/main/images/distance.PNG)

---

### Insights

1. **Age Group Analysis**:  
   - The 40–60 age group generates the highest sales ($13.5M), followed closely by the 25–40 age group ($13.4M).  
   - Sales drop significantly for customers aged 60–80 ($2.4M) and are negligible for those under 25 or over 80.

2. **Commute Distance Trends**:  
   - Customers with commute distances of 0–1 miles contribute the highest sales ($11.2M), indicating proximity plays a crucial role in purchasing behavior.  
   - Sales decrease sharply as commute distances increase, with the lowest sales ($3.8M) from those commuting over 10 miles.

3. **Product Category by Gender**:  
   - Both males and females overwhelmingly prefer Bikes, contributing significantly more to sales than Accessories or Clothing.  
   - Accessories and Clothing show relatively low sales volumes, indicating these categories might be secondary preferences.

4. **Age and Commute Distance Segmentation**:  
   - The 25–40 and 40–60 age groups dominate across all commute distances, particularly at 0–1 miles, reaffirming the importance of proximity and targeting these age groups.  
   - Customers aged 60–80 show limited engagement, with purchases mainly from closer commute distances (0–5 miles).

5. **Age Distribution**:  
   - The customer base is concentrated around the 30–50 age range, which aligns with the highest-performing sales age groups.

---

### Conclusions

1. **Target Demographics**:  
   - Focus marketing efforts on the 25–40 and 40–60 age groups, as they are the most active contributors to sales.  
   - Consider tailored strategies to engage the 60–80 age group, as they represent a smaller but potential market segment.

2. **Proximity-Based Strategies**:  
   - Emphasize local marketing and accessibility for customers within 0–5 miles of stores, as these distances correlate with higher sales.

3. **Product Category Prioritization**:  
   - Prioritize Bikes in inventory and promotions, as they dominate sales across all customer segments.  
   - Explore opportunities to boost sales of Accessories and Clothing through bundling or targeted campaigns.

4. **Gender and Product Alignment**:  
   - Design gender-inclusive campaigns focusing on Bikes, with secondary efforts to boost Accessories and Clothing sales.

5. **Customer Base Optimization**:  
   - Leverage the age distribution data to create customized campaigns for the 30–50 age range, which comprises the majority of the customer base.

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

- **Dataset**: [Download Data XLSX](https://github.com/hanif-dev/end-to-end/tree/main/Data)  
- **Source Code**: [View on GitHub](https://github.com/hanif-dev/end-to-end).  
