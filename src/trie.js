class TrieNode {
  constructor() {
    this.children = new Array(26);
    this.wordCount = 0;
  }
}

function insertKey(root, key) {
  let curr = root;
  for (let i = 0; i < key.length; i += 1) {
    if (curr.childNode[key[i] - 'a'] === null) {
      let newNode = new TrieNode();
      curr.childNode[key[i] - 'a'] = newNode;
    }
    curr = currNode.childNode[key[i] - 'a'];
  }
  curr.wordCount += 1;
}

let trie = new TrieNode(null, 0);
insertKey(trie, 'asdf');
