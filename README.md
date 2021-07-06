# on-off technical test !

You can access to [demo](https://60e3b2324dbee50007453a6a--eloquent-babbage-926719.netlify.app/)

I have bootstraped the project from CRA application.

Stack :

- Typescript
- React
- react -testing-library
- styled-component
- React-redux
- Redux toolkit (for fun)
- redux-saga
- Husky

Ok, a lot of stuff here is useless for the use case (for example, we could have done the test without using redux, saga ..., but you asked to use what I should have done with large app).

I did not use UI library like Bootstrap or Material UI.

Moreover, I have used styled-components but I usually do not use CSS-in-JS technologies, I prefer using SASS.

To finish, I am sorry, I did not have time to push more tests. I've tried to cover the critical part (62% coverage for 90% set on the project).

### Requirements

- node >=14.17.3 (LTS)
- A node Package Manager (npm, yarn)

## Installing

If you are using npm as PM:

```shell
git clone git@github.com:Annouar/on-off-technical-test.git
cd on-off-technical-test
npm install
```

Or if you are using yarn:

```shell
git clone git@github.com:Annouar/on-off-technical-test.git
cd on-off-technical-test
yarn
```

## Quick start

### Run project in local

If you want to start project in dev

```shell
yarn start
```

If you want to start project in prod

```shell
yarn start:prod
```

### Run tests

```shell
yarn test
```

or

```shell
yarn test --coverage
```

### Build project

```shell
yarn build
```
