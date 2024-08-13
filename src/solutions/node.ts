export class Node<T> {
  // Propriedade para armazenar os dados no nó
  data: T;
  
  // Propriedade para apontar para o próximo nó na lista ligada
  next: Node<T> | null;
  
  /**
   * Construtor para inicializar um novo nó com os dados fornecidos
   * @param data - Os dados a serem armazenados no nó
   */
  constructor(data: T) {
    // Atribuir os dados fornecidos à propriedade de dados do nó
    this.data = data;
    
    // Definir a propriedade next como null, pois o nó ainda não está conectado a outro nó
    this.next = null;
  }
}