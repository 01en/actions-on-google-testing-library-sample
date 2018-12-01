'use strict';
const { ActionsOnGoogleAva } = require('actions-on-google-testing');
const { expect } = require('chai');
const action = new ActionsOnGoogleAva(require('./test/test-credentials.json'));

// localの指定
action.setLocale("ja-JP");

action.startTest('Action:世界遺産博士の起動', action => {
  // startWith:アクション名を指定して、呼び出す
  return action.startWith('世界遺産博士') // 世界遺産博士につないで
    .then(({ textToSpeech }) => {
      expect(textToSpeech[0]).to.equal('ようこそ、世界遺産の世界に。\nどの国の世界遺産について知りたいのじゃ?  国名を教えてくだされ。');
    });
});

action.startTest('Action:世界遺産博士 - 「アメリカ」の世界遺産を教えて', action => {
  return action.startWith('世界遺産博士')
    .then(() => {
      return action.send('アメリカ');
    }).then(({ textToSpeech }) => {
      expect(textToSpeech).to.have.lengthOf(1);
      expect(textToSpeech[0]).to.have.string('アメリカ合衆国');
    });
});

action.startTest('Action:世界遺産博士 - フィンランドの世界遺産を教えて - Explicit invocation', action => {
  return action.send('世界遺産博士を使ってフィンランド')
    .then(({ textToSpeech }) => {
      expect(textToSpeech).to.have.lengthOf(1);
    });
});

action.startTest('Action:やまびこ坊や - Echo Intent', action => {
  return action.startWith('やまびこ坊や')
    .then(() => {
      return action.send('荒野を走れ〜、どこまでも〜、冗談を吹き飛ばしながらも');
    }).then(({ textToSpeech, ssml }) => {
      expect(ssml[0]).to.have.string('荒野を走れ〜、どこまでも〜、冗談を吹き飛ばしながらも');
    });
});
