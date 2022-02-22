package routes

import (
	"encoding/json"
	"net/http"

	"github.com/matoval/matthewsandoval.com/api/pkg/db"
	"github.com/matoval/matthewsandoval.com/api/pkg/models"

	"github.com/go-chi/chi/v5"
)

func MakeBlogsRouter(sub chi.Router) {
	sub.Get("/", GetAllBlogs)
	sub.Post("/", PostNewBlog)
	//sub.Route("/{blogId}", func(r chi.Router) {
	//r.Get("/", GetBlogByID)
	//r.Patch("/", UpdateBlog)
	// 	r.Delete("/", DeleteBlog)
	// })
}

func GetAllBlogs(w http.ResponseWriter, r *http.Request) {
	var blogs []models.Blog
	db.DB.Find(&blogs)

	jsonBytes, err := json.Marshal(blogs)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
	}

	w.Header().Add("content-type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(jsonBytes)
}

func PostNewBlog(w http.ResponseWriter, r *http.Request) {
	var blogPost models.Blog

	err := json.NewDecoder(r.Body).Decode(&blogPost)
	if err != nil {
		panic(err)
	}

	res := db.DB.Create(&blogPost)

	if res.Error != nil {
		panic(res.Error)
	}

	w.WriteHeader(201)
}
