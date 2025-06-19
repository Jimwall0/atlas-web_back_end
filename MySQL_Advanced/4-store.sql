-- Create a trigger that decreases the quantity of an item after addin a new order
DELIMITER $$

CREATE TRIGGER remove
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    UPDATE items
    SET quantity = quantity - NEW.quantity
    WHERE id = NEW.item_id;
END$$

DELIMITER ;
