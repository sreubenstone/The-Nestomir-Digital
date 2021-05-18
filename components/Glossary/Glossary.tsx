const Glossary = {
  Function: {
    title: "The Function",
    pron: "fuhngk•shuhn",
    description: "A function is a block of organized, reusable code that is used to perform a single, related action.",
    ldshab: "Known as The Holy Reusable Root in Naronian culture. Known to be the essence of all programming.",
    snippit: "def add(x,y):\n   return x + y",
    suggested: [
      { title: "Defining Your Own Python Function", url: "https://realpython.com/defining-your-own-python-function/" },
      { title: "w3schools: Creating a Python Function", url: "https://www.w3schools.com/python/python_functions.asp" },
    ],
    recommended: ["Write a Python function that calculates the average return of your investment over a period of time.", "Write a Python function that calculates your average velocity on a run."],
  },

  Variable: {
    title: "Variable",
    pron: "/ˈverēəb(ə)l/",
    description:
      "A Python variable is a reserved memory location to store values. In other words, a variable in a python program gives data to the computer for processing. Every value in Python has a datatype. Different data types in Python are Numbers, List, Tuple, Strings, Dictionary, etc.",
    ldshab: "La Variable, developed by Spiritual Teacher Kredo Fredrickson in 12890 Sentient.",
    snippit: "apples = 2\n# apples is the variable name \n# 2 is the data stored inside of it.",
    suggested: [
      { title: "Real Python: Variables", url: "https://realpython.com/python-variables/" },
      { title: "w3schools: Defining Python Variables", url: "https://www.w3schools.com/python/python_variables.asp" },
    ],
    recommended: ["Use a Jupyter notebook to create a variable and save your name in it, then print it to the screen."],
  },

  Memory: {
    title: "Memory",
    pron: "mem·​o·​ry",
    description: "Computer memory is any physical device capable of storing information temporarily, like RAM (random access memory).",
    snippit: "dog = 'rex'\n# ex. Python is opening a slot in memory\n# to store the value of dog.",
    suggested: [
      { title: "Explain That Stuff: Computer Memory", url: "https://www.explainthatstuff.com/how-computer-memory-works.html" },
      { title: "Real Python: Memory Management (advanced)", url: "https://realpython.com/python-memory-management/" },
    ],
  },
};

export default Glossary;
