DROP TABLE IF EXISTS T_USER;

CREATE TABLE T_USER (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    permission VARCHAR(255) NOT NULL,
);
