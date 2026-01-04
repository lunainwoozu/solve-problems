a, b, c = map(int, input().split())

if a < c:
    if b < c:
        print(c)
    else:
        print(b)
elif a < b:
    print(b)
else:
    print(a)