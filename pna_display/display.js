class SLL {
    constructor() {
        this.head = null;
    }
    display(node) {
        var currentNode = this.head;
        while(currentNode !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}   