#include "GameDriver.h"
//Precondition: None
//Postcondition: It creates a blank object.
//Purpose: Stops the compiler from whining.
GameDriver::GameDriver(){
	
}
//Precondition: This takes a valid string
//Postcondition: This generates a Hangman object and simulates a game with it.
void GameDriver::run(std::string word){
	char inputCharHolder = ' ';
	
	std::cout << "Welcome to the Hangman Game!" << std::endl;
	std::cout << "----------------------------" << std::endl << std::endl;		
			
	while(true){//Yes, this loop continues until I actually break it.
		currentlyInPlay = new Hangman(word);
		while(true){//Yes, this loop continues until I actually break it.
			display();
			inputCharHolder = getALowerCaseLetter();
			
			
			if(currentlyInPlay->guessCharacter(inputCharHolder)){
				std::cout << inputCharHolder << " is in the secret word!" << std::endl;
			}else{
				std::cout << inputCharHolder << " is not in the sercet word. Death draws closer." << std::endl;	
			}
			
			std::cout << std::endl;
			
			if(currentlyInPlay->isGameOver()){
				std::cout << "Game Over!" << std::endl;
				std::cout << "You died. Next time, guess as if your life depended on it." << std::endl;
				break;
			}else if(currentlyInPlay->isFound()){
				std::cout << "Game Over!" << std::endl;
				std::cout << "Congratulations! You guessed the secret word: " << currentlyInPlay->getDisguisedWord() << " in " << currentlyInPlay->getGuessCount() << " guesses!" << std::endl;
				break;
			}
		}
		delete currentlyInPlay;
		
		if(playAgain()){
			std::cout << "Input a new secret word: ";
			std::cin.ignore(1,'\n');
			std::getline(std::cin,word);
			for(int x = 0 ; x < 100 ; ++x){
				std::cout << std::endl;
			}
		}else{
			break;
		}
	}
	std::cout << std::endl << "Thanks for playing Hang Man!" << std::endl;
}
//Precondition: This works as long as the Hangman object works.
//Postcondition: This causes no changes. It merely displays a prompt.
void GameDriver::display() const{
	std::cout << "Guess this: " << currentlyInPlay->getDisguisedWord() << std::endl;
	std::cout << "Guesses so far: " << currentlyInPlay->getGuessCount() << std::endl;
	std::cout << "Misses: " << currentlyInPlay->getMissedMarker() << std::endl;
	std::cout << "Enter your guess character: ";
	
}
//Precondition: This works as long as its return value can go somewhere.
//Postcondition: This causes no changes.
//Return Value: This returns a character that is lowercase.
char GameDriver::getALowerCaseLetter() const{
	char input = ' ';
	std::cin >> input;
	do{
		if(!(97 <= (((int)input)) && (((int)input) <= 122))){
			//Oh look, its not a lowercase letter.
			std::cout << "Enter your guess character (MUST BE A LOWERCASE LETTER): ";
			std::cin >> input;
		}
	}while(!(97 <= (((int)input)) && (((int)input) <= 122))); 
	return(input);
}
//Precondition: This works as long as its return value can go somewhere.
//Postcondition: This causes no changes.
//Return Value: This returns true if the user inputs y, otherwise, it returns false if the user says n.
bool GameDriver::playAgain() const{
	std::cout << "Do you want to play again? (y/n): ";
	char input = ' ';
	do{
		std::cin >> input;
		if(!((input == 'y') || (input == 'n'))){
			//Oh look, the user tried something other than y or n.
			std::cout << "Do you want to play again? (YOUR ANSWER MUST BE A LOWERCASE 'y' OR 'n'): ";
			std::cin >> input;
		}
	}while(!((input == 'y') || (input == 'n'))); 
	return((input == 'y')); //True if you said y, false otherwise.
}
