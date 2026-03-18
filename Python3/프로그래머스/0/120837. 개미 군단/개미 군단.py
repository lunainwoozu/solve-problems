def solution(hp):
    ants = [5,3,1]
    answer = 0
    answer += hp // ants[0]
    hp1 = hp % ants[0]
    answer += hp1 // ants[1]
    hp2 = hp1 % ants[1]
    answer += hp2 // ants[2]
    return answer
    