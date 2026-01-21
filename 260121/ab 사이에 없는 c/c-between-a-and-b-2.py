a, b, c = map(int, input().split())
result = True

for i in range(a, b+1):
    if i%c==0:
        result = False
        break

if result:
    print('YES')
else:
    print('NO')