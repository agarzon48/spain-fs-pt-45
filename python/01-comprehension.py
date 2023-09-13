# List comprehension

example_list = [1, 2, 3, 4]

# Forma básica (útil como map):
# [result for target in list]

doubled_list = [number * 2 for number in example_list]
print(doubled_list)

# Con condicional (útil como filter o map + filter)
# [result for target in list if condition]

odd_list = [number for number in example_list if number % 2 != 0]
print(odd_list)

# Dict comprehension

example_dict = {
    "name": "Raspas",
    "age": 8
}

dict_comprehension = {key:value for (key, value) in example_dict.items()}
print(dict_comprehension)