-- computes and store the average score for a student
DELIMITER $$

CREATE PROCEDURE ComputeAverageScoreForUser (
    IN input_user_id INT
)
BEGIN
    DECLARE avg_score FLOAT;

    -- Compute the average score for the user
    SELECT AVG(score) INTO avg_score
    FROM corrections
    WHERE user_id = input_user_id;

    -- Update the user's average_score
    UPDATE users
    SET average_score = IFNULL(avg_score, 0)
    WHERE id = input_user_id;
END$$

DELIMITER ;
