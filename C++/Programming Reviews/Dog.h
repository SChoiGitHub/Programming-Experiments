#ifndef DOG_H
#define DOG_H

#include "Animal.h"

class Dog : public Animal{
	public:
		Dog(std::string name, int age);
		~Dog();
		virtual void playWith(Animal& who);
		virtual void move();
		virtual void eat(std::string food);
		std::string getName();
		int getAge();
		void gotToHaveFun();
};


#endif
