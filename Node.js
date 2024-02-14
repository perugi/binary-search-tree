class Node {
  #data;

  #left;

  #right;

  constructor(data) {
    this.#data = data;
    this.#left = null;
    this.#right = null;
  }

  set data(data) {
    this.#data = data;
  }

  get data() {
    return this.#data;
  }

  set left(node) {
    this.#left = node;
  }

  get left() {
    return this.#left;
  }

  set right(node) {
    this.#right = node;
  }

  get right() {
    return this.#right;
  }
}

module.exports = Node;
