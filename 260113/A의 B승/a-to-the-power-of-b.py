a, b = map(int, input().split())
prod = a

for _ in range(1, b):
    if b == 0:
        break
    prod = prod * a

print(prod)