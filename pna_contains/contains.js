class SLL {
    // constructor, other methods, removed for brevity
     contains(value) {
        var currentNode = this.head;
        while(currentNode !== null) {
            if(value === currentNode.data) {
            return true;
         }
         currentNode = currentNode.next;
     }
     return false;
    }
 }
