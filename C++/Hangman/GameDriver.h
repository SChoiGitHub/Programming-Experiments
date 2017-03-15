#ifndef GAME_DRIVER
#define GAME_DRIVER
#include "Hangman.h"
#include <iostream>


class GameDriver{
	private:
		Hangman* currentlyInPlay;
	public:
		GameDriver();
		void run(std::string word);
		void display() const;
		char getALowerCaseLetter() const;
		bool playAgain() const;
};







#endif
