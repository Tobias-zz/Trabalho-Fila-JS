class Atendimento {
    #nome;
    #cpf;
    #data;
    #hora;

    constructor(nome, cpf, data, hora) {
        this.#nome = nome;
        this.#cpf = cpf;
        this.#data = data;
        this.#hora = hora;
    }


  get nome() {
    return this.#nome;
  }
  get cpf() {
    return this.#cpf;
  }
  get data() {
    return this.#data;
  }
  get hora() {
    return this.#hora;
  }


  set nome(nome) {
    this.#nome = nome;
  }
  set cpf(cpf) {
    this.#cpf = cpf;
  }
  set data(data) {
    this.#data = data;
  }
  set hora(hora) {
    this.#hora = hora;
  }

    toString() {
        return `${this.#nome} | CPF: ${this.#cpf} | Data: ${this.#data} | Hora: ${this.#hora}`;
    }
}