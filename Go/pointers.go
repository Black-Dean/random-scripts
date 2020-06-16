package main

import ( 
  "fmt"
)

type person struct {
	name string 
	age int
	
}

func main() {
	i := 7
	inc(&i) // the ampersand makes it the memory address of i
	fmt.Prntln(i)
}

func inc(x *int) { // the asterisk accepts the pointer from the ampersand
	*x++ // the asterisk here dereferences the memory address to modify the value of i
}