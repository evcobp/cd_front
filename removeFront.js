class SLL {
    constructor() {
        this.head = null
    }
    removeFront(value) {
        var newNode = newNode(value);
        newNode.shift();
        newNode.next = this.head;
        this.head = newNode;
    }
    unshift(value) {
        newNode.unshift();
        newNode.next = this.head;
        if(this.head) {
            this.head = this.head.next;
            return this.head;
        }
        return null;
}
var myList = new SLL();
myList.shift(10);
myList.shift(9);
