INSERT INTO public.account (
    account_firstname,
    account_lastname,
    account_email,
    account_password
  )
VALUES   (
    'Tony',
    'Stark',
    'tony@starkent.com',
    'Iam1ronM@n'
  )

SELECT * FROM public.account
ORDER BY account_id ASC;

UPDATE account
SET account_type = 'Admin'
WHERE account_email = 'tony@starkent.com';

SELECT * FROM public.account
ORDER BY account_id ASC;

DELETE FROM account
WHERE account_email = 'tony@starkent.com';

SELECT * FROM public.account
ORDER BY account_id ASC;

UPDATE inventory
-- SET inv_description = REPLACE(inv_description, 'a huge interior', 'small interior')
SET inv_description = REPLACE(inv_description, 'the small interiors', 'a huge interior')
WHERE inv_model = 'Hummer';

SELECT * FROM public.inventory
ORDER BY inv_id ASC;

SELECT * FROM public.classification
ORDER BY classification_id ASC;

SELECT inv_make, inv_model, classification_name
    FROM inventory AS i
        INNER JOIN classification AS c
    ON i.classification_id = c.classification_id WHERE classification_name = 'Sport';

UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images', '/images/vehicles'),
inv_thumbnail = REPLACE(inv_thumbnail, '/images', '/images/vehicles')

-- UPDATE inventory
-- SET inv_image = REPLACE(inv_image, '/images/vehicles', '/images'),
-- inv_thumbnail = REPLACE(inv_thumbnail, '/images/vehicles', '/images')

SELECT * FROM public.inventory
ORDER BY inv_id ASC 