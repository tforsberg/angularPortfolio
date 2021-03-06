import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'transcript-page',
  templateUrl: './transcript-page.html',
})

export default class TranscriptPage {

  constructor(private route: ActivatedRoute) {}

  grades = GRADES;

}

export class Grade {
  id: string;
  title: string;
  grade: string;
  school: string;
  semester: string;
  year: number;
}

const SEMESTERS = [
    'Summer', 'Fall', 'Winter'
];

const SCHOOLS = [
    'BCIT', 'KPU'
];

 const GRADES: Grade[] = [
    { id: 'COMP 1850', title: 'Web Development and Design 1', grade: 'B+', school: SCHOOLS[0], semester: SEMESTERS[0], year: 2014},
    { id: 'COMP 1950', title: 'Web Development and Design 2', grade: 'B', school: SCHOOLS[0], semester: SEMESTERS[0], year: 2014 },
    { id: 'COMP 2051', title: 'Web Development and Design 3', grade: 'C', school: SCHOOLS[0], semester: SEMESTERS[1], year: 2014 },
    { id: 'COMP 1630', title: 'Relational Database & SQL', grade: 'A-', school: SCHOOLS[0], semester: SEMESTERS[0], year: 2016 },
    { id: 'COMP 2909', title: 'AngularJS', grade: 'A-', school: SCHOOLS[0], semester: SEMESTERS[0], year: 2016 },
    { id: 'COMP 1920', title: 'Server-side Scripting PHP 1', grade: 'A-', school: SCHOOLS[0], semester: SEMESTERS[1], year: 2016 },
    { id: 'COMP 1409', title: 'Intro to Software Development 1', grade: 'A', school: SCHOOLS[0], semester: SEMESTERS[2], year: 2017 },
    { id: 'COMP 4662', title: 'MySQL for Data Driven Websites', grade: 'A-', school: SCHOOLS[0], semester: SEMESTERS[2], year: 2017 },
    { id: 'COMP 1451', title: 'Intro to Software Development 2', grade: 'A-', school: SCHOOLS[0], semester: SEMESTERS[0], year: 2017 },
    { id: 'COMP 2614', title: '.NET Windows Application Development in C#', grade: 'B-', school: SCHOOLS[0], semester: SEMESTERS[0], year: 2017 },
    { id: 'COMP 4669', title: 'Advanced Web Applications with PHP', grade: 'A-', school: SCHOOLS[0], semester: SEMESTERS[0], year: 2017 },
    { id: 'COMP 4704', title: 'Applied Network Security', grade: '', school: SCHOOLS[0], semester: SEMESTERS[1], year: 2017 },
    { id: 'INFO 1111', title: 'Intro to Comp Hardware & Software', grade: 'A', school: SCHOOLS[1], semester: SEMESTERS[1], year: 2015 },
    { id: 'INFO 1112', title: 'Program Sructure & Design', grade: 'A', school: SCHOOLS[1], semester: SEMESTERS[1], year: 2015 },
    { id: 'INFO 1113', title: 'Systems Analysis and Design', grade: 'B+', school: SCHOOLS[1], semester: SEMESTERS[1], year: 2015 },
    { id: 'INFO 1213', title: 'Web Application Development', grade: 'A+', school: SCHOOLS[1], semester: SEMESTERS[1], year: 2015 },
    { id: 'ENGL 1100', title: 'Intro to University Writing', grade: 'A-', school: SCHOOLS[1], semester: SEMESTERS[2], year: 2016 },
    { id: 'INFO 1212', title: 'Networking Technologies 1', grade: 'A-', school: SCHOOLS[1], semester: SEMESTERS[2], year: 2016 },
    { id: 'INFO 1214', title: 'Discrete Math for IT', grade: 'B-', school: SCHOOLS[1], semester: SEMESTERS[2], year: 2016 },
    { id: 'MATH 1115', title: 'Statistics 1', grade: 'C', school: SCHOOLS[1], semester: SEMESTERS[2], year: 2016 },
    { id: 'PIHL 1150', title: 'Introduction to Formal Logic', grade: 'A-', school: SCHOOLS[1], semester: SEMESTERS[2], year: 2016 },
    { id: 'INFO 2315', title: 'Object-Oriented Programming', grade: 'A', school: SCHOOLS[1], semester: SEMESTERS[0], year: 2016 },
    { id: 'INFO 2411', title: 'Foundations of Comp Security', grade: 'A', school: SCHOOLS[1], semester: SEMESTERS[0], year: 2016 },
    { id: 'BUSI 1110', title: 'Fundamentals of Business in Canada', grade: 'A-', school: SCHOOLS[1], semester: SEMESTERS[1], year: 2016 },
    { id: 'CMNS 1140', title: 'Intro to Professional Communications', grade: 'A-', school: SCHOOLS[1], semester: SEMESTERS[1], year: 2016 },
    { id: 'COOP 1101', title: 'Job Search Techniques', grade: 'A-', school: SCHOOLS[1], semester: SEMESTERS[1], year: 2016 },
    { id: 'INFO 1211', title: 'Operating System Principles & Apps', grade: 'A+', school: SCHOOLS[1], semester: SEMESTERS[1], year: 2016 },
    { id: 'INFO 2311', title: 'Networking Technologies 2', grade: 'B+', school: SCHOOLS[1], semester: SEMESTERS[1], year: 2016 },
    { id: 'INFO 2312', title: 'Database Management Systems', grade: 'A-', school: SCHOOLS[1], semester: SEMESTERS[1], year: 2016 },
    { id: 'ECON 1250', title: 'Principles of Macroeconomics', grade: 'B', school: SCHOOLS[1], semester: SEMESTERS[2], year: 2017 },
    { id: 'INFO 2315', title: 'Data Structures', grade: 'A-', school: SCHOOLS[1], semester: SEMESTERS[2], year: 2017 },
    { id: 'INFO 2413', title: 'System Development Project', grade: 'A-', school: SCHOOLS[1], semester: SEMESTERS[2], year: 2017 },
    { id: 'INFO 2416', title: 'Server Operating Systems', grade: 'B+', school: SCHOOLS[1], semester: SEMESTERS[2], year: 2017 },
    { id: 'MATH 1140', title: 'Calculus I (Business Applic.)', grade: 'W', school: SCHOOLS[1], semester: SEMESTERS[2], year: 2017 },
    { id: 'BUQU 1130', title: 'Business Mathematics', grade: 'A-', school: SCHOOLS[1], semester: SEMESTERS[0], year: 2017 },
    { id: 'INFO 3150', title: 'Object-Oriented Software Engineering', grade: 'A', school: SCHOOLS[1], semester: SEMESTERS[0], year: 2017 },
    { id: 'INFO 3235', title: 'Software Quality Assurance', grade: 'B', school: SCHOOLS[1], semester: SEMESTERS[0], year: 2017 },
];