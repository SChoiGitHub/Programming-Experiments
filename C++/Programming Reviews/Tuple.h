#ifndef TUPLE
#define TUPLE


template<typename I, typename S>
class Tuple{
	public:
		Tuple(I aIn, S bIn);
		I getFirstItem();
		S getSecondItem();
	private:
		I firstItem;
		S secondItem;
};

#include "Tuple.hpp"

#endif
