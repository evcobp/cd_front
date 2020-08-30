addBack(value) {
    var newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    var twoNode = new Node(4);
    var currentNode = this.head;
    var lastNode = currentNode.next.push(twoNode);
    lastNode = this.head;
}