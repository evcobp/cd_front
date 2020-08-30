class ListNode {
    constructor () {
        this.head = null;
    }
    removeSelf() {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        
        currentNode = this.head;
        this.head.remove();
        currentNode.next = this.head;
        }
    
}