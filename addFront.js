//add Front
class SLL {
    constructor() {
        this.head = null;
    }
    addFront(value) {
        var newNode = newNode(value);
        this.head.next = this.head;
        this.head = newNode;
            return this.head;
    }
}
var myList = new SLL();
myList.shift(10);
myList.shift(9);