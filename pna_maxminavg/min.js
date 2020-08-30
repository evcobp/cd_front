    //min value
    min(node) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        currentNode = this.head;
        while (currentNode) {
            console.log('${currentNode.value}');
            currentNode = currentNode.next;
                return currentNode.next.value.min;
        }
}