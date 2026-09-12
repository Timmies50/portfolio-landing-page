import sqlite3
from pathlib import Path

script = Path(__file__).with_name("sql-challenges") / "staff-not-in-hr.sql"
connection = sqlite3.connect(":memory:")
connection.executescript(script.read_text())
rows = connection.execute(
    """
    SELECT staff_id, staff_name, department_id
    FROM staff
    WHERE department_id <> 101
    ORDER BY staff_id
    """
).fetchall()
expected = [(2, "John", 102), (4, "David", 103), (5, "Blessing", 102), (6, "Michael", 104)]
assert rows == expected, (rows, expected)
print("Validation passed:", rows)
