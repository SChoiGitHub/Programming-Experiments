#ifndef CAT_H
#define CAT_H

#include "Animal.h"

class Cat : public Animal{
	public:
		Cat(std::string name, int age);
		~Cat();
		void playWith(Animal& who);
		void move();
		void eat(std::string food);
		std::string getName();
		int getAge();
		void gotToHaveFun();
};


#endif
