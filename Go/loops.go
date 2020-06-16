package main

import ( 
  "fmt"
)

func main() {
	// There is only one type of loop in Go and that is a for loop
  for i := 0; i < 5; i++ {
	fmt.Println(i)
	}
  // Although the for loop for double as a while loop
	i := 0
	for i < 5 {
	fmt.Println(i)
  i++
  }
  
  arr := []string{"a","b","c"}

  for index, value := range arr{
	  fmt.Println("index:", index, "value:", value)
  }

  m := make(map[string]string)
  m["a"] = "alpha"
  m["b"] = "beta"

  for key, value := range m{
	  fmt.Println("key:", key, "value:", value)
  }
}