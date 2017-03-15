#include "Corgi.h"
Corgi::Corgi(std::string name, int age) : Dog::Dog(name,age){
	exercised = true;
	hungry = false;
	hadFun = false;
}
Corgi::~Corgi(){
	std::cout << getName() << " leaves.";
	if(!hungry && exercised && hadFun){
		std::cout << " It looks pleased.\n";
	}else{
		std::cout << " It looks annoyed.\n";
	}
}
void Corgi::playWith(Animal& who){
		hadFun = true;
		std::cout << "Only " << getName() << " had fun.\n";
}
void Corgi::move(){
	std::cout << getName() << " is already fit.\n";
}
void Corgi::eat(std::string food){
	std::cout << getName() << " is not hungry.\n";
}
