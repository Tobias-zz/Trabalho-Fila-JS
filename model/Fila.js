class Fila {
  #inicio;
  #fim;
  #qtd;
  #elementos;

  constructor(tamanho = 10) {
    this.#inicio = 0;
    this.#fim = -1;
    this.#qtd = 0;
    this.#elementos = new Array(tamanho);
  }

  isFull() {
    return this.#qtd === this.#elementos.length;
  }

  isEmpty() {
    return this.#qtd === 0;
  }

  enqueue(elemento) {
    if (!this.isFull()) {
      if (this.#fim === this.#elementos.length - 1)
        // se o fim esta na ultima posicao
        this.#fim = 0;
      else this.#fim++;
      this.#elementos[this.#fim] = elemento;
      this.#qtd++;
      console.log(
        `enqueue: início=${this.#inicio}, fim=${this.#fim}, qtd=${this.#qtd}`,
      );
      console.log(this.#elementos);
      return true;
    }
    return false;
  }

  dequeue() {
    if (!this.isEmpty()) {
      let removido = this.#elementos[this.#inicio];
      if (this.#inicio === this.#elementos.length - 1) this.#inicio = 0;
      else this.#inicio++;
      this.#qtd--;
      console.log(`Removido:${removido}`);
      console.log(
        `dequeue: início=${this.#inicio}, fim=${this.#fim}, qtd=${this.#qtd}`,
      );
      console.log(this.#elementos);
      return removido;
    }
    return null;
  }

  first() {
    if (!this.isEmpty()) return this.#elementos[this.#inicio];
    else return null;
  }
  //last
  toString() {
    let resultado = "";
    let i = this.#inicio;
    for (let cont = 0; cont < this.#qtd; cont++) {
      resultado += `${this.#elementos[i]} | `;
      if (i === this.#elementos.length - 1) i = 0;
      else i++;
    }
    return resultado;
  }

  [Symbol.iterator]() {
    let count = 0;
    let i = this.#inicio;
    const qtd = this.#qtd;
    const elementos = this.#elementos;
    const tamanho = elementos.length;
    return {
      next() {
        if (count < qtd) {
          const value = elementos[i];
          i = (i + 1) % tamanho;
          count++;
          return { value, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
} // fim classe