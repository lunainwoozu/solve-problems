def solution(my_string):
    strlist = list(filter(str.isdigit, my_string))
    strlist.sort()
    return [int(i) for i in strlist]