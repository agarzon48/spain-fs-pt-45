name = input('Cómo te llamas?\n')
file = open('name.txt', mode='w')
file.write(name)
file.close()
file = open('name.txt', mode='r')
print(file.read())