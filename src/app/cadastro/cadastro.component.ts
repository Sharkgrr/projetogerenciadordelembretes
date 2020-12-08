import { Component, OnInit } from '@angular/core';
import { AuthService } from '.././login/auth.service';
import { Campos } from './campos';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  private campos: Campos = new Campos();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerCadastro() {
    this.authService.fazerCadastro(this.campos);
  }
}
