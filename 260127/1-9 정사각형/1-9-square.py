n=int(input())
cnt=1

for _ in range(n):
    for _ in range(n):
        print(cnt, end="")
        if cnt==9:
            cnt-=8
        else:
            cnt+=1
    print()