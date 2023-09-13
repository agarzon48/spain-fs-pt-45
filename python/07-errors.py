# Captura de todos los errores
# try:
#     print(a)
# except:
#     print('Something went wrong.')

# Captura de errores por tipo
# try:
#     print(a)
# except (IOError, IndexError):
#     print('Something went wrong.')

# Lógica de error por tipo
# try:
#     print(a)
# except IOError:
#     print('Something went wrong.')
# except IndexError:
#     print('Something went wrong.')

# Tareas de limpieza
# try:
#     print(a)
# except IOError as ex:
#     print('Something went wrong.')
#     print(ex)
# except IndexError as ex:
#     print('Something went wrong.')
#     print(ex)
# finally:
#     print('This is executed no matter what.')
