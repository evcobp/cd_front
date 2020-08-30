class ListNode {
    constructor () {
        this.head = null;
    }
    secondLastValue(value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        currentNode = this.head;
        currentNode.next = new Node(value);
        this.head = currentNode.next;
            return currentNode.next.next.value()
    }
}