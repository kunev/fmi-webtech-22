# Асинхронни операции

Операции свързани с четене и писане по мрежа или от/във файлове са асинхронни в
javascript. Това ще рече, че runtime-а на javascript ги изпълнява „на заден
план“ и изпълнява зададения код за обработването им когато са приключили.

Има няколко механизма за това.

## Callbacks

Най-стария начин за обработка на асинхронни операции е с функции, които се
подават като аргументи на други функции, за да бъдат извикани когато въпросната
операция приключи. Такъв тип функции се наричат `callbacks`.

В `callbacks_read_files.js` може да намерите пример за това как можем
последователно да отворим два файла, използвайки този подход.

Кодът организиран по този начин доста бързо става сложен за четене, осмисляне и
проследяване при грешки. Натрупването на много такива вложени callback функции
е известно като "callback hell" заради многото проблеми, които създава.

## Promises

Начин да се адресира този проблем е с използване на promise-и. Promise обектите
представляват абстракция над някое потенциално асинхронно действие. В определен
момент (когато асинхронната операция приключи или се провали) promise обекта
вече има стойност (или грешка), която може да бъде обработена.

Promise обектите имат метод `then`, с който може да се дефинира функция за
обработка на резултата (или грешката). `then` приема два аргумента, които са
функции, първата се извиква при успешно приключване на операцията и получава
резултата като аргумент, а втората при грешка, като получава грешката като
аргумент.
Извикването на `then` връща нов promise за стойността върната от функцията,
която се е изпълнила за да обработи първия promise. Ако въпросната стойност е
promise, то това е promise-ът, който се връща. Това позволява свързването на
promise-и (promise chaining), което прави кода значително по-лесен за четене и
осмисляне, тъй като така последователността е на изпълнение е същата като
последователността на кода във файла.

Същия пример за четене на файлове, но реализиран с promise-и, може да видите в
`promises_read_files.js`.


# async/await

В ECMAScript 2017 е добавен нов синтаксис за деклариране и обработване на
асинхронни операции, който надгражда над promise-ите.

Ако функция е дефинирана като `async` то в тялото ѝ може да се използва `await`
за "изчакване" на promise-и. Това прави асинхронния код още по-лесен за четене и
осмисляне, тъй като вече изглежда напълно линеен.

Важно е да се има предвид, че извикването на `await` означава, че в този момент
runtime-а ще паузира изпълнението на текущата функция и чак по-късно, след като
`await`-вания promise вече съдържа резултат (или грешка) ще продължи
изпълнението ѝ от същото място. Това означава, че не може да имате гаранции за
това в какъв ред ще се изпълняват части от кода на различни `async` функции, тъй
като това зависи както от нужното време за завършването на съответните
promise-и, които чакат, така и от това кога точно след това runtime-а ще реши да
продължи изпълнението им.

Ако promise-а, който се `await`-ва доведе до грешка, то в `async` функцията ще
се получи изключение на този ред. Тоест обработката на грешки от `await` се
прави с `try`/`catch` блок.

В `async_func_read_files.js` има пример как можем да прочетем последователно два
файла използвайки `async`/`await`.
