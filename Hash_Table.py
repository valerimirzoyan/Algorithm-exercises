class HashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [None] * size
    
    def hash_function(self, key):
        return hash(key) % self.size
    
    def insert(self, key, value):
        index = self.hash_function(key)
        if self.table[index] is None:
            self.table[index] = Node(key, value)
        else:
            current = self.table[index]
            while current is not None:
                if current.key == key:
                    current.value = value
                    return
                if current.next is None:
                    break
                current = current.next
            current.next = Node(key, value)
    
    def search(self, key):
        index = self.hash_function(key)
        if self.table[index] is not None:
            current = self.table[index]
            while current is not None:
                if current.key == key:
                    return current.value
                current = current.next
        raise KeyError(f"Key '{key}' not found in the hash table")
        return None
    
    def delete(self, key):
        index = self.hash_function(key)
        if self.table[index] is not None:
            current = self.table[index]
            prev = None
            while current is not None:
                if current.key == key:
                    if prev is None:
                        self.table[index] = current.next
                    else:
                        prev.next = current.next
                    return True
                prev = current
                current = current.next
        return False

    def __str__(self):
        return str(self.table)

class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.next = None

hash_table = HashTable()

hash_table.insert("name", "Alice")
hash_table.insert("age", 25)
hash_table.insert("city", "New York")

key = input("Enter the key: ")
try:
    value = hash_table.search(key)
    print(f"The value for '{key}' is: {value}")
except KeyError as e:
    print(e)

print(hash_table)
