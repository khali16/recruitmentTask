Propozycja testów:

1. Unit: test komponentu Canvas, który sprawdza, czy wyrenderował się w odpowiedniej pozycji na podstawie współrzędnych - x, y otrzymanych poprzez propsy;
2. Integracyjny: test komponentu CanvasBoard sprawdzający, czy wyrenderował poszczególne Canvasy;
3. End-to-end: test aplikacji sprawdzający, czy pobiera dane z api i je wyświetla.

Uwagi do API:

1. Przykłady błędnych requestów (404,500) z zadania zwracają inny response
   (A server error has occurred FUNCTION_INVOCATION_FAILED),
   niż request wykonany ze złym id:
   ({"error": 1 "message": "Inavalid project id"}).
   Moim zdaniem należałoby ujednolicić ciało zwracanych obiektów.
2. W przypadku przykładów z zadania, 404 i 500, wiadomość zwrotna wygląda jak bezpośredni błąd w kodzie na backendzie, który nie został poprawnie obsłużony.
   Wydaje mi sie, że na frontend powinna trafić poprawnie przetworzona wiadomość z błędem (tak jak np. Invalid project id).
3. W przypadku wykonania requesta ze złym id, w zwróconym obiekcie jest pole 'error' przechowujące number = 1. Nie jest to dla mnie czytelne, o ile nie jest to wewnętrzny, umowny kod błędu, i ma oznaczać zwykły http status code, to powinien być zgodny z konwencją http-status codes https://restfulapi.net/http-status-codes/
