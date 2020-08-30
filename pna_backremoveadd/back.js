class ListNode {
    back(value) {
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.head.next = currentNode;
    var nValue = currentNode.pop();
        return nValue.value;
    }
}