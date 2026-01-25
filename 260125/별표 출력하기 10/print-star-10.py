n = int(input())

odd = 0
even = 1

for i in range(0, n*2):
    if i%2!=0:
        for _ in range(n-odd):
            print("*", end=" ")
        odd += 1
    else:
        for _ in range(even):
            print("*", end=" ")
        even += 1
    print()