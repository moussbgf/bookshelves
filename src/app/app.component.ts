import { Component } from '@angular/core';
// import * as firebase from 'firebase';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyAaitWWQuAVJn2TjfMpq_iyKHWh_q4UEMg",
      authDomain: "bookshelves-43f2c.firebaseapp.com",
      projectId: "bookshelves-43f2c",
      storageBucket: "bookshelves-43f2c.appspot.com",
      messagingSenderId: "549772506869",
      appId: "1:549772506869:web:4085895005f00c376677bc",
      measurementId: "G-QBQ41X54YN"
    };
    firebase.initializeApp(config);
  }
}
