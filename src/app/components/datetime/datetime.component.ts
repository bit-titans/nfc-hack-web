import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {
  batches = [2015, 2016, 2017, 2018];
sem;
sems =[];
date:String[]=["1","2","3","4","5","6","7","8"];
time:String[] = []
year = new Date().getFullYear();
length:Number;
show = false;
  batch: any;
  i;
  n;
  subs = []
  constructor(private db: AngularFireDatabase,private router:Router) { }

  ngOnInit() {
  }
  setBatch(batch) {
    console.log(batch);
    if (batch === "2015") {
      this.sems = [];
      this.n = (this.year - batch) * 2;
      for (this.i = 1; this.i <= this.n; this.i++) {
        this.sems.push(this.i);
      }
    }
    if (batch === "2016") {
      this.sems = [];
      this.n = (this.year - batch) * 2;
      for (this.i = 1; this.i <= this.n; this.i++) {
        this.sems.push(this.i);
      }
    }
    if (batch === "2017") {
      this.sems = [];
      this.n = (this.year - batch) * 2;
      for (this.i = 1; this.i <= this.n; this.i++) {
        this.sems.push(this.i);
      }
    }
    if (batch === "2018") {
      this.sems = [];
      this.n = (this.year - batch) * 2;
      for (this.i = 1; this.i <= this.n; this.i++) {
        this.sems.push(this.i);
      }
    }
    this.batch=batch;
  }
  setSem(sem) {
    this.show = true;
    this.sem = sem;
    if (this.batch == 2018 && this.sem == 1) {
      this.subs = [
        "18MAT11 (CALCULUS AND LINEAR ALGEBRA)",
        "18PHY12 (ENGINEERING PHYSICS)",
        "18ELE13 (BASIC ELECTRICAL ENGINEERING)",
        "18CIV14 (ELEMENTS OF CIVIL ENGINEERING AND MECHANICS)",
        "18EGDL15 (ENGINEERING GRAPHICS)",
        "18PHYL16 (ENGINEERING PHYSICS LABORATORY)",
        "18ELEL17 (BASIC ELECTRICAL ENGINEERING LABORATORY)",
        "18EGH18 (TECHNICAL ENGLISH-I)"
      ];
    }
    if (this.batch == 2015 && this.sem == 8) {
      this.subs = [
        "15CS81 (INTERNET OF THINGS AND APPLICATIONS)",
        "15CS82 (BIG DATA ANALYTICS)",
        "15CS84 (INTERNSHIP/PROFESSIONAL PRACTICE)",
        "15CS834 (SYSTEM MODELING AND SIMULATION)",
        "15CS832 (MODERN INTERFACE DESIGN)",
        "15CSP85 (PROJECT WORK PHASE II)",
        "15CSS86 (SEMINAR)"
      ];
    }
    if (this.batch == 2017 && this.sem == 1) {
      this.subs = [
        "17MAT11 (ENGINEERING MATHEMATICS-I)",
        "17PHY12 (ENGINEERING PHYSICS)",
        "17CIV13 (ELEMENTS OF CIVIL ENGG. & MECHANICS)",
        "17EME14 (ELEMENTS OF MECHANICAL ENGINEERING)",
        "17ELE15 (BASIC ELECTRICAL ENGINEERING)",
        "17WSL16 (WORKSHOP PRACTICE)",
        "17PHYL17 (ENGINEERING PHYSICS LAB.)"
      ];
    }
    if (this.batch == 2016 && this.sem == 6) {
      this.subs = [
        "15CS61 (CRYPTOGRAPHY, NETWORK SECURITY AND CYBER LAW)",
        "15CS62 (COMPUTER GRAPHICS AND VISUALIZATION)",
        "15CS63 (SYSTEM SOFTWARE AND COMPILER DESIGN)",
        "15CS64 (OPERATING SYSTEMS)",
        "15CS651 (DATA MINING AND DATA WAREHOUSING)",
        "15CS653 (Operation Research)",
        "15MAT661 (Linear Algebra)",
        "15CS664 (PYTHON APPLICATION PROGRAMMING)",
        "15CSL67 (SYSTEM SOFTWARE & OPERATING SYSTEM LAB)",
        "15CSL68 (COMP. GRAPHICS LABORATORY WITH MINI PROJECT)",
        "15IM663 (Value engineering)"
      ];
    }
    if(this.batch == 2017 && this.sem == 4){
      this.subs = [
        "17MAT41 (ENGINEERING MATHEMATICS - IV)",
        "17CS42 (OBJECT ORIENTED CONCEPTS)",
        "17CS43 (DESIGN AND ANALYSIS OF ALGORITHMS)",
        "17CS44 (MICROPROCESSORS AND MICROCONTROLLERS)",
        "17CS45	 (SOFTWARE ENGINEERING)",
        "17CS46 (DATA COMMUNICATION)",
        "17CSL47 (DESIGN AND ANALYSIS OF ALGORITHMS LABORATORY)",
        "17CSL48 (MICROPROCESSORS LABORATORY)",
      ];
    }
    if (this.batch == 2015 && this.sem == 7) {
      this.subs = [
        "15CS71 (WEB TECHNOLOGY AND ITS APPLICATIONS)",
        "15CS72 (ADVANCED COMPUTER ARCHITECTURES)",
        "15CS73 (MACHINE LEARNING)",
        "15CS744 (UNIX SYSTEM PROGRAMMING)",
        "15CS754 (STORAGE AREA NETWORKS)",
        "15CSL76 (MACHINE LEARNING  LABORATORY)",
        "15CSL77 (WEB TECHNOLOGY LABORATORY  WITH MINI PROJECT)",
        "15CSP78 (PROJECT PHASE 1 + SEMINAR)"
      ];
    }
    if (this.batch == 2016 && this.sem == 5) {
      this.subs = [
        "15CS51 (MANAGEMENT AND ENTREPRENEURSHIP FOR IT INDUSTRY)",
        "15CS52 (COMPUTER NETWORKS)",
        "15CS53 (DATABASE MANAGEMENT SYSTEM)",
        "15CS54 (AUTOMATA THEORY AND COMPUTABILITY)",
        "15CS553 (ADVANCED JAVA AND J2EE)",
        "15CSL57 (COMPUTER NETWORK LAB)",
        "15CSL58 (DBMS LABORATORY WITH MIN PROJECT)",
        "15PHY561 (LASER PHYSICS AND NON LINEAR OPTICS)",
        "15ME562 (ENERGY AND ENVIRONMENT)",
        "15CS564 (DOT NET FRAMEWORK FOR APPLICATION DEVELOPMENT)",
        "15CS562 (ARTIFICIAL INTELLIGENCE)"
      ];
    }
    if(this.batch == 2017 && this.sem == 3){
      this.subs = [
        "17MAT31 (ENGINEERING MATHEMATICS - III)",
        "17CS32 (ANALOG AND DIGITAL ELECTRONICS)",
        "17CS33 (DATA STRUCTURES AND APPLICATIONS)",
        "17CS34 (COMPUTER ORGANIZATION)",
        "17CS35	 (UNIX AND SHELL PROGRAMMING)",
        "17CS36 (DISCRETE MATHEMATICAL STRUCTURES)",
        "17CSL37 (ANALOG AND DIGITAL ELECTRONICS LABORATORY)",
        "17CSL38 (DATA STRUCTURES LABORATORY)",
      ];
    }
    if(this.batch == 2018 && this.sem == 2){
      this.subs = [
        "18MAT21 (ADVANCED CALCULUS AND NUMERICAL METHODS)",
        "18CHE22 (ENGINEERING CHEMISTRY)",
        "18CPS23 (C PROGRAMMING FOR PROBLEM SOLVING)",
        "18ELN24 (BASIC ELECTRONICS)",
        "18ME25	 (ELEMENTS OF MECHANICAL ENGINEERING)",
        "18CHEL26 (ENGINEERING CHEMISTRY LABORATORY)",
        "18CPL27 (C PROGRAMMING LABORATORY)",
        "18EGH28 (TECHNICAL ENGLISH-II)"
      ];
    }
    if (this.batch == 2016 && this.sem == 4) {
      this.subs = [
        "15MAT41 (ENGINEERING-MATHEMATICS)",
        "15CS42 (SE)",
        "15CS43 (DAA)",
        "15CS44 (MP&MC)",
        "15CS45 (OOC)",
        "15CS46 (DC)",
        "15CSL47 (DAA-LAB)",
        "15CSL48 (MP&MC-LAB)"
      ];
    } else if (this.batch == 2015 && this.sem == 6) {
      this.subs = [
        "15CS61 (Cryptography)",
        "15CS62 (CG)",
        "15CS63 (System-Software-and-Compiler-Design)",
        "15CS64 (Operating Systems)",
        "15CS651 (Data-Mining)",
        "15CS653 (OR)",
        "15CS661 (MAD)",
        "15CS664 (Python)",
        "15CSL67 (SS&OS-LAB)",
        "15CSL68 (CG-Laboratory)"
      ];
    } else if (this.batch == 2017 && this.sem == 2) {
      this.subs = [
        "17PCD23 (CCP)",
        "17MAT21 (Mat-2)",
        "17ELN25 (ELN)",
        "17CPL26 (CCP-LAB)",
        "17CHEL27 (CHEM-LAB)",
        "17CHE22 (CHEM)",
        "17CED24 (CAED)"
      ];
    }
    this.length = this.subs.length
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  submit()
  {
    console.log(this.subs)
    var i = 0;
    this.subs.forEach(ele=>{
      var spl = String(ele).split('(')
      var subcode = (spl[0].trim())
      var subname =spl[1].substring(0,spl[1].length-1)
      var arr = String(this.date[i]).split(" ");
      var time = this.time[i]
      i++;
    var dd = arr[2]
    var mmw = arr[1]
    var yyyy = arr[3]
    console.log(dd)
    console.log(yyyy)
    var mm = "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(mmw) / 3 + 1
    var date = dd.concat("-").concat(String(mm)).concat("-").concat(yyyy)
    console.log(date)
    const itemRef = this.db.object('subjects/'+subcode);
    itemRef.set({ date: date,
                  time:time});
    });
    window.alert("Data Added")
    this.router.navigateByUrl('/add')
  }
}
