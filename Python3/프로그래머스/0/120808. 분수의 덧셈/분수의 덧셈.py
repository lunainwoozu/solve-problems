def solution(numer1, denom1, numer2, denom2):
    num1 = numer1 * denom2 + numer2 * denom1
    num2 = denom1 * denom2
    
    gcd = 1
    for i in range(1, min(num1, num2) + 1):
        if num1 % i == 0 and num2 % i == 0:
            gcd = i
    
    answer = [num1 // gcd, num2 // gcd]
    return answer