## EX.

- TodoList
- use `useEffect`
- when component is born send a request to the server

if  not in bunker send request here

```
http://nztodo.herokuapp.com/api/tasks/?format=json
```

if in bunker

```
cd backend-api
npm start
http://localhost:3333/api/tasks/unsecure
```

- Login
- use `useState` to create an `isLoading` this will control a spinner in the login button, when the request is sent the isLoading is true and a spinner is presented in the button
- when the response is returned the isLoading is set to false and the spinner should vanish.

