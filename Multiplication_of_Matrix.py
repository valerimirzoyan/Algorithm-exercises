import random

def get_matrix(rows, cols):
    matrix = []
    for i in range(rows):
        row = [random.randint(0, 10) for j in range(cols)]
        matrix.append(row)
    return matrix

def print_matrix(matrix):
    for row in matrix:
        print(" ".join(map(str, row)))

def scalar_multiply(matrix, k):
    result = []
    for row in matrix:
        result_row = [element * k for element in row]
        result.append(result_row)
    return result

def main():
    rows = int(input("Enter the number of rows: "))
    cols = int(input("Enter the number of columns: "))
    k = int(input("Enter the scalar value k: "))

    matrix = get_matrix(rows, cols)

    print("Original Matrix:")
    print_matrix(matrix)

    result_matrix = scalar_multiply(matrix, k)

    print(f"Matrix after scalar multiplication by {k}:")
    print_matrix(result_matrix)

if __name__ == "__main__":
    main()
