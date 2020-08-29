class SLL {
    constructor() {
        this.head = null;
    }
    front() {
        var newNode = newNode(value);
        newNode.shift(value);
        newNode.next = this.head;
        this.head = newNode;
        if (this.head){
            return this.head.value;
        }
        return null;

    }
}