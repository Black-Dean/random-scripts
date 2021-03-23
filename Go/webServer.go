package main
import (
	"fmt"
	"log"
	"net/http"
)
func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Status Code: 418")
	log.Println("CONNECTION IP: ", r.RemoteAddr, "Header: ", r.Header)
}
func handleRequests() {
	http.HandleFunc("/", homePage)
	log.Fatal(http.ListenAndServe(":8081", nil))
}
func main() {
	log.Println("Server Started")
	handleRequests()
}
