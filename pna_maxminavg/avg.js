    //min value
    avg(node) {
        newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        currentNode = this.head;
        while (currentNode) {
            console.log('${currentNode.value}');
            currentNode = currentNode.next;
                return currentNode.next.value.avg;
        }
}