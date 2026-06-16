CREATE DATABASE premium_account_store;

USE premium_account_store;

CREATE TABLE users (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255),
 email VARCHAR(255) UNIQUE,
 mobile VARCHAR(50),
 password VARCHAR(255),
 status ENUM('active','blocked')
 DEFAULT 'active',
 createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admins (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255),
 email VARCHAR(255),
 password VARCHAR(255),
 role ENUM('admin','super_admin')
 DEFAULT 'admin'
);

CREATE TABLE apps (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255),
 slug VARCHAR(255),
 logo TEXT,
 description TEXT,
 status ENUM('active','inactive')
 DEFAULT 'active'
);

CREATE TABLE plans (
 id INT AUTO_INCREMENT PRIMARY KEY,
 appId INT,
 name VARCHAR(255),
 description TEXT,
 status ENUM('active','inactive')
 DEFAULT 'active'
);

CREATE TABLE durations (
 id INT AUTO_INCREMENT PRIMARY KEY,
 planId INT,
 duration VARCHAR(50),
 regularPrice DECIMAL(10,2),
 discountPercent INT,
 finalPrice DECIMAL(10,2),
 stock INT
);

CREATE TABLE orders (
 id INT AUTO_INCREMENT PRIMARY KEY,
 orderNumber VARCHAR(255),
 userId INT,
 appName VARCHAR(255),
 planName VARCHAR(255),
 duration VARCHAR(50),
 amount DECIMAL(10,2),
 status VARCHAR(50)
);

CREATE TABLE payments (
 id INT AUTO_INCREMENT PRIMARY KEY,
 orderId INT,
 paymentMethodId INT,
 senderNumber VARCHAR(50),
 transactionId VARCHAR(255),
 screenshot TEXT,
 amount DECIMAL(10,2),
 status VARCHAR(50)
);

CREATE TABLE payment_methods (
 id INT AUTO_INCREMENT PRIMARY KEY,
 name VARCHAR(255),
 accountNumber VARCHAR(100),
 accountType VARCHAR(50),
 status VARCHAR(50)
);

CREATE TABLE inventory_accounts (
 id INT AUTO_INCREMENT PRIMARY KEY,
 appName VARCHAR(255),
 planName VARCHAR(255),
 email VARCHAR(255),
 password VARCHAR(255),
 notes TEXT,
 status VARCHAR(50)
);
