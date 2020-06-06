import axios from 'axios';

export const getSecretWord = async (setSecretWord) => {
  const response = await axios.get('words.json');
  const list = response.data.fiveLetterWords;
  const secretWord = list[Math.floor(Math.random() * list.length)];
  setSecretWord(secretWord);
}

// default export for mocking convenience
export default {
  getSecretWord,
}
