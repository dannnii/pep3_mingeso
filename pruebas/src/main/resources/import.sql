INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (1, 'facil', '¿Qué imprime el siguiente código?', 'a = 3\nb = 7\nc = 9\na = c % b\nb = a // b % c\nprint(a * b + c % a + b + c)', '25');

-- Pregunta 2: ¿Cual es el resultado al evaluar en Python?
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (2, 'facil', '¿Cual es el resultado al evaluar en Python?', 'a = 8\nb = 4\nc = 2\nd = a // b % c ** c\nprint(d)', '0');

-- Pregunta 3: ¿Qué se imprime por pantalla?
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (3, 'facil', '¿Qué se imprime por pantalla?', 'n = 15\nh = 5\nwhile n >=1:\n  if n % 2 != 0:\n        h = h + n\n  n = n-1\nprint(h//3)', '20');

-- Pregunta 4: ¿Qué valor se muestra por pantalla?
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (4, 'facil', '¿Qué valor se muestra por pantalla?', 'a = 8\nb = 9\nc = 12\nprint(a + b * c % 3)', '8');

-- Insertar datos en la tabla "pruebas" con dificultad intermedia
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (5, 'intermedia', '¿Cuál es la salida correcta?', 'x = 10\ny = 5\nz = x % y\nprint(z)', '0');

-- Pregunta 6: ¿Cuál es el resultado final?
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (6, 'intermedia', '¿Cuál es el resultado final?', 'a = 5\nb = 3\nc = 2\nfor i in range(a):\n  for j in range(b):\n    c += i + j\nprint(c)', '21');

-- Pregunta 7: ¿Qué valor se muestra por pantalla?
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (7, 'intermedia', '¿Qué valor se muestra por pantalla?', 'x = 3\ny = 5\nz = x * y + 2 ** x\nprint(z)', '98');

-- Pregunta 8: ¿Cuál es la suma de los elementos en la lista?
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (8, 'intermedia', '¿Cuál es la suma de los elementos en la lista?', 'lista = [2, 4, 6, 8, 10]\nsuma = sum(lista)\nprint(suma)', '30');

-- Pregunta 9: ¿Qué resultado imprime el siguiente código?
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (9, 'intermedia', '¿Qué resultado imprime el siguiente código?', 'x = 10\nif x > 5:\n  print("Mayor que 5")\nelse:\n  print("Menor o igual que 5")', '0');

-- Insertar datos en la tabla "pruebas" con dificultad difícil

-- Pregunta 10: ¿Cuál es el resultado de la función recursiva?
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (10, 'dificil', '¿Cuál es el resultado de la función recursiva?', 'def factorial(n):\n  if n == 0 or n == 1:\n    return 1\n  else:\n    return n * factorial(n-1)\nprint(factorial(5))', '120');

-- Pregunta 11: ¿Cuál es el resultado de la expresión?
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (11, 'dificil', '¿Cuál es el resultado de la expresión?', 'x = 2.5\ny = 3.7\nz = int((x * y) / (x - y))\nprint(z)', '6');

-- Pregunta 12: ¿Qué valor tiene la variable "total" al finalizar el código?
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (12, 'dificil', '¿Qué valor tiene la variable "total" al finalizar el código?', 'def suma_recursiva(n):\n  if n == 1:\n    return 1\n  else:\n    return n + suma_recursiva(n-1)\ntotal = suma_recursiva(10)\nprint(total)', '55');

-- Pregunta 13: ¿Cuál es el resultado de la función lambda?
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (13, 'dificil', '¿Cuál es el resultado de la función lambda?', 'func = lambda x: x if x <= 1 else x + func(x-1)\nresult = func(5)\nprint(result)', '15');

-- Pregunta 14: ¿Qué se imprime por pantalla?
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (14, 'dificil', '¿Qué se imprime por pantalla?', 'x = 10\ny = 5\nwhile y > 0:\n  x = x / y\n  y = y - 1\nprint(int(x))', '0');

-- Pregunta 15: ¿Cuál es el resultado de la operación bitwise?
INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (15, 'dificil', '¿Cuál es el resultado de la operación bitwise?', 'a = 15\nb = 6\nc = a ^ b\nprint(c)', '9');


INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (16, 'facil', '¿Qué imprime el siguiente código?', 'x = 5\ny = 2\nz = (x + y) / y\nprint(int(z))', '3');


INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (17, 'facil', '¿Cuál es el resultado al evaluar en Python?', 'a = 5\nb = 2\nprint(a + b * a ** b)', '25');


INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (18, 'facil', '¿Qué se imprime por pantalla?', 'n = 10\nh = 0\nwhile n >= 1:\n  h += n\n  n = n - 2\nprint(h)', '30');


INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (19, 'intermedia', '¿Cuál es la salida correcta?', 'x = 15\ny = 3\nz = x / y\nprint(int(z))', '5');


INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (20, 'intermedia', '¿Cuál es el resultado final?', 'a = 7\nb = 3\nfor i in range(a):\n  b = b + 1\nprint(b)', '10');

INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (21, 'intermedia', '¿Qué valor se muestra por pantalla?', 'x = 5\ny = 2\nz = x ** y\nprint(z)', '25');


INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (22, 'dificil', '¿Cuál es el resultado de la función recursiva?', 'def fibonacci(n):\n  if n <= 0:\n    return 0\n  elif n == 1:\n    return 1\n  else:\n    return fibonacci(n-1) + fibonacci(n-2)\nprint(fibonacci(8))', '21');

INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (23, 'dificil', '¿Cuál es el resultado de la expresión?', 'x = 6\ny = 2\nz = (x + y) // x\nprint(z)', '1');

INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (24, 'dificil', '¿Qué valor tiene la variable "total" al finalizar el código?', 'def suma_pares(n):\n  total = 0\n  for i in range(n+1):\n    if i % 2 == 0:\n      total += i\n  return total\nprint(suma_pares(10))', '30');

INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (25, 'dificil', '¿Cuál es el resultado de la función lambda?', 'func = lambda x: x ** 3 + 2 * x - 5\nresult = func(4)\nprint(result)', '37');

INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (26, 'dificil', '¿Qué se imprime por pantalla?', 'x = 10\ny = 3\nwhile x > y:\n  x = x / y\nprint(int(x))', '1');

INSERT INTO pruebas (id, dificultad_prueba, enunciado, codigo, respuesta)
VALUES (27, 'dificil', '¿Cuál es el resultado de la operación bitwise?', 'a = 7\nb = 3\nc = a & b\nprint(c)', '3');
