/*
-- Pregunta 1: ¿Qué imprime el siguiente código?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('facil', '¿Qué imprime el siguiente código?', 'a = 3\nb = 7\nc = 9\na = c % b\nb = a // b % c\nprint(a * b + c % a + b + c)', '25');

-- Pregunta 2: ¿Cuál es el resultado al evaluar en Python?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('facil', '¿Cuál es el resultado al evaluar en Python?', 'a = 8\nb = 4\nc = 2\nd = a // b % c ** c\nprint(d)', '0');

-- Pregunta 3: ¿Qué se imprime por pantalla?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('facil', '¿Qué se imprime por pantalla?', 'n = 15\nh = 5\nwhile n >= 1:\n  if n % 2 != 0:\n    h = h + n\n  n = n-1\nprint(h//3)', '20');

-- Pregunta 4: ¿Qué valor se muestra por pantalla?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('facil', '¿Qué valor se muestra por pantalla?', 'a = 8\nb = 9\nc = 12\nprint(a + b * c % 3)', '8');

-- Pregunta 5: ¿Cuál es la salida correcta?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('intermedia', '¿Cuál es la salida correcta?', 'x = 10\ny = 5\nz = x % y\nprint(z)', '0');

-- Pregunta 6: ¿Cuál es el resultado final?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('intermedia', '¿Cuál es el resultado final?', 'a = 5\nb = 3\nc = 2\nfor i in range(a):\n  for j in range(b):\n    c += i + j\nprint(c)', '21');

-- Pregunta 7: ¿Qué valor se muestra por pantalla?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('intermedia', '¿Qué valor se muestra por pantalla?', 'x = 3\ny = 5\nz = x * y + 2 ** x\nprint(z)', '23');

-- Pregunta 8: ¿Cuál es la suma de los elementos en la lista?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('intermedia', '¿Cuál es la suma de los elementos en la lista?', 'lista = [2, 4, 6, 8, 10]\nsuma = sum(lista)\nprint(suma)', '30');

-- Pregunta 10: ¿Cuál es el resultado de la función recursiva?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Cuál es el resultado de la función recursiva?', 'def factorial(n):\n  if n == 0 or n == 1:\n    return 1\n  else:\n    return n * factorial(n-1)\nprint(factorial(5))', '120');

-- Pregunta 11: ¿Cuál es el resultado de la expresión?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Cuál es el resultado de la expresión?', 'x = 2.5\ny = 3.7\nz = int((x * y) / (x - y))\nprint(z)', '6');

-- Pregunta 12: ¿Qué valor tiene la variable "total" al finalizar el código?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Qué valor tiene la variable "total" al finalizar el código?', 'def suma_recursiva(n):\n  if n == 1:\n    return 1\n  else:\n    return n + suma_recursiva(n-1)\ntotal = suma_recursiva(10)\nprint(total)', '55');

-- Pregunta 13: ¿Cuál es el resultado de la función lambda?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Cuál es el resultado de la función lambda?', 'func = lambda x: x if x <= 1 else x + func(x-1)\nresult = func(5)\nprint(result)', '15');

-- Pregunta 14: ¿Qué se imprime por pantalla?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Qué se imprime por pantalla?', 'x = 10\ny = 5\nwhile y > 0:\n  x = x / y\nprint(int(x))', '0');

-- Pregunta 15: ¿Cuál es el resultado de la operación bitwise?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Cuál es el resultado de la operación bitwise?', 'a = 15\nb = 6\nc = a ^ b\nprint(c)', '9');

-- Pregunta 16: ¿Qué imprime el siguiente código?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('facil', '¿Qué imprime el siguiente código?', 'x = 5\ny = 2\nz = (x + y) / y\nprint(int(z))', '3');

-- Pregunta 17: ¿Cuál es el resultado al evaluar en Python?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('facil', '¿Cuál es el resultado al evaluar en Python?', 'a = 5\nb = 2\nprint(a + b * a ** b)', '25');

-- Pregunta 18: ¿Qué se imprime por pantalla?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('facil', '¿Qué se imprime por pantalla?', 'n = 10\nh = 0\nwhile n >= 1:\n  h += n\n  n = n - 2\nprint(h)', '30');

-- Pregunta 19: ¿Cuál es la salida correcta?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('intermedia', '¿Cuál es la salida correcta?', 'x = 15\ny = 3\nz = x / y\nprint(int(z))', '5');

-- Pregunta 20: ¿Cuál es el resultado final?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('intermedia', '¿Cuál es el resultado final?', 'a = 7\nb = 3\nfor i in range(a):\n  b = b + 1\nprint(b)', '10');

-- Pregunta 21: ¿Qué valor se muestra por pantalla?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('intermedia', '¿Qué valor se muestra por pantalla?', 'x = 5\ny = 2\nz = x ** y\nprint(z)', '25');

-- Pregunta 22: ¿Cuál es el resultado de la función recursiva?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Cuál es el resultado de la función recursiva?', 'def fibonacci(n):\n  if n <= 0:\n    return 0\n  elif n == 1:\n    return 1\n  else:\n    return fibonacci(n-1) + fibonacci(n-2)\nprint(fibonacci(8))', '21');

-- Pregunta 23: ¿Cuál es el resultado de la expresión?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Cuál es el resultado de la expresión?', 'x = 6\ny = 2\nz = (x + y) // x\nprint(z)', '1');

-- Pregunta 24: ¿Qué valor tiene la variable "total" al finalizar el código?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Qué valor tiene la variable "total" al finalizar el código?', 'def suma_pares(n):\n  total = 0\n  for i in range(n+1):\n    if i % 2 == 0:\n      total += i\n  return total\nprint(suma_pares(10))', '30');

-- Pregunta 25: ¿Cuál es el resultado de la función lambda?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Cuál es el resultado de la función lambda?', 'func = lambda x: x ** 3 + 2 * x - 5\nresult = func(4)\nprint(result)', '37');

-- Pregunta 26: ¿Qué se imprime por pantalla?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Qué se imprime por pantalla?', 'x = 10\ny = 3\nwhile x > y:\n  x = x / y\nprint(int(x))', '1');

-- Pregunta 27: ¿Cuál es el resultado de la operación bitwise?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Cuál es el resultado de la operación bitwise?', 'a = 7\nb = 3\nc = a & b\nprint(c)', '3');

-- Pregunta 28: ¿Cuál es el resultado de la operación aritmética?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('facil', '¿Cuál es el resultado de la operación aritmética?', 'a = 10\nb = 5\nc = 2\nprint(a + b * c)', '20');

-- Pregunta 29: ¿Cuál es el valor de la variable "total"?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('facil', '¿Cuál es el valor de la variable "total"?', 'lista = [1, 2, 3, 4, 5]\ntotal = 0\nfor num in lista:\n  total += num\nprint(total)', '15');

-- Pregunta 30: ¿Cuánto es 2 elevado a la 5ta potencia?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('facil', '¿Cuánto es 2 elevado a la 5ta potencia?', 'potencia = 2 ** 5\nprint(potencia)', '32');

-- Pregunta 31: ¿Cuántos números pares hay en el rango del 1 al 20?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('intermedia', '¿Cuántos números pares hay en el rango del 1 al 20?', 'count = 0\nfor num in range(1, 21):\n  if num % 2 == 0:\n    count += 1\nprint(count)', '10');

-- Pregunta 32: ¿Cuál es el resultado de la siguiente operación?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('intermedia', '¿Cuál es el resultado de la siguiente operación?', 'resultado = (15 + 3) * 2 - 5\nprint(resultado)', '26');

-- Pregunta 33: ¿Cuántos elementos hay en la lista?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('intermedia', '¿Cuántos elementos hay en la lista?', 'lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\ncantidad = len(lista)\nprint(cantidad)', '10');

-- Pregunta 34: ¿Cuál es el resultado de la sucesión de Fibonacci en la posición 12?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Cuál es el resultado de la sucesión de Fibonacci en la posición 12?', 'def fibonacci(n):\n  if n <= 0:\n    return 0\n  elif n == 1:\n    return 1\n  else:\n    return fibonacci(n-1) + fibonacci(n-2)\nprint(fibonacci(12))', '144');

-- Pregunta 35: ¿Cuál es el resultado de la operación matemática?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Cuál es el resultado de la operación matemática?', 'a = 3\nb = 4\nresultado = (a + b) ** 2 / (b - a)\nprint(resultado)', '49');

-- Pregunta 36: ¿Cuál es el valor de la variable "total"?
INSERT INTO pruebas (dificultad_prueba, enunciado, codigo, respuesta)
VALUES ('dificil', '¿Cuál es el valor de la variable "total"?', 'def suma_impares(n):\n  total = 0\n  for i in range(1, n+1, 2):\n    total += i\n  return total\nprint(suma_impares(15))', '64');

 */
