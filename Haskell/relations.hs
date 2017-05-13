import Data.List

findRelations :: (Eq a, Show a) => [(a, a)] -> (String,String,String,String)
findRelations theSet = ((findReflexiveSet theSet []),isSymmetric theSet 0,isAsymmetric theSet 0,isTransitive theSet 0)

findReflexiveSet :: (Eq a, Show a) => [(a, a)] -> [a] -> String
findReflexiveSet theSet reflexiveSet
 --Reflexiveness is not something that can be dispoven without a given set.
 --This returns a list that this list would fulfill for reflexiveness.
 | (length theSet)/=0 = 
  if (fst (theSet !! 0)) == (snd (theSet !! 0))
   then findReflexiveSet (tail theSet) (reflexiveSet ++ [fst (theSet!!0)])
   else findReflexiveSet (tail theSet) (reflexiveSet)
 | otherwise = "Reflexive for " ++ (show reflexiveSet)

isSymmetric :: (Eq a, Show a) => [(a, a)] -> Int -> String
isSymmetric theSet checkingIndex
 | (length theSet) /= checkingIndex = 
  --One really long way of saying: are there any elements in "theSet" that are equal to the reverse of the tuple at index "checkingIndex"?
  --If not, it returns "Nothing", therefore: it does not exist. This disproves symmetry
  if ((findIndex (==((snd (theSet !! checkingIndex)),(fst (theSet !! checkingIndex)))) theSet) == Nothing)
   then "Symmetry Disproven with " ++ (show (theSet !! checkingIndex))
   else isSymmetric theSet (checkingIndex+1)
 | otherwise = "Symmetric"

isAsymmetric :: (Eq a, Show a) => [(a, a)] -> Int -> String
isAsymmetric theSet checkingIndex
 | (length theSet) /= checkingIndex = 
  --One really long way of saying: is this element a candidate for disproving Asymmetry AND does an opposite exist?
  if ((fst (theSet !! checkingIndex)) /= (snd (theSet !! checkingIndex))) && ((findIndex (==((snd (theSet !! checkingIndex)),(fst (theSet !! checkingIndex)))) theSet) /= Nothing)
   --It does exist! That fails the Asymmetry condition.
   then "Asymmetry Disproven with " ++ (show (theSet !! checkingIndex))
   else isAsymmetric theSet (checkingIndex+1)
 | otherwise = "Asymmetric"

isTransitive :: (Eq a, Show a) => [(a, a)] -> Int -> String
isTransitive theSet checkingIndex
 | (length theSet) /= checkingIndex = 
  if findTransitiveElement theSet (fst(theSet !! checkingIndex)) (findIndices (==(snd (theSet !! checkingIndex))) (map fst (theSet)))
   then isTransitive theSet (checkingIndex+1)
   else "Transitivity Disproven with " ++ (show (theSet !! checkingIndex))
 | otherwise = "Transitive"
 
 
findTransitiveElement :: (Eq a, Show a) => [(a, a)] -> a -> [Int] -> Bool
findTransitiveElement theSet firstOfTuple indicesToCheck
 | (length indicesToCheck) > 0 = 
  if ((findIndex (==( firstOfTuple , (snd(theSet !! (head indicesToCheck))) )) theSet) /= Nothing)
   then findTransitiveElement theSet firstOfTuple (tail indicesToCheck)
   else False
 | otherwise = True
