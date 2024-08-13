import { Node } from "./node";

// Exporta a classe LinkedList para que possa ser utilizada em outros arquivos
export class LinkedList<T> {
  // Propriedade que armazena a cabeça da lista ligada (o primeiro nó)
  head: Node<T> | null;

  // Construtor que inicializa a lista ligada com uma cabeça vazia
  constructor() {
    // Inicializa a cabeça da lista ligada como null
    this.head = null;
  }

  // Método que insere um novo nó no início da lista ligada
  insertAtBeginning(data: T): void {
    // Cria um novo nó com os dados fornecidos
    const newNode = new Node(data);
    // Faz com que o novo nó aponte para a cabeça atual da lista ligada
    newNode.next = this.head;
    // Atualiza a cabeça da lista ligada para o novo nó
    this.head = newNode;
  }

  // Método que insere um novo nó no final da lista ligada
  insertAtEnd(data: T): void {
    // Cria um novo nó com os dados fornecidos
    const newNode = new Node(data);
    // Verifica se a lista ligada está vazia
    if (this.head === null) {
      // Se estiver vazia, o novo nó se torna a cabeça da lista ligada
      this.head = newNode;
    } else {
      // Se não estiver vazia, percorre a lista ligada até encontrar o último nó
      let current = this.head;
      while (current.next !== null) {
        // Move para o próximo nó
        current = current.next;
      }
      // Faz com que o último nó aponte para o novo nó
      current.next = newNode;
    }
  }

  // Método que remove o primeiro nó da lista ligada
  removeFromBeginning(): void {
    // Verifica se a lista ligada não está vazia
    if (this.head !== null) {
      // Atualiza a cabeça da lista ligada para o próximo nó
      this.head = this.head.next;
    }
  }

  // Método que remove o primeiro nó com os dados fornecidos da lista ligada
  remove(data: T): void {
    // Verifica se a lista ligada está vazia
    if (this.head === null) {
      // Se estiver vazia, não faz nada
      return;
    }
    // Verifica se o primeiro nó é o nó que deve ser removido
    if (this.head.data === data) {
      // Atualiza a cabeça da lista ligada para o próximo nó
      this.head = this.head.next;
      return;
    }
    // Percorre a lista ligada até encontrar o nó que deve ser removido
    let current = this.head;
    while (current.next !== null) {
      // Verifica se o próximo nó é o nó que deve ser removido
      if (current.next.data === data) {
        // Faz com que o nó anterior aponte para o nó seguinte ao nó que deve ser removido
        current.next = current.next.next;
        return;
      }
      // Move para o próximo nó
      current = current.next;
    }
  }

  // Método que retorna uma array com todos os elementos da lista ligada
  traverse(): T[] {
    // Cria uma array vazia para armazenar os elementos
    const elements: T[] = [];
    // Percorre a lista ligada até encontrar o último nó
    let current = this.head;
    while (current !== null) {
      // Adiciona o elemento do nó atual à array
      elements.push(current.data);
      // Move para o próximo nó
      current = current.next;
    }
    // Retorna a array com os elementos
    return elements;
  }
}