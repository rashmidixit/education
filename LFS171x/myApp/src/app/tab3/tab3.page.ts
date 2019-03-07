import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { FingerprintAIO ,FingerprintOptions} from '@ionic-native/fingerprint-aio/ngx';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  logEvent(event, message) {
    window.frames[0].postMessage(message, "*");
  }
  
  fingerprintOptions : FingerprintOptions;
  constructor(private fingerprint: FingerprintAIO,private platform: Platform) {
    this.fingerprintOptions={
      clientId: 'fingerprint-demo',
      clientSecret: 'password',
      disableBackup: true
      
    }
  }
  async showFingerprintAuthDlg(){
    try{
      await this.platform.ready();
      const available = await this.fingerprint.isAvailable();
      console.log(available)
      if(available === "finger"){
        const result = await this.fingerprint.show(this.fingerprintOptions);
        console.log(result);
        window.frames[0].postMessage(result, "*");
      }
    }
    catch(e)
    {
      console.error(e);
    }
    
  }
  
}
