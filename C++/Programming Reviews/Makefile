Review : main.o Animal.o Cat.o Dog.o Corgi.o
	g++ -std=c++11 -g -Wall main.o Animal.o Cat.o Dog.o Corgi.o -o Review 

main.o: main.cpp
	g++ -std=c++11 -g -Wall -c main.cpp
	
Animal.o: Animal.cpp
	g++ -std=c++11 -g -Wall -c Animal.cpp
	
Cat.o: Cat.cpp
	g++ -std=c++11 -g -Wall -c Cat.cpp
	
Dog.o: Dog.cpp
	g++ -std=c++11 -g -Wall -c Dog.cpp

Corgi.o: Corgi.cpp
	g++ -std=c++11 -g -Wall -c Corgi.cpp

clean:
	rm *.o Review 
