import { Array } from '../array';

describe('Array', () => {
    let arr: Array<number>;

    beforeEach(() => {
        // Inicializa um novo array antes de cada teste
        arr = new Array<number>();
    });

    test('deve adicionar elementos ao array', () => {
        // Adiciona elementos ao array
        arr.push(1);
        arr.push(2);
        arr.push(3);

        // Verifica o tamanho do array e os valores dos elementos
        expect(arr.size()).toBe(3);
        expect(arr.get(0)).toBe(1);
        expect(arr.get(1)).toBe(2);
        expect(arr.get(2)).toBe(3);
    });

    test('deve remover elementos do final do array', () => {
        // Adiciona elementos ao array
        arr.push(1);
        arr.push(2);
        arr.push(3);

        // Remove e verifica o último elemento
        expect(arr.pop()).toBe(3);
        expect(arr.size()).toBe(2);
        expect(arr.pop()).toBe(2);
        expect(arr.size()).toBe(1);
        expect(arr.pop()).toBe(1);
        expect(arr.size()).toBe(0);
        expect(arr.pop()).toBeUndefined(); // Verifica se retorna undefined quando o array está vazio
    });

    test('deve acessar elementos pelo índice', () => {
        // Adiciona elementos ao array
        arr.push(1);
        arr.push(2);
        arr.push(3);

        // Verifica o acesso aos elementos pelo índice
        expect(arr.get(0)).toBe(1);
        expect(arr.get(1)).toBe(2);
        expect(arr.get(2)).toBe(3);
        expect(arr.get(3)).toBeUndefined(); // Verifica se retorna undefined para índices fora do intervalo
    });

    test('deve remover um elemento em um índice específico', () => {
        // Adiciona elementos ao array
        arr.push(1);
        arr.push(2);
        arr.push(3);

        // Remove e verifica o elemento no índice especificado
        expect(arr.removeAt(1)).toBe(2);
        expect(arr.size()).toBe(2);
        expect(arr.get(1)).toBe(3);

        expect(arr.removeAt(0)).toBe(1);
        expect(arr.size()).toBe(1);
        expect(arr.get(0)).toBe(3);

        expect(arr.removeAt(0)).toBe(3);
        expect(arr.size()).toBe(0);
        expect(arr.removeAt(0)).toBeUndefined(); // Verifica se retorna undefined quando o índice está fora do intervalo
    });

    test('deve percorrer o array e executar uma função em cada elemento', () => {
        const callback = jest.fn(); // Cria um mock de função para verificar as chamadas
        arr.push(1);
        arr.push(2);
        arr.push(3);

        // Percorre o array e executa o callback
        arr.traverse(callback);

        // Verifica se o callback foi chamado o número correto de vezes e com os parâmetros corretos
        expect(callback).toHaveBeenCalledTimes(3);
        expect(callback).toHaveBeenNthCalledWith(1, 1, 0);
        expect(callback).toHaveBeenNthCalledWith(2, 2, 1);
        expect(callback).toHaveBeenNthCalledWith(3, 3, 2);
    });
});
