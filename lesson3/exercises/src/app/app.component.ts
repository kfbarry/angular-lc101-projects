import { Component } from '@angular/core';
import { buildDriverProvider } from 'protractor/built/driverProviders';
import { parse } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';
 

  takeOff(){
    window.confirm("Confirm that the shuttle is ready for takeoff.");
    this.message = "Shuttle in flight.";
    this.color = "blue"
    this.height += 10000;
  }

  land(){
    window.alert("The shuttle is landing. Landing gear engaged.");
    this.message ="The shuttle has landed.";
    this.color = "green";
    this.height =0;
  }

  abort(){
    window.confirm("Do you really want to abort the mission? do you really really? I mean really really?");
    this.message ="Mission aborted.";
    this.color = "red";
    this.height =0;
  }

  moveRocket(rocketImage, direction) {
    if (direction === 'right') {
       let movement = parseInt(rocketImage.style.left) + 10 + 'px';
       rocketImage.style.left = movement;
       this.width = this.width + 10000;
    }
 }

}
