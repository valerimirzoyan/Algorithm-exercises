import random

def generate_matrix(size):
    return [[random.randint(1, 100) for _ in range(size)] for _ in range(size)]

def sum_middle_row_and_column(matrix):
    size = len(matrix)
    middle_index = size // 2

    middle_row_sum = sum(matrix[middle_index])
    middle_column_sum = sum(matrix[i][middle_index] for i in range(size))

    return middle_row_sum, middle_column_sum

def main():
    while True:
        try:
            size = int(input("Enter an odd number for the size of the matrix: "))
            if size % 2 == 1:
                break
            else:
                print("The number is not odd. Please enter an odd number.")
        except ValueError:
            print("Invalid input. Please enter a valid number.")
    
    matrix = generate_matrix(size)
    
    for row in matrix:
        print(row)
    
    middle_row_sum, middle_column_sum = sum_middle_row_and_column(matrix)
    print(f"Sum of middle row: {middle_row_sum}")
    print(f"Sum of middle column: {middle_column_sum}")

if __name__ == "__main__":
    main()