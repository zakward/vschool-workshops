# vschool-workshops

CODESANDBOX.IO (link in chat) https://codesandbox.io/s/zen-bhaskara-h63lky?file=/index.html

I. Understanding Constructor Functions:
Constructor functions are a fundamental concept in JavaScript. They allow us to create objects with shared properties and methods.
Think of them as blueprints or templates for creating multiple objects with similar characteristics.
An example would be a Person object that will always have a name and age property. Every person isn't the same but they will all have a name and age, right?

A. Definition and Purpose:
Constructor functions are special functions used to create and initialize objects in JavaScript.
They have the same name as the type of object they create and are invoked using the 'new' keyword.
Their purpose is to set up the initial state and behavior of the objects. (we'll see this in the example)

ES5- Function Expression

B. Syntax and Usage:
To define a constructor function, we use the traditional function declaration syntax with an uppercase first letter to distinguish it from regular functions. Inside the constructor function, we use the 'this' keyword to refer to the current object being created.
This allows us to assign values to its properties and define its methods.

The this property in a constructor function is important in JavaScript because it refers to the current instance of the object that is created using that constructor function. It allows you to access and modify the properties and methods of the specific object being instantiated.

Here are a few reasons why the this property is significant in constructor functions:

1. Object Initialization: The this property is used to set and initialize properties of the object being created within the constructor function. By assigning values to this inside the constructor, you can define the initial state and behavior of the object.
2. Accessing Object Members: The this property enables access to the properties and methods of the object within its own scope. It allows you to refer to specific instance variables and methods of the object by using the this keyword.
3. Method Binding: You can bind methods to the object instance using this. By attaching functions to this, you make them available as methods that can be invoked on the specific instance of the object.
4. Contextual Execution: The value of this depends on how a function is invoked. When a constructor function is called using the new keyword, this points to the newly created object. This contextual binding of this ensures that the properties and methods of the object are appropriately associated with the instance being created.

By utilizing the this property, constructor functions facilitate the creation and customization of objects with their own unique state and behavior. It allows for the encapsulation and organization of related data and functionality within individual instances of the object, making it a crucial aspect of object-oriented programming in JavaScript.
