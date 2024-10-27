rows = int(input("Enter number of rows: "))

for i in range(rows):
    for j in range(1, 2*i + 2, 2):
        print(j, end=' ')
    print()