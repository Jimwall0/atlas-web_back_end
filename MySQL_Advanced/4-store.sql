-- Create a trigger that decreases the quantity of an item after addin a new order
DELIMITER $$

CREATE TRIGGER order_list
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    UPDATE items
    SET quantity = quantity - NEW.number
    WHERE name = NEW.item_name;
END$$

DELIMITER ;
