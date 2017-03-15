#ifndef HANGMAN
#define HANGMAN

#include <string>

class Hangman{
	private:
		std::string secretWord;
		std::string disguisedWord;
		int disguisedWordSize, guessCount, missesCount;
		static const int MAX_MISSES_ALLOWED = 7;
		char* missedMarkers;
	public:
		Hangman(std::string inputWord);
		bool guessCharacter(char c);
		bool isGameOver() const;
		bool isFound() const;
		std::string getDisguisedWord() const;
		int getGuessCount() const;
		int getMissesCount() const;
		std::string getMissedMarker() const;
};







#endif
