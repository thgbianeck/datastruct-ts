export class Array<T> {
    private items: T[]; // Armazena os elementos do array
    private length: number; // Mantém o controle do tamanho do array

    constructor() {
        this.items = [];
        this.length = 0;
    }

    /**
     * Adiciona um elemento ao final do array.
     * @param element - O elemento a ser adicionado.
     */
    push(element: T): void {
        // Adiciona o elemento no índice atual de length e incrementa o length
        this.items[this.length] = element;
        this.length++;
    }

    /**
     * Remove e retorna o último elemento do array.
     * @returns O último elemento do array, ou undefined se o array estiver vazio.
     */
    pop(): T | undefined {
        // Se o array estiver vazio, retorna undefined
        if (this.length === 0) {
            return undefined;
        }

        // Obtém o último elemento do array
        const lastElement = this.items[this.length - 1];

        // Decrementa o length e ajusta o tamanho do array
        this.length--;
        this.items.length = this.length;

        // Retorna o último elemento removido
        return lastElement;
    }

    /**
     * Retorna o elemento em um índice específico.
     * @param index - O índice do elemento a ser retornado.
     * @returns O elemento no índice especificado, ou undefined se o índice estiver fora do intervalo.
     */
    get(index: number): T | undefined {
        // Verifica se o índice é válido
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        // Retorna o elemento na posição especificada
        return this.items[index];
    }

    /**
     * Remove um elemento em um índice específico.
     * @param index - O índice do elemento a ser removido.
     * @returns O elemento removido, ou undefined se o índice estiver fora do intervalo.
     */
    removeAt(index: number): T | undefined {
        // Verifica se o índice é válido
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        // Remove o elemento no índice especificado e ajusta os elementos subsequentes
        const element = this.items[index];
        this.items.splice(index, 1);

        // Decrementa o length
        this.length--;

        // Retorna o elemento removido
        return element;
    }

    /**
     * Retorna o tamanho do array.
     * @returns O número de elementos no array.
     */
    size(): number {
        // Retorna o número de elementos no array
        return this.length;
    }

    /**
     * Percorre o array e executa uma função callback em cada elemento.
     * @param callback - A função a ser executada para cada elemento do array.
     */
    traverse(callback: (element: T, index: number) => void): void {
        // Itera por cada elemento do array e executa o callback
        for (let i = 0; i < this.length; i++) {
            callback(this.items[i], i);
        }
    }
}
