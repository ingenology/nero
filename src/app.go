package main

import (
	"controllers"
	"fmt"
	"github.com/gorilla/mux"
	"models"
	"net/http"
	// "tests"
)

func main() {
	models.Init()
	// tests.RegisterTest()
	// tests.LoginTest()
	r := mux.NewRouter()
	r.HandleFunc("/register", controllers.HandleRegister).Methods("GET")

	http.HandleFunc("/static/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, r.URL.Path[1:])
	})

	http.Handle("/", r)
	fmt.Println("Init server")
	http.ListenAndServe(":8080", nil)
}
