removeBack() {
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.head.next = currentNode;
    var newList = currentNode.pop();
        return newList;
}