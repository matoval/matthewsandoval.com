package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/matoval/matthewsandoval.com/api/config"
	"github.com/matoval/matthewsandoval.com/api/pkg/db"
	"github.com/matoval/matthewsandoval.com/api/pkg/routes"
	log "github.com/sirupsen/logrus"
)

func initDependencies() {
	config.Init()
	db.InitDB()
}

func main() {
	initDependencies()
	cfg := config.Get()
	db.InitDB()
	log.WithFields(log.Fields{
		"WebPort": cfg.WebPort,
		"Type":    cfg.Database.Type,
		"Name":    cfg.Database.Name,
	})

	r := chi.NewRouter()
	r.Use(middleware.Logger)

	r.Route("/", func(s chi.Router) {
		r.Route("/blogs", routes.MakeBlogsRouter)
	})

	http.ListenAndServe(":3000", r)
}
