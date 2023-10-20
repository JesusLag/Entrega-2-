import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public mensaje = "";
  public estado: String = "";
  user = {
    usuario: "",
    pass: ""
  }
  
  @ViewChild(IonModal) modal!: IonModal

  constructor(private router:Router, private activeRouter:ActivatedRoute) { }

  ngOnInit() {
  }
  irASesion() {
    this.router.navigate(['/recuperar']); // Navega a la página de inicio de sesión
  }

  irInicio() {
    const navigationExtras: NavigationExtras = {
      state: { user: this.user}
    }
    this.router.navigate(['/inicio'],navigationExtras); // Navega a la página de inicio de sesión
  } 
  Consola() {
    console.log(this.user);
    if (this.user.usuario != "" && this.user.pass != "") {
      this.mensaje = "Conectado";
    } else {
      this.mensaje = "¡Las casillas de Usuario y Contraseña no pueden estar vacios!"
    }
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

    
}

