class ListNode {
    constructor () {
        this.head = null;
    }
    copy(value) {
        newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        currentNode = this.head;
        var newList = currentNode.data.copy();
        currentNode.next = this.head;
            return newList;
    }
}