c3 = 0
c5 = 0

for _ in range(10):
    num = int(input())
    if num % 3 == 0 and num % 5 == 0:
        c3 += 1
        c5 += 1
    elif num % 3 == 0:
        c3 += 1
    elif num % 5 == 0:
        c5 += 1

print(c3, c5)