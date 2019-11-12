import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from "firebase/app";
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  batches = [2015, 2016, 2017, 2018];
  constructor(private afAuth:AngularFireAuth,private router:Router,private storage: AngularFireStorage,private db: AngularFireDatabase) { }
  sems = [];
  batch;
  sem;
  subcodes = []
  subnames = []
  dates = [];
  times = [];
  name:any;
  dat;
  tim;
  USN:any;
  subs = []
  counter:number;
  ele1;
  ele2;
  elect1 = []
  uploadPercent;
  elect2 = []
  show = false
  str:String="";
  i;
  year= new Date().getFullYear();
  n;
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
    this.sem = sem;
    if(sem>4)
      this.show = true
    else 
      this.show = false
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
        "15CSS86 (SEMINAR)",
        "15CSP85 (PROJECT WORK PHASE II)"
      ];
      this.elect1 = ["15CS834 (SYSTEM MODELING AND SIMULATION)",
      "15CS832 (MODERN INTERFACE DESIGN)",
      ];
      this.elect2 = this.elect1;
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
        "15CSL67 (SYSTEM SOFTWARE & OPERATING SYSTEM LAB)",
        "15CSL68 (COMP. GRAPHICS LABORATORY WITH MINI PROJECT)",
      ];
      this.elect1 = ["15CS651 (DATA MINING AND DATA WAREHOUSING)",
      "15CS653 (Operation Research)",
      "15MAT661 (Linear Algebra)",
      "15CS664 (PYTHON APPLICATION PROGRAMMING)",
      "15IM663 (Value engineering)"
      ];
      this.elect2 = this.elect1;
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
        "15CSL76 (MACHINE LEARNING  LABORATORY)",
        "15CSL77 (WEB TECHNOLOGY LABORATORY  WITH MINI PROJECT)",
        "15CSP78 (PROJECT PHASE 1 + SEMINAR)"
      ];
      this.elect1 = ["15CS744 (UNIX SYSTEM PROGRAMMING)",
      "15CS754 (STORAGE AREA NETWORKS)"]
      this.elect2 = this.elect1;
    }
    if (this.batch == 2016 && this.sem == 5) {
      this.subs = [
        "15CS51 (MANAGEMENT AND ENTREPRENEURSHIP FOR IT INDUSTRY)",
        "15CS52 (COMPUTER NETWORKS)",
        "15CS53 (DATABASE MANAGEMENT SYSTEM)",
        "15CS54 (AUTOMATA THEORY AND COMPUTABILITY)",
       
        "15CSL57 (COMPUTER NETWORK LAB)",
        "15CSL58 (DBMS LABORATORY WITH MIN PROJECT)",
        
       
       
      ];
      this.elect1 = [ "15CS553 (ADVANCED JAVA AND J2EE)","15PHY561 (LASER PHYSICS AND NON LINEAR OPTICS)",
      "15ME562 (ENERGY AND ENVIRONMENT)", "15CS564 (DOT NET FRAMEWORK FOR APPLICATION DEVELOPMENT)",
      "15CS562 (ARTIFICIAL INTELLIGENCE)"];
      this.elect2 = this.elect1;
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
        "17CSL38 (DATA STRUCTURES LABORATORY)"
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
        "15CSL67 (SS&OS-LAB)",
        "15CSL68 (CG-Laboratory)"
      ];
      this.elect1= ["15CS651 (Data-Mining)",
      "15CS653 (OR)",
      "15CS661 (MAD)",
      "15CS664 (Python)"]
      this.elect2 = this.elect1;
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
  }

    setele1(ele)
    {
      this.ele1 = ele;
      this.elect2 = this.elect1.filter(function(value, index, arr){

        return value != ele;
    
    });
    }

    setele2(ele)
    {
      this.ele2 = ele;
    }

  submit()
  {
    
    this.counter = 0;
    var length = this.subs.length;
    if(this.sem>4)
    {
      this.subs.push(this.ele1)
      this.subs.push(this.ele2)
    }
    var uid = this.makeid(10)
    const itemRef = this.db.object('data/'+uid);
  itemRef.set({ name: this.name,
                usn: this.USN});
    this.subs.forEach(ele=>
      {
        var spl = String(ele).split('(')
        var subcode = (spl[0].trim())
        var subname =spl[1].substring(0,spl[1].length-1)
        this.subcodes.push(subcode);
        this.subnames.push(subname);
        this.db.object('subjects/'+subcode+"/date").valueChanges().subscribe(data=>{this.dates.push(data);})
        this.db.object('subjects/'+subcode+"/time").valueChanges().subscribe(data=>{this.times.push(data);
                                                                                    while(this.times.length==0)
                                                                                          console.log("wait");
                                                                                        this.adddata(uid);})
      });
      
 
}
adddata(uid)
{
  console.log(this.dates[0])
  console.log(this.times)
      const itemRef1 = this.db.object("data/"+uid+"/Subjects/sub1");
  itemRef1.set({ code: this.subcodes[0],
                date: this.dates[0],
                name: this.subnames[0],
                time:this.times[0]});
                const itemRef2 = this.db.object("data/"+uid+"/Subjects/sub2");
  itemRef2.set({ code: this.subcodes[1],
                date: this.dates[1],
                name: this.subnames[1],
                time:this.times[1]});
                const itemRef3 = this.db.object("data/"+uid+"/Subjects/sub3");
  itemRef3.set({ code: this.subcodes[2],
                date: this.dates[2],
                name: this.subnames[2],
                time:this.times[2]});
                const itemRef4 = this.db.object("data/"+uid+"/Subjects/sub4");
  itemRef4.set({ code: this.subcodes[3],
                date: this.dates[3],
                name: this.subnames[3],
                time:this.times[3]});
                const itemRef5 = this.db.object("data/"+uid+"/Subjects/sub5");
  itemRef5.set({ code: this.subcodes[4],
                date: this.dates[4],
                name: this.subnames[4],
                time:this.times[4]});
                const itemRef6 = this.db.object("data/"+uid+"/Subjects/sub6");
  itemRef6.set({ code: this.subcodes[5],
                date: this.dates[5],
                name: this.subnames[5],
                time:this.times[5]});
                const itemRef7 = this.db.object("data/"+uid+"/Subjects/sub7");
  itemRef7.set({ code: this.subcodes[6],
                date: this.dates[6],
                name: this.subnames[6],
                time:this.times[6]});
                const itemRef8 = this.db.object("data/"+uid+"/Subjects/sub8");
  itemRef8.set({ code: this.subcodes[7],
                date: this.dates[7],
                name: this.subnames[7],
                time:this.times[7]});
    window.alert("New Student added");
    this.router.navigateByUrl('/login')
}

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = String(this.USN)+".jpg";
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
  }

   makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

}
