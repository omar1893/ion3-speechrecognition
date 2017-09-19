import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bgcolor: string = 'white';

  constructor(public navCtrl: NavController, private speech: SpeechRecognition) {

  }

  ngOnInit() {
    this.speech.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
          this.speech.requestPermission()
            .then(
            () => console.log('Granted'),
            () => console.log('Denied')
            )
        }

      })
  }

  start(){
    this.speech.startListening()
    .subscribe(
      (matches:Array<string>) => {
        this.bgcolor = matches[0];
      }
    )
  }

}
