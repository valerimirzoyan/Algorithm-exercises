def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

def main():
    arr = list(map(int, input("Enter the elements of the array separated by spaces: ").split()))
    bubble_sort(arr)
    print("Sorted array:", arr)
    target = int(input("Enter the target element to search for: "))
    index = binary_search(arr, target)
    if index != -1:
        print(f"Element found at index {index}")
    else:
        print("Element not found in the array")

if __name__ == "__main__":
    main()