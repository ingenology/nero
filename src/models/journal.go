package models

type Journal struct {
	Id int32
	UserId int32
	Title string
	Latitude float32
	Longitude float32
	CreatedDate int64
	Azimuth float32
	Altitude float32
}

func InsertJournal(journal *Journal) (error) {
	return nil
}
