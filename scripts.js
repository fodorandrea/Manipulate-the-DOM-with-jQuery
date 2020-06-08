let names = ['Claire','Peter', 'Adam', 'Joe', 'Andi'];
names.forEach((name) => { 
    if (name === "Andi") 
       $('ul').append(`<li> <strong>${name} </strong></li>`);
    else $('ul').append(`<li> ${name}</li>`);
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };
  $('body').append(`<h2>${additionalBlock['title']} </h2>`);
  $('body').append(`<p>${additionalBlock['text']} </p>`);

