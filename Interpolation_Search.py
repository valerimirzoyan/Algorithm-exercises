def interpolation_search(arr, x):
    low = 0
    high = len(arr) - 1

    while low <= high and x >= arr[low] and x <= arr[high]:
        if low == high:
            if arr[low] == x:
                return low
            return -1

        pos = low + int(((float(high - low) / (arr[high] - arr[low])) * (x - arr[low])))

        if arr[pos] == x:
            return pos

        if arr[pos] < x:
            low = pos + 1
        else:
            high = pos - 1

    return -1

def main():
    array = list(map(int, input("Enter the elements of the array separated by spaces: ").split()))
    array.sort()
    print("Sorted array:", array)

    element = int(input("Enter the element you want to find the index of: "))
    index = interpolation_search(array, element)

    if index != -1:
        print(f"Element {element} is at index {index}.")
    else:
        print(f"Element {element} not found in the array.")

if __name__ == "__main__":
    main()