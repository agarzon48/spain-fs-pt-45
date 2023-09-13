example_list = [1, 2, 3, 4]

# Mismas variables que elementos en la lista...
(first, second, third, fourth) = example_list

print(first)
print(fourth)

# ...salvo que utilicemos * (similar a spread)
(first, *rest) = example_list

print(first)
print(rest)
