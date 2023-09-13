def first_function(*args):
    return args

def second_function(**kwargs):
    if kwargs.get('name'):
        return kwargs.get('name')
    return 'No hay parámetro name'


def third_function(*args, **kwargs):
    pass

def why_kwargs(name, age):
    return f'{name} the cat is {age} years old'


# print('1 - ', first_function(1, 2, 3))
# print('1 - ', second_function(1, 2, 3))
# print('2 - ', first_function(name="Raspas"))
print('2 - ', second_function(name="Raspas"))
# print('3 - ', second_function(nickname="Chillin"))
# print('4 - ', third_function(1, 2, 3, name="Raspas"))
# print('5 - ', why_kwargs("Raspas", 8))
# print('6 - ', why_kwargs(8, "Raspas"))
# print('7 - ', why_kwargs(age=8, name="Raspas"))
