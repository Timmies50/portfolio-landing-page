import sqlite3
from pathlib import Path

script = Path(__file__).with_name("sql-challenges") / "customers-with-orders.sql"
connection = sqlite3.connect(":memory:")
connection.executescript(script.read_text())
rows = connection.execute(
    """
    SELECT c.customer_name, c.city, o.product, o.total_amount AS order_amount
    FROM customers AS c
    INNER JOIN orders AS o ON o.customer_id = c.customer_id
    ORDER BY o.order_id
    """
).fetchall()
expected = [
    ("Ada", "Lagos", "Laptop", 450000),
    ("John", "Abuja", "Phone", 180000),
    ("Ada", "Lagos", "Monitor", 150000),
    ("Grace", "Lagos", "Tablet", 120000),
    ("Mercy", "Owerri", "Laptop", 450000),
]
assert rows == expected, (rows, expected)
print("Validation passed:", rows)
