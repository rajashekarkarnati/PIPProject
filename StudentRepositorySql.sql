create schema StudentRepository

create table StudentRepository.StudentDetails
(
	studentid int primary key Identity(1000, 1),
	studentname varchar(50) not null,
	age int not null,
	gender varchar(6) not null,
	dob date not null,
	mobileno varchar(10) not null,
	[address] varchar(1000) not null,
	[password] varchar(25) not null,
	email varchar(100) not null, 
	photo varchar(50)
)

drop table StudentRepository.StudentDetails
select * from StudentRepository.StudentDetails

drop table StudentRepository.StudentDetails
drop table StudentRepository.AdminLoginDetails
drop table StudentRepository.Jobs
drop table StudentRepository.JobsApplied

create table StudentRepository.AdminLoginDetails
(
	id int identity primary key,
	adminid int not null,
	adminpassword varchar(25) not null
)

insert into StudentRepository.AdminLoginDetails values(1949, 'admin')

create table StudentRepository.Jobs
(
	jobid int primary key identity,
	jobtitle varchar(50) not null,
	companytitle varchar(100) not null,
	jobdescription varchar(1000) not null,
	createddate date not null
)

select * from StudentRepository.Jobs

create table StudentRepository.JobsApplied
(
	id int primary key identity,
	jobid int foreign key references StudentRepository.Jobs(jobid) on delete cascade,
	studentid int foreign key references StudentRepository.StudentDetails(studentid) on delete cascade,
	applieddate date not null,
)
drop table StudentRepository.JobsApplied

select * from StudentRepository.JobsApplied