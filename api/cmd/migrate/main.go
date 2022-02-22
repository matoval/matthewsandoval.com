package main

import (
	"github.com/matoval/matthewsandoval.com/api/config"
	"github.com/matoval/matthewsandoval.com/api/pkg/db"
	"github.com/matoval/matthewsandoval.com/api/pkg/models"
	log "github.com/sirupsen/logrus"
)

func main() {
	config.Init()
	cfg := config.Get()
	log.WithFields(log.Fields{
		"WebPort": cfg.WebPort,
		"Type":    cfg.Database.Type,
		"Name":    cfg.Database.Name,
	})
	db.InitDB()

	err := db.DB.AutoMigrate(&models.Blog{})
	if err != nil {
		panic(err)
	}

	log.Info("Migration Completed")
}
