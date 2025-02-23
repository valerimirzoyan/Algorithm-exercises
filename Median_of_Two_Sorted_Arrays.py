import random

def generate_array(length):
    return [random.randint(1, 100) for _ in range(length)]

def find_median_sorted_arrays(len_A, len_B):
    A = generate_array(len_A)
    B = generate_array(len_B)
    print("Array A:", A) 
    print("Array B:", B)
    
    merged = sorted(A + B)
    print("Merged array:", merged)
    n = len(merged)
    
    if n % 2 == 1:
        return merged[n // 2]
    else:
        return (merged[n // 2 - 1] + merged[n // 2]) / 2

len_A = int(input("Enter the length of array A: "))
len_B = int(input("Enter the length of array B: "))

print("The median is:", find_median_sorted_arrays(len_A, len_B))
