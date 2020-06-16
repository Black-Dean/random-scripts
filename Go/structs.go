package main

import ( 
  "fmt"
)

type person struct {
	name string 
	age int
	
}

func main() {
	p := person{name: "Dean", age: 17}
	fmt.Println(p)
	fmt.Println(p.age)
}
