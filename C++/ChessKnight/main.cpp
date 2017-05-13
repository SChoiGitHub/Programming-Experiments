#include <iostream>
#include <stdlib.h>
void markAndMove(int r, int c, int** myBoard, int n){
	if(0 <= r && r < 8 && 0 <= c && c < 8){
		if(myBoard[r][c] > n || myBoard[r][c] == 0){
			myBoard[r][c] = n;
			
			markAndMove(r+1,c+2,myBoard,n+1);
			markAndMove(r+1,c-2,myBoard,n+1);
			
			markAndMove(r-1,c+2,myBoard,n+1);
			markAndMove(r-1,c-2,myBoard,n+1);
			
			markAndMove(r+2,c+1,myBoard,n+1);
			markAndMove(r+2,c-1,myBoard,n+1);
			
			markAndMove(r-2,c+1,myBoard,n+1);
			markAndMove(r-2,c-1,myBoard,n+1);
		}
	}
}
bool tour(int r, int c, int** myBoard, int n){
	if(0 <= r && r < 8 && 0 <= c && c < 8 && myBoard[r][c] == 0){
		myBoard[r][c] = n;
		bool filled = true;
		
		for(int y = 0; y < 8; ++y){
			for(int x = 0; x < 8; ++x){
				if(myBoard[y][x] == 0){
					filled = false;
					break;
				}
			}
		}
		
		if(filled){
			return true;
		}else{
			if(tour(r+1,c+2,myBoard,n+1)){
				return true;
			}else if(tour(r+1,c-2,myBoard,n+1)){
				return true;
			}else if(tour(r-1,c+2,myBoard,n+1)){
				return true;
			}else if(tour(r-1,c-2,myBoard,n+1)){
				return true;
			}else if(tour(r+2,c+1,myBoard,n+1)){
				return true;
			}else if(tour(r+2,c-1,myBoard,n+1)){
				return true;
			}else if(tour(r-2,c+1,myBoard,n+1)){
				return true;
			}else if(tour(r-2,c-1,myBoard,n+1)){
				return true;
			}else{
				//This failed entirely.
				myBoard[r][c] = 0;
				return false;
			}
		}
	}else{
		return false;
	}
}
int main(int argc, char** argv){
	std::cout << "This program will output a 8x8 array of integers, which represents a chess board.\n";
	std::cout << "You will input two arguments: the row and column that the knight piece begins at.\n";
	std::cout << "This program will designate that spot as '1'\n";
	std::cout << "The moves that piece can move to from '1' spots will be designated as '2'\n";
	std::cout << "Then the moves that the piece can move to from the '2' spots will be designated as '3'\n";
	std::cout << "This continues until the board is full or no possible moves are possible.\n";
	std::cout << "Please note that the first row/column is considered as '0' in your agruments while the second ones are '1'.\n";
	std::cout << "This would mean that the last row/column is considered a '7'. That's how arrays work.\n";
	if(argc == 3){
		std::cout << "Here is your chess board:\n";
		int** board = new int*[8];
		for(int x = 0; x < 8; ++x){
			board[x] = new int[8];
		}
		markAndMove(atoi(argv[1]),atoi(argv[2]),board,1);
		
		for(int y = 0; y < 8; ++y){
			for(int x = 0; x < 8; ++x){
				std::cout << board[y][x] << '\t';
			}
			std::cout << '\n';
		}
	}else{
		std::cout << "You need two arguments: Row and Column!\n";
	}
}
