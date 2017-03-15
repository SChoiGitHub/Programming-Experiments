Hangman : main.o Hangman.o GameDriver.o
	g++ -std=c++11 -g -Wall main.o Hangman.o GameDriver.o -o Hangman 

main.o: main.cpp
	g++ -std=c++11 -g -Wall -c main.cpp

GameDriver.o: GameDriver.cpp
	g++ -std=c++11 -g -Wall -c GameDriver.cpp

Hangman.o: Hangman.cpp
	g++ -std=c++11 -g -Wall -c Hangman.cpp

clean:
	rm *.o Hangman 
