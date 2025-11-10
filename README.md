-types of testing:

1:Unit testing
--It means that we are testing a particular part of our app like a particluar component of our app.It is called unit testing because we are testing our app unit by unit.

2:Intergration testing:
--It means that we are testing the integration our app.Like in our all the components are linked together so we check the relation or linking of our components that are they working well.For example we made a search bar which filter out the cards according to our input that we gave in search bar so now the search bar and the cards component have a connection betweeen them so we are checking that relation.This is called integration testing.

3:End to End Testing (e2e):
--In e2e testing we check our app from where user lands and go to the end.It means that we are testing our whole flow of our app.For example on a food odering app ,user lands on login ,sign up,after this he see foods,search for a food,add to cart,then order that food.This is a complete flow of our app so testing this complete flow from landing to exit is called e2e testing.

Requirments need for configue testing in our app:

1:Install react test library
2:Install jest (a framework of javascript for testing)
3:Install dependencies for using react test library along babel
4:Configue new babel
5:Remove or deactivate the previous babel configue that comes by default in parcel bundler by adding parcelrc file and put some code in it(found from react test library).
6:Configue jest (command:npx create-jest@latest).
7:Install JS DOM library
8:Install @babel/preset-react library(to make jsx works in test cases)
9:Include @babel/preset-react library in my babel configue
10:Install @testing-library/jest-dom

