# camera Network
CREATE TABLE CameraNetworks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  cameras JSON,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

# camera
CREATE TABLE Cameras (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  url VARCHAR(255) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

<!-- NPM LIBRARY USE -->
1) EXPRESSJS
2) MYSQL

TO START THE PROJECT
1) git clone https://github.com/ShubhamFunctionUp/camera.git
2) cd camera
3) run npm i
4) create table in mysql workbench
5) establish connection
6) Now hit API from Postman

TOOLS USED IN THIS ARE
1) POSTMAN
2) VSCODE
3) MYSQL WORKBENCH
