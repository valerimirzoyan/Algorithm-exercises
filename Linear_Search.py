def linear_search(arr, target):
    for index, value in enumerate(arr):
        if value == target:
            return index
    return 1

if __name__ == "__main__":
    array = list(map(int, input("Enter the elements of the array separated by spaces: ").split()))
    target = int(input("Enter the target value to search for: "))
    
    print("Array:", array)
    
    result = linear_search(array, target)
    if result != 1:
        print(f"Target found at index {result}")
    else:
        print("Target not found in the array")
