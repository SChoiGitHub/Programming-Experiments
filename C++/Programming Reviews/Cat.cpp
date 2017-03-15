#include "Cat.h"

Cat::Cat(std::string name, int age){
	information = new Tuple<std::string,int>(name,age);
}
Cat::~Cat(){
	std::cout << "The cat leaves.";
	if(!hungry && exercised && hadFun){
		std::cout << " It looks happy.\n";
	}else{
		std::cout << " It leaves quietly.\n";
	}
}
void Cat::playWith(Animal& who){
	std::cout << information->getFirstItem() << " played with " << who.getName() << ".\n";
	hadFun = true;
	who.gotToHaveFun();
}
void Cat::move(){
	std::cout << information->getFirstItem() << " climbed around the house.\n";
	exercised = true;
}
void Cat::eat(std::string food){
	std::cout << "The cat slowly ate " << food << ".\n";
	hungry = false;
}
std::string Cat::getName(){
	return information->getFirstItem();
}
int Cat::getAge(){
	return information->getSecondItem();
}
void Cat::gotToHaveFun(){
	hadFun = true;
}
