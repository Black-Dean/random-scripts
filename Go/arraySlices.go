package main

import ( 
  "fmt"
)

func main() {
  // array
  a := [5]int{0,1,2,3,4}// This is an array of integers the default value is 0, like other programming languages it the first value in array starts at 0 and goes up from there
  a[2] = 1
  
  // slices these don't have a fixed number of elements
  s := []int{5,4,3,2,1}
  
  s = append(s,13) // This adds an element to the end/top of the slice.
  
  
  fmt.Println(a)
  fmt.Println(s)
  
}