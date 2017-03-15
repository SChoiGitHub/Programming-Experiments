template<typename I, typename S>
Tuple<I,S>::Tuple(I aIn, S bIn){
	firstItem = aIn;
	secondItem = bIn;
}

template<typename I, typename S>
I Tuple<I,S>::getFirstItem(){
	return firstItem;
}

template<typename I, typename S>
S Tuple<I,S>::getSecondItem(){
	return secondItem;
}
