// Importa a classe LinkedList do arquivo linked-list.ts
import { LinkedList } from "../linked-list";

// Descreve o comportamento da classe LinkedList
describe('LinkedList', () => {
  // Declara uma variável list do tipo LinkedList<number> que será usada em todos os testes
  let list: LinkedList<number>;

  // Antes de cada teste, cria uma nova instância de LinkedList<number>
  beforeEach(() => {
    list = new LinkedList<number>();
  });

  // Testa se o método insertAtBeginning insere corretamente um elemento no início da lista
  test('Deve inserir no início da lista', () => {
    // Insere o elemento 1 no início da lista
    list.insertAtBeginning(1);
    // Insere o elemento 2 no início da lista
    list.insertAtBeginning(2);
    // Insere o elemento 3 no início da lista
    list.insertAtBeginning(3);

    // Verifica se a lista está na ordem correta após a inserção
    expect(list.traverse()).toEqual([3, 2, 1]);
  });

  // Testa se o método insertAtEnd insere corretamente um elemento no final da lista
  test('Deve inserir no final da lista', () => {
    // Insere o elemento 1 no final da lista
    list.insertAtEnd(1);
    // Insere o elemento 2 no final da lista
    list.insertAtEnd(2);
    // Insere o elemento 3 no final da lista
    list.insertAtEnd(3);

    // Verifica se a lista está na ordem correta após a inserção
    expect(list.traverse()).toEqual([1, 2, 3]);
  });

  // Testa se o método removeFromBeginning remove corretamente o primeiro elemento da lista
  test('Deve remover do início da lista', () => {
    // Insere o elemento 1 no final da lista
    list.insertAtEnd(1);
    // Insere o elemento 2 no final da lista
    list.insertAtEnd(2);
    // Insere o elemento 3 no final da lista
    list.insertAtEnd(3);

    // Remove o primeiro elemento da lista
    list.removeFromBeginning();
    // Verifica se a lista está na ordem correta após a remoção
    expect(list.traverse()).toEqual([2, 3]);

    // Remove o primeiro elemento da lista novamente
    list.removeFromBeginning();
    // Verifica se a lista está na ordem correta após a remoção
    expect(list.traverse()).toEqual([3]);
  });

  // Testa se o método remove remove corretamente um elemento específico da lista
  test('Deve remover um elemento específico da lista', () => {
    // Insere o elemento 1 no final da lista
    list.insertAtEnd(1);
    // Insere o elemento 2 no final da lista
    list.insertAtEnd(2);
    // Insere o elemento 3 no final da lista
    list.insertAtEnd(3);

    // Remove o elemento 2 da lista
    list.remove(2);
    // Verifica se a lista está na ordem correta após a remoção
    expect(list.traverse()).toEqual([1, 3]);

    // Remove o elemento 1 da lista
    list.remove(1);
    // Verifica se a lista está na ordem correta após a remoção
    expect(list.traverse()).toEqual([3]);

    // Remove o elemento 3 da lista
    list.remove(3);
    // Verifica se a lista está na ordem correta após a remoção
    expect(list.traverse()).toEqual([]);
  });

  // Testa se o método traverse retorna uma lista vazia quando a lista está vazia
  test('Deve retornar uma lista vazia quando a lista está vazia', () => {
    // Verifica se a lista está vazia
    expect(list.traverse()).toEqual([]);
  });
});