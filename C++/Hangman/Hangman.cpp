#include "Hangman.h"

//Precondition: This takes a string
//Postcondition: This creates a secret and disguised word using the inputword. It also sets up the guessCount, missesCount, and sets the missedMarkers up.
Hangman::Hangman(std::string inputWord){
	//Basic set up happening here.
	secretWord = inputWord;
	disguisedWord = "";
	missedMarkers = new char[MAX_MISSES_ALLOWED];
	
	for(int x = 0; x < (signed)inputWord.length(); ++x){
		if(secretWord.at(x) != ' '){
			//The character is not a space? Just add it into the disguised word as a ?
			secretWord.at(x) = tolower(secretWord.at(x)); //In case the user input is capital.
			disguisedWord += "?";
		}else{
			//The character is a space. This must be accounted for.
			disguisedWord += " ";
		}
	}
	for(int x = 0; x < MAX_MISSES_ALLOWED; ++x){
		//You get markers equal to the amount of misses you can have.
		missedMarkers[x] = 'O';
	}
	guessCount = 0;
	missesCount = 0;
}
//Precondition: This takes a char and assumes Hangman works.
//Postcondition: This checks if c actually is in the secretWord. If so, it updates it. If not, it will be indicated by the return value.
//Return Value: If the character exists, then it returns true. If not, it returns false.
bool Hangman::guessCharacter(char c){
	bool found = false;
	for(int x = 0; x < (signed)secretWord.length(); ++x){
		if(secretWord.at(x) == c){
			//YOU FOUND IT
			found = true;
			//Update the disguised word.
			disguisedWord.at(x) = secretWord.at(x);
		}
	}
	if(!(found)){
		//c is not in the String.
		//Lets update the missed markers.
		missedMarkers[missesCount] = 'X';
		missesCount++;
	}
	++guessCount;
	return(found);
}
//Precondition: This assumes Hangman works.
//Postcondition: This does not change anything.
//Return Value: Returns true if the missed guesses is equal to the number of allowed guesses.
bool Hangman::isGameOver() const{
	if(MAX_MISSES_ALLOWED == missesCount){
		//No memory leaks.
		delete[] missedMarkers;
	}
	return(MAX_MISSES_ALLOWED == missesCount);
}
//Precondition: This assumes Hangman works.
//Postcondition: This does not change anything.
//Return Value: Returns true if the disguised word is equal to the secret one. Indicating victory for the gamer.
bool Hangman::isFound() const{
	if(secretWord == disguisedWord){
		//No memory leaks.
		delete[] missedMarkers;
	}
	return(secretWord == disguisedWord);
}
//Precondition: This assumes Hangman works.
//Postcondition: This does not change anything.
//Return Value: This returns the disguised word.
std::string Hangman::getDisguisedWord() const{
	return(disguisedWord);
}
//Precondition: This assumes Hangman works.
//Postcondition: This does not change anything.
//Return Value: This returns the guess count.
int Hangman::getGuessCount() const{
	return(guessCount);
}
//Precondition: This assumes Hangman works.
//Postcondition: This does not change anything.
//Return Value: This returns the misses count.
int Hangman::getMissesCount() const{
	return(missesCount);
}
//Precondition: This assumes Hangman works.
//Postcondition: This does not change anything.
//Return Value: This returns the Missed Marker string.
std::string Hangman::getMissedMarker() const{
	std::string returnThis = "";
	for(int x = 0; x < MAX_MISSES_ALLOWED; ++x){
		if(x > missesCount){
			returnThis += "O";
		}else{
			returnThis += "X";
		}
	}
	return(returnThis);
}


