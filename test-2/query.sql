SELECT orders.customerNumber
FROM Orders
INNER JOIN orderdetails ON Orders.orderNumber=orderdetails.orderNumber
HAVING COUNT(orderdetails.orderLineNumber) > 23
