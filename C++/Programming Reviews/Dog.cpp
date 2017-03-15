#include "Dog.h"
Dog::Dog(std::string name, int age){
	information = new Tuple<std::string,int>(name,age);
}
Dog::~Dog(){
	std::cout << getName() << " leaves.";
	if(!hungry && exercised && hadFun){
		std::cout << " It looks excited.\n";
	}else{
		std::cout << " It looks sad.\n";
	}
}
void Dog::playWith(Animal& who){
	std::cout << information->getFirstItem() << " ran with " << who.getName() << ".\n";
	hadFun = true;
	who.gotToHaveFun();
}
void Dog::move(){
	std::cout << information->getFirstItem() << " ran around the house.\n";
	exercised = true;
}
void Dog::eat(std::string food){
	std::cout << "The dog quickly ate " << food << ".\n";
	hungry = false;
}
std::string Dog::getName(){
	return information->getFirstItem();
}
int Dog::getAge(){
	return information->getSecondItem();
}
void Dog::gotToHaveFun(){
	hadFun = true;
}
