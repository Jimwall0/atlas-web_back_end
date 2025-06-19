-- make div mathmatics
DELIMITER $$

CREATE FUNCTION SafeDiv(a INT, b INT)
RETURNS INT
DETERMINISTIC
BEGIN
    IF b = 0 THEN
        RETURN 0;
    ELSE
        RETURN a DIV b;
    END IF;
END$$

DELIMITER ;
