# Tutorial-instalacao-Angular
Angular 

Pré-Requisitos
- Node.js – Versão 22.22.3 ou mais recente
- Editor de texto
- Terminal
- Ferramenta de Desenvolvimento

Passo a Passo de Instalação
- Instale o Angular CL
	-Abra um terminal e execute o comando: 
		- npm install -g @angular/cli
(Caso esteja usando o VSCode vá em Terminal->New terminal)

- Criar um novo projeto
	- No terminal execute o comando: 
		- ng new <project-name>
	- Você verá algumas opções de configuração para o seu projeto. Use as teclas de seta e Enter para navegar e selecionar as opções desejadas.

- Executar o projeto localmente
	- No terminal, mude para o novo projeto:
		- cd <project-name>
	- Execute o comando para iniciar o projeto:
		- npm start
	- Se tudo ocorrer bem vera uma mensagem parecida com essa:
		- Watch mode enabled. Watching for file changes...
		- Local:   http://localhost:4200/


Definindo um Componente
- Exemplo simplificado de um "UserProfile"
	@Component({
  selector: 'user-profile',
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `,
})
export class UserProfile {
  /* Your component code goes here */
}

O @Component decorator aceita opcionalmente um style property para qualquer CSS que queira aplicar ao modelo:
@Component({
  selector: 'user-profile',
  template: `
    <h1>User profile</h1>
    <p>This is the user profile page</p>
  `,
  styles: `
    h1 {
      font-size: 3em;
    }
  `,
})
export class UserProfile {
  /* Your component code goes here */
}


Separar HTML e CSS em arquivos separados
- Você pode definir o HTML e o CSS de um componente em arquivos separados usando `<component>` templateUrle `<css> styleUrl`

import {ProfilePhoto} from 'profile-photo.ts';

@Component({
  selector: 'user-profile',
  imports: [ProfilePhoto],
  template: `
    <h1>User profile</h1>
    <profile-photo />
    <p>This is the user profile page</p>
  `,
})
export class UserProfile {
  // Component behavior is defined in here
}


