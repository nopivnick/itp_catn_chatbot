// Noah Pivnick
// Chatbot assignment for CAtN Fall 2019
// this sketch and the accompanying .html file uses code lifted from Dan Shiffman's Number Guessing Chatbot tutorial:
// https://www.youtube.com/watch?v=zGe1m_bLOFk

function setup() {
  noCanvas();

  let bot = new RiveScript();
  bot.loadFile("brain.rive", brainReady, brainError);

  function brainReady() {
    console.log('Chatbot ready!');
    bot.sortReplies();
    let num = floor(random(10)) + 1;
    console.log(num);
    let reply = bot.reply('local-user', 'set ' + num);
  }

  function brainError() {
    console.log('Chatbot error!')
  }


  let button = select('#submit');
  let user_input = select('#user_input');
  let output = select('#output');

  button.mousePressed(chat);

  function chat() {
    let input = user_input.value();
    let reply = bot.reply("local-user", input);
    output.html(reply);
  }

}