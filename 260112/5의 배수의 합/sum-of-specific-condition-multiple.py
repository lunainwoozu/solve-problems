a, b = map(int, input().split())
sum = 0

Max, Min = max(a,b), min(a,b)

for i in range(Min, Max + 1):
    if i % 5 == 0:
        sum += i

print(sum)