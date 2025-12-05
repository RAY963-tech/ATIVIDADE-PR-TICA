export class Queue<T> {
    private data: T[] = [];

    enqueue(item: T): void {
        this.data.push(item);
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            console.log("A fila está vazia!");
            return undefined;
        }
        return this.data.shift();
    }

    isEmpty(): boolean {
        return this.data.length === 0;
    }

    count(): number {
        return this.data.length;
    }

    printQueue(): void {
        if (this.isEmpty()) {
            console.log("A fila está vazia!");
        } else {
            this.data.forEach(element => console.log(element));
        }
     }
 }
