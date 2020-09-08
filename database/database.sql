create database imed_stuff
default charset utf8
default collate utf8_general_ci;

create table itens (
id int not null auto_increment,
nome varchar(20) not null,
bloco char(1),
sala int not null,
descricao varchar(30),
item_status varchar(20),
quantidade int not null,
primary key (id)
) default charset utf8;

create table usuario (
id int not null auto_increment,
email varchar(90),
senha char(128),
primary key (id)
) default charset utf8;

create table funcionario (
id int not null auto_increment,
nome varchar(20) not null,
email varchar(90),
senha char(128),
whatsapp varchar(11),
primary key (id)
) default charset utf8;

create table reserva (
id int not null auto_increment,
item_id int not null,
usuario_id int not null,
data_reserva datetime not null,
data_entrega datetime not null,
primary key (id),
foreign key (item_id) references itens(id),
foreign key (usuario_id) references usuario(id)
) default charset utf8;

create table retirada (
id int not null auto_increment,
item_id int not null,
usuario_id int not null,
funcionario_id int not null,
data_reserva datetime not null,
data_entrega datetime not null,
primary key (id),
foreign key (item_id) references itens(id),
foreign key (usuario_id) references usuario(id),
foreign key (funcionario_id) references funcionario(id)
) default charset utf8;
