#include "GameDriver.h"


//Precondition: This takes an int and a char**
//Postcondition: This does not change anything.
//Return Value: Adds all strings after the first argument in argv. Returns the sum.
std::string generateWord(int argc, char** argv){
	std::string inputWord = "";
	for(int x = 1; x < argc - 1; ++x){
		inputWord += argv[x];
		inputWord += " ";
	}
	inputWord += argv[argc - 1];
	return(inputWord);
}

int main(int argc, char** argv){
	if(argc > 1){
		std::string inputWord = generateWord(argc, argv); //Input word.
		GameDriver* hangmanGame = new GameDriver();
		hangmanGame->run(inputWord);
		delete hangmanGame;
	}else{
		std::cout << "Please type in a word as the argument of this program.\n";
	}
}


