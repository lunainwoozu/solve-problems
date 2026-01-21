a, b, c = map(int, input().split())

yon = 'NO'

for i in range(a, b + 1):
    if i % c == 0:
        yon = 'YES'
        break

print(yon)
