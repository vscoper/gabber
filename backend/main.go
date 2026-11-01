package main

import (
	"log"
	"net/http"
	"github.com/mattn/go-sqlite3"
)

func main() {
	fs := http.FileServer(http.Dir("../frontend"))

	http.Handle("/", fs)

	port := ":8080"
	log.Printf("Сервер запущен! Открой в браузере: http://localhost%s\n", port)

	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatalf("Ошибка при запуске сервера: %v", err)
	}
}
