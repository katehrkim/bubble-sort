def bubble_sort(numbers):
    swaps = 0
    index = 0
    while index + 1 < len(numbers):
        previous = numbers[index]
        current = numbers[index + 1]
        if previous > current:
            numbers[index] = current
            numbers[index + 1] = previous
            swaps += 1
            index = 0
        else:
            index = index + 1
    return numbers

sequence = [4, 3, 5, 0, 1]
print(bubble_sort(sequence))

# print(f"Final result: {result}")
# print(f"Swaps: {swaps}")
