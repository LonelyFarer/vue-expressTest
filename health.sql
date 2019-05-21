create database health;
create table user(  
id int not null primary key auto_increment,  
username varchar(100) not null,  
password varchar(100) not null,  
password2 varchar(100) not null, 
email varchar(120) not null,  
phone varchar(120) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;  

create table role(  
roleId int not null primary key auto_increment,  
roleName varchar(100) not null 
)ENGINE=InnoDB DEFAULT CHARSET=utf8;  

create table power(  
powerId int not null primary key auto_increment,  
type varchar(100) not null,
menuId varchar(100) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;  

create table userRole(  
userRoleId int not null primary key auto_increment,  
userId varchar(100) not null,
roleId varchar(100) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;  

create table rolePower(  
rolePowerId int not null primary key auto_increment,  
roleId varchar(100) not null,
powerId varchar(100) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table menuMessage(  
menuId int not null primary key auto_increment,  
menuName varchar(100) not null,
menuUrl varchar(100) not null,
parentMenuId varchar(100) not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table words(  
username varchar(100) not null primary key auto_increment,  
words varchar(100) not null,
likes varchar(100) not null,
nolike varchar(100) not null,
time datetime not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


create table collect(  
collectId int not null primary key auto_increment,  
username varchar(100) not null,
title varchar(100) not null,
content varchar(100) not null,
time datetime not null
)ENGINE=InnoDB DEFAULT CHARSET=utf8;