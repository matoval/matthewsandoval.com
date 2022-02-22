package config

import (
	"github.com/spf13/viper"
)

type ServerConfig struct {
	WebPort  int
	Database *dbConfig
}

type dbConfig struct {
	Type     string
	User     string
	Password string
	Hostname string
	Port     uint
	Name     string
}

var config *ServerConfig

func Init() {
	options := viper.New()
	options.SetDefault("WebPort", 3000)
	options.SetConfigName("config")
	options.AddConfigPath(".")
	if err := options.ReadInConfig(); err != nil {
		panic(err)
	}

	config = &ServerConfig{
		WebPort: options.GetInt("WebPort"),
	}
	database := options.GetString("TYPE")

	if database == "postgres" {
		config.Database = &dbConfig{
			User:     options.GetString("USER"),
			Password: options.GetString("PASSWORD"),
			Hostname: options.GetString("HOSTNAME"),
			Port:     options.GetUint("PORT"),
			Name:     options.GetString("NAME"),
			Type:     options.GetString("TYPE"),
		}
	}
}

func Get() *ServerConfig {
	return config
}
