import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'gui@email.com' && usuario.senha ==='123456') {
      this.usuarioAutenticado = true;
      this.router.navigate(['/lembretes'])
      alert("Sucesso");
    } 
    else {
      this.usuarioAutenticado = false;
      alert("Deu ruim");
    }
  }
}
