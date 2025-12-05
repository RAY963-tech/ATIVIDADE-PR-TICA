    export class Stack<T> {
      private data: T[] = [];

      push(item: T): void {
        this.data.push(item);
      }

      pop(): T | undefined {
        if (this.isEmpty()) {
            console.log("A Pilha está vazia!");
            return undefined
        }
        return this.data.pop();
      }

      isEmpty(): boolean {
        return this.data.length === 0;
      }

      size(): number {
        return this.data.length;
      }
      printStack(): void {
        if (this.isEmpty()) {
            console.log("A Pilha está vazia!");
        } else {

        }
      }
  }
        
    