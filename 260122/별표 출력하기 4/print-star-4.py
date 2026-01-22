n = int(input())
cnt = n

for i in range(1, n * 2):
    for _ in range(cnt):
        print("*", end=" ")
    print()

    if i >= n:
        cnt += 1
    else:
        cnt -= 1