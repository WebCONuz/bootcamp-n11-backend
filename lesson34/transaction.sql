-- PUL O'TKAZMASI -----------------------------------------------------
BEGIN TRANSACTION;

UPDATE balance
SET balance.sum = balance.sum - 100
WHERE balance.user_id = 1;

UPDATE balance
SET balance.sum = balance.sum + 100
WHERE balance.user_id = 2;

COMMIT;


-- QAYTARIB YUBORISH -----------------------------------------------------
BEGIN;

UPDATE balance
SET balance.sum = balance.sum - 100
WHERE balance.user_id = 1;

UPDATE balance
SET balance.sum = balance.sum + 100
WHERE balance.user_id = 2;

ROLLBACK; 

-- SAQLASH NUQTASI -----------------------------------------------------
BEGIN;

INSERT INTO your_table (column1, column2) VALUES (value1, value2);

SAVEPOINT my_savepoint;

INSERT INTO your_table (column1, column2) VALUES (value3, value4);

-- If something goes wrong, you can rollback to the savepoint
ROLLBACK TO SAVEPOINT my_savepoint;

-- Continue with more operations if needed
COMMIT;

-- SAQLASH NUQTASI -----------------------------------------------------