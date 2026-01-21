result = True

for _ in range(1, 6):
    n = int(input())
    if n % 3 != 0:
        result = False
        break

if result:
    print(1)
else:
    print(0)