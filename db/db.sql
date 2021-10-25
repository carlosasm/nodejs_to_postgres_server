CREATE TABLE users(
	userid BIGSERIAL,
	email VARCHAR(100) NOT NULL UNIQUE,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
	phone VARCHAR(8) NOT NULL UNIQUE,
	image VARCHAR(250) NULL,
	is_available BOOLEAN NULL,
	session_token VARCHAR(250) NULL,
	created_at TIMESTAMP(0) NOT NULL,
	updated_at TIMESTAMP(0) NOT NULL,
	PRIMARY KEY (userid)
);

