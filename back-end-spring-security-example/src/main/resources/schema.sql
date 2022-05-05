DROP TABLE IF EXISTS t_registered_user;

CREATE TABLE t_registered_user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    permission VARCHAR(255) NOT NULL
);
