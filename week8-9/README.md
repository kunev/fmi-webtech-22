# HTTP API

Примерът, който започнахме да разглеждаме по време на упражненията се занимаваше
с потребители, това обаче е едновременно сложна тема (user management
проблемите, с които може да се сблъска човек не са малко и не е добра идея да ги
опростяваме много в примерите, които правим), но за сметка на това и потенциално
скучна.

Така че вместо това малко по-надолу ще разгледаме друг тип обекти.

But first...

## CRUD приложения

Голяма част от съществуващите web приложения могат да бъдат разглеждани като
реализиращи следните операции върху данни от някакъв тип:
- създаване (Create)
- четене (Read)
- обновяване (Update)
- изтриване (Delete)

От където идва и често използваното име на такъв тип приложения: CRUD.

Въпросните 4 операции могат доста лесно да се съпоставят на HTTP глаголи:
- create ⇔ POST
- read ⇔ GET
- update ⇔ PUT
- delete ⇔ DELETE

Това пък прави този тип приложения подходящи за прилагане на програмни
интерфейси следващи идеите на REST.

## Ресурси
Важен елемент в REST интерфейсите са ресурсите. В нашия случай ще имаме само
един тип ресурси: **покемони**. За 4-те операции, които искаме да поддържаме
можем да дефинираме API-то си по следния начин:

- `POST` заявка към `/api/pokemons` ще изпраща данни в JSON формат, които описват
  покемон, който искаме да създадем. При успешно обработване на заявката,
  отговорът ще съдържа идентификатора на новосъздадения покемон.
- `GET` заявка към `/api/pokemons` ще връща списък с всичко записани в
  приложението ни покемони.
- `GET` заявка към `/api/pokemons/:id` ще връща покемон с идентификатор `:id`.
- `PUT` заявка към `/api/pokemons/:id` ще изпраща данни в JSON формат, които
  описват (потенциално частична) промяна по покемон с идентификатор `:id`.
- `DELETE` заявка към `/api/pokemons/:id` ще води до изтриване на покемона с
  идентификатор `:id`.

За обработването на всички заявки към `/api/pokemon/:id` е нужно да съществува
покемон с въпросния идентификатор, така че в случай, че такъв няма, отговорът на
тези заявки трябва да е със статус 404.


## Нещо като домашно
Опитайте се сами да реализирате такова API използвайки „заготовката“ в `index.js`.

За целите на тази задача няма да се опитваме да пускаме база данни (била тя
релационна или не).