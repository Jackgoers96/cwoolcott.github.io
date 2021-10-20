// create the Stack class with two methods to remove and add an element
class Stack {
    constructor(container = []) {
        this.container = container;
        //this.container = container ? container : [];
    }

    addToStack(el) {
        return this.container.push(el);
    }

    removeFromStack() {
        return this.container.pop();
    }

}


module.exports = Stack;
