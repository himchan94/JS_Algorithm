# SQL

1. SELECT

```sql
SELECT column1, column2,
FROM table_name

SELECT * FROM Customers;
```

2.DISTINCT

- 중복을 배제하고 교유값만 출력하고자 할 때

```sql
SELECT DISTINCT column1, column2...
FROM table_name;

SELECT DISTINCT Country FROM Customers;
```

3.WHERE

- 조건을 걸어 검색하고자 할 때
  같을 때 : =
  같지 않을 때: !=, <>
  클 때 : <
  크거나 같을 때 : <=

```sql
SELECT column1, column2
FROM table_name
WHERE condition

WHERE CustomerID = 2;
```

4. AND

```sql
WHERE condition AND condition2 AND...
```

5. OR

```sql
WHERE condition OR condition2 OR...
```

6. NOT

```sql
SELECT column1, column2
FROM table_name
WHERE NOT condition;
```

### AND, OR, NOT 조합 시

AND가 OR보다 우선 연산되므로

```sql
SELECT * FROM Customers
WHERE Country = 'Germany'
AND (CITY = 'Lulea' OR City = 'Berlin);
```

```sql
SELECT * FROM Customers
WHERE NOT Country = 'Germany'
AND NOT CITY = 'Lulea';
```

7. ORDER BY

- 결과를 오름차순이나 내림차순으로 정렬 (default ASC)

```sql
SELECT column1, column2 ...
FROM table_name
ORDER BY column1 ASC|DESC
```

8. ORDER BY FIELD

- 결과를 내가 지정한 우선 순위로 정렬

```sql
SELECT column1, column2...
FROM table_name
ORDER BY FIELD (column1, order1, order2, ...)

ORDER BY FIELD(Country, UK, Sweden, Mexico, Germany);
```

9. LIMIT

- 검색 결과 중 지정한 숫자 개수만 리턴하기

```sql
SELECT column1, column2 ...
FROM table_name
LIMIT number;

SELECT * FROM Customers LIMIT 3;
SELECT * FROM Customers LIMIT 2, 3;
SELECT * FROM Customers LIMIT 0, 3;
```

### ORDER BY와 함께 사용할 때의 주의점

-ORDER BY 후 LIMIT 할 때

```sql
SELECT * FROM Customers;
ORDER BY Country ASC LIMIT 3;
```

- LIMIT 후 ORDER BY 할 때

```sql
SELECT * FROM Customers;
LIMIT 3) ORDER BY Country ASC;
```

10. NULL VALUE

- Null 값은 IS NULL이나 IS NOT NULL 연산자로 검색
- =, <, > <> or != 로는 검색되지 않음
- COUNT 함수에도 포함되지 않음

```sql
SELECT column1, column2 ...
FROM table_name
WHERE column_name IS NOT NULL;

SELECT City FROM Customers
WHERE Country IS NOT NULL;
```

11. LIKE

- WHERE 절과 함께 특정 패턴을 검색할 때 사용
- % : 0개 문자 혹은 여거 개의 문자를 의미
- \_ : 하나의 문자를 의미
- LIKE'a%' : a로 시작되는 모든 것
- LIKE'a\_\_%' : a로 시작되고 최소 3 이상의 길이를 가진 것
- LIKE'\_r%' : 두번째 자리에 r이 들어가는 모든 것

```sql
SELECT column1, column2...
FROM table_name
WHERE column_name LIKE pattern;

SELECT * FROM Customers
WHERE CustomerName NOT LIKE 'A%';
```

12. IN()

- WHERE 절 내 여러 값을 설정하고자 할 때 사용

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2...);


SELECT * FROM Customers
WHERE Country = 'Germany' OR Country = 'UK';

SELECT * FROM Customers
WHERE Country IN ('Germany', 'UK');
```

13. BETWEEN

- WHERE 절 내 검색 조건으로 범위를 지정하고자 할 때 사용

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```

```sql
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;

SELECT * FROM Products
WHERE Price NOT BETWEEN 10 AND 20;

SELECT * FROM Products
WHERE (Price NOT BETWEEN 10 AND 20)
AND NOT CategoryID IN (2,3);
```

14. JOIN

- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL OUTER JOIN

15. UNION

- SELECT의 칼럼 리스트를 기준으로 두 개 이상의 질의 결과를 하나의 테이블로 합치고자 할 때
- ** UNION은 기본적으로 중복값을 제거함, 중복값을 포함하고 싶을 경우 UNION ALL 사용 **

```sql
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
```

16. MIN, MAX, ABS

```sql

SELECT MIN(Price) FROM Products;
SELECT MAX(Price) FROM Products;
SELECT AVG(Price) FROM Products;

```

17. COUNT, AVG, SUM

```sql
SELECT COUNT (CategoryID) FROM Products;
SELECT AVG(Price) FROM Products;
SELECT SUM(Price) FROM Products;
WHERE SupplierID > 2;
```

18. GROUP BY

- 집계함수와 함께 사용되어, 결과를 지정한 칼럼에 따라 그룹으로 묶고자 할 때

```sql

SELECT COUNT(CustomerID), Country
FROM Customers
WHERE condition1
GROUP BY Country;

```

18. HAVING

- WHERE 조건을 걸 수 엇는 집계함수에 조건을 걸고자 할 때 사용

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;
HAVING COUNT (CUStomerID) > 2;

```

19. CONCAT

- 여러 문자열을 하나로 합치고자 할 때 사용

```sql
SELECT CONCAT(string1, string2, ... string n)
```

20. ROUND(), TRUNC()

- 특정 소수점을 기준으로 자릿수를 맞출 때 사용
- ROUND의 경우 특정 소수점을 반올림하고 나머지를 버리고, TRUNC의 경우 반올림 없이 버림
- 날짜에도 적용 가능

```sql
SELECT ROUND (TRUNC)(value, digit)
FROM table_name;
```

21. DATEDIFF

- 두 개의 날짜값의 차이를 Int형으로 반환하고자 할 때 사용

```sql
SELECT DATEDIFF (interval, Start_Date, End_Date);
```

22. DATE_FORMAT

- 시간을 원하는 형태로 포맷팅할 때
