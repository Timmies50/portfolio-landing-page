-- SQL Challenge: Customers who have placed an order
--
-- Business question:
-- Produce a report showing customers who have actually placed an order.
-- Output columns: customer_name, city, product, order_amount
--
-- Join choice:
-- Use an INNER JOIN because the report should include only customers that
-- have a matching record in the orders table. Customers without orders are
-- intentionally excluded.

CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    product VARCHAR(100) NOT NULL,
    total_amount DECIMAL(12, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO customers (customer_id, customer_name, city) VALUES
    (101, 'Ada', 'Lagos'),
    (102, 'John', 'Abuja'),
    (103, 'Mercy', 'Owerri'),
    (104, 'David', 'Enugu'),
    (105, 'Grace', 'Lagos');

INSERT INTO orders (order_id, customer_id, product, total_amount) VALUES
    (1001, 101, 'Laptop', 450000),
    (1002, 102, 'Phone', 180000),
    (1003, 101, 'Monitor', 150000),
    (1004, 105, 'Tablet', 120000),
    (1005, 103, 'Laptop', 450000);

-- Solution
SELECT
    c.customer_name,
    c.city,
    o.product,
    o.total_amount AS order_amount
FROM customers AS c
INNER JOIN orders AS o
    ON o.customer_id = c.customer_id
ORDER BY o.order_id;

-- Expected result:
-- customer_name | city   | product | order_amount
-- --------------+--------+---------+-------------
-- Ada           | Lagos  | Laptop  | 450000
-- John          | Abuja  | Phone   | 180000
-- Ada           | Lagos  | Monitor | 150000
-- Grace         | Lagos  | Tablet  | 120000
-- Mercy         | Owerri | Laptop  | 450000
