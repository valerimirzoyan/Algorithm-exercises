def print_matrix_zigzag_with_size(rows, cols):

    if rows <= 0 or cols <= 0:
        return

    matrix = [[0] * cols for _ in range(rows)]
    value = 1
    for i in range(rows):
        for j in range(cols):
            matrix[i][j] = value
            value += 1

    print("Created Matrix:")
    for row in matrix:
        print(row)

    result = []
    for i in range(rows + cols - 1):
        if i % 2 == 0:  # Even diagonal (downwards)
            row = min(i, rows - 1)
            col = i - row
            while row >= 0 and col < cols:
                result.append(matrix[row][col])
                row -= 1
                col += 1
        else:  # Odd diagonal (upwards)
            col = min(i, cols - 1)
            row = i - col
            while col >= 0 and row < rows:
                result.append(matrix[row][col])
                row += 1
                col -= 1

    return result

rows = int(input("Enter the number of rows: "))
cols = int(input("Enter the number of columns: "))

zigzag_output = print_matrix_zigzag_with_size(rows, cols)
print("\nZig-zag Output:")
print(*zigzag_output)