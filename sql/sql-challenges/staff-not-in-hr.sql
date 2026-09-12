-- SQL Challenge: Staff members not assigned to HR
--
-- Business question:
-- Return every staff member who does not work in the HR department.
-- Output columns: staff_id, staff_name, department_id

CREATE TABLE departments (
    department_id INTEGER PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL
);

CREATE TABLE staff (
    staff_id INTEGER PRIMARY KEY,
    staff_name VARCHAR(100) NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

INSERT INTO departments (department_id, department_name) VALUES
    (101, 'HR'),
    (102, 'Finance'),
    (103, 'IT'),
    (104, 'Marketing');

INSERT INTO staff (staff_id, staff_name, department_id) VALUES
    (1, 'Ada', 101),
    (2, 'John', 102),
    (3, 'Chioma', 101),
    (4, 'David', 103),
    (5, 'Blessing', 102),
    (6, 'Michael', 104);

-- Solution
SELECT
    s.staff_id,
    s.staff_name,
    s.department_id
FROM staff AS s
INNER JOIN departments AS d
    ON d.department_id = s.department_id
WHERE d.department_name <> 'HR'
ORDER BY s.staff_id;

-- Expected result:
-- staff_id | staff_name | department_id
-- ---------+------------+--------------
-- 2        | John       | 102
-- 4        | David      | 103
-- 5        | Blessing   | 102
-- 6        | Michael    | 104
