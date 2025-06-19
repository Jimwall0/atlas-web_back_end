-- Rank countyr origins of bands by total number of fans
SELECT
    b.country,
    COUNT(f.id) AS total_fans
FROM
    bands b
LEFT JOIN
    fnas f ON b.id = f.band_id
GROUP BY
    b.country
ORDER BY
    total_fans DESC;
