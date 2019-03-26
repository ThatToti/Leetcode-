var Trie = function () {
    this.end = false
    this.children = {}
}

Trie.prototype.insert = function (word) {

    var node = this

    for (let i = 0; i < word.length; i++) {

        const char = word.charAt(i)

        if (!node.children[char]) {

            node.children[char] = new Trie()
        }

        node = node.children[char]
    }

    node.end = true
}

Trie.prototype.startsWith = function (word) {

    var node = this

    for (let i = 0; i < word.length; i++) {

        const char = word.charAt(i)

        if (node.children[char]) {

            node = node.children[char]
        } else {
            return false
        }
    }

    return true
}

Trie.prototype.search = function (word) {

    var node = this

    for (let i = 0; i < word.length; i++) {

        const char = word.charAt(i)

        if (node.children[char]) {

            node = node.children[char]
        } else {
            return false
        }
    }

    return node.end
}

