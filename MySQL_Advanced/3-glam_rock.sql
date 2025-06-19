-- All bands with Glam rock style listed by their age
SELECT
    band_name,
    IFNULL(split, 2024) - formed As lifespan
FROM metal_bands
WHERE style LIKE '%Glam rock%'
ORDER BY lifespan DESC;
