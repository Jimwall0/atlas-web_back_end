-- Rank country origins of bands by total number of fans
SELECT
    origin,
    SUM(fans_count) AS nb_fans
FROM
    bands
GROUP BY
    origin
ORDER BY
    nb_fans DESC;
