#include "Tuple.h"
#include "Cat.h"
#include "Dog.h"
#include "Corgi.h"
#include <iostream>
#include <exception>

void playGame(int min, int max){
	if(min > max){
		std::cout << "The Game Failed!\n";
	}else if(min == max){
		std::cout << "Game Over. You lost on level " << max << ".\n";
	}else{
		std::cout << "You beat level " << min << ", going to next level.\n";
		playGame(min+1,max);
	}
}

int main(int argc, char** argv){
	//Exam Review. This code is not supposed to be good.
	//Animal is an interface, Dog and Cat inheirit from it.
	Animal** hello = new Animal*[3];
	hello[1] = new Cat("Sal",3);
	hello[0] = new Dog("Louie",3);
	hello[2] = new Corgi("Badman",3);
	hello[2]->playWith(*hello[1]);
	hello[0]->playWith(*hello[1]);
	hello[0]->eat("Steak");
	hello[1]->eat("Tuna");
	hello[2]->eat("Something");
	hello[0]->move();
	hello[1]->move();
	hello[2]->move();
	delete hello[0];
	delete hello[1];
	delete hello[2];
	delete[] hello;
	//This is a recursive method
	try{
		playGame(1,10);
		throw std::runtime_error("Hello, I am error!"); //Error throwing!
	}catch(const std::runtime_error& e){
		std::cout << e.what() << std::endl;
	}
	std::cout << "Program ended.\n";
	
	
}


