import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Minhas Tarefas';
  public form: FormGroup;
  public mode:string='list';

  /**
   *
   */
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [
        '',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(60),
          Validators.required,
        ]),
      ],
    });
    this.carregar_dados();
    // this.todos.push(new Todo(1, 'Passear com o cachorro', false));
    // this.todos.push(new Todo(2, 'Ir ao Mercado', false));
    // this.todos.push(new Todo(3, 'Estudar angular', false));
  }

  add() {
    const titulo = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, titulo, false));
    this.persistir_dados();
    this.clear();
    this.changeMode('list');
  }

  changeMode(modo:string){
   this.mode=modo;
  }

  clear() {
    this.form.reset();
  }

  remover(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    this.persistir_dados();
  }

  concluir(todo: Todo) {
    todo.Done = true;
    this.persistir_dados();
  }

  desfazer(todo: Todo) {
    todo.Done = false;
    this.persistir_dados();
  }

  persistir_dados() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data);
  }

  carregar_dados() {
    const data = localStorage.getItem('todos');
    if (data!=null){
      this.todos = JSON.parse(data!);
    } else{
      this.todos=[];
    }

  }
}
