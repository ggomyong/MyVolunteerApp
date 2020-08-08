import { Component, OnInit } from '@angular/core';
import { Animal } from './animal';
import {MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title = 'MyGames';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer){
    /*
     * Font Awesome License: https://fontawesome.com/license
    */
    this.matIconRegistry.addSvgIcon(
      `mask`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/head-side-mask-solid.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `sanitizer`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/pump-soap-solid.svg`)
    );

    this.matIconRegistry.addSvgIcon(
      `soap`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/soap-solid.svg`)
    );
  }
}
