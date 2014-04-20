package models

import (
	"github.com/coopernurse/gorp"
	"strconv"
	"time"
)

type Journal struct {
	Id         int32   `db:"id"`
	UserId     int     `db:"user_id" json:"user_id"`
	Title      string  `db:"title" json:"title"`
	Latitude   float64 `db:"latitude" json:"latitude"`
	Longitude  float64 `db:"longitude" json:"longitude"`
	CreateDate int64   `db:"create_date" json:"create_date"`
	Notes      string  `db:"notes" json:"notes"`
	Hashtabs   string  `db:"hashtags" json:"hashtags"`
	Azimuth    float64 `db:"azimuth" json:"azimuth"`
	Altitude   float64 `db:"altitude" json:"altitude"`
	Status     int     `db:"status" json:"status"`
}

func InsertJournal(
	userId,
	title,
	latitude,
	longitude,
	notes,
	hashtags,
	altitude,
	azimuth,
	status string) (bool, int, string, int32) {
	datasource := DBPOOL.GetConnection()
	defer DBPOOL.ReleaseConnection(datasource)
	userIdInt, _ := strconv.Atoi(userId)
	latitudeFloat, _ := strconv.ParseFloat(latitude, 64)
	longitudeFloat, _ := strconv.ParseFloat(longitude, 64)
	azimuthFloat, _ := strconv.ParseFloat(azimuth, 64)
	altitudeFloat, _ := strconv.ParseFloat(altitude, 64)
	imageStatus, _ := strconv.Atoi(status)
	journal := &Journal{
		UserId:     userIdInt,
		Title:      title,
		Latitude:   latitudeFloat,
		Longitude:  longitudeFloat,
		CreateDate: time.Now().Unix(),
		Notes:      notes,
		Hashtabs:   hashtags,
		Azimuth:    azimuthFloat,
		Altitude:   altitudeFloat,
		Status:     imageStatus}

	err := datasource.Insert(journal)
	if err != nil {
		return false, 500, "Database failure.", -1
	}
	return true, 200, "Successfully added journal entry.", journal.Id
}

const GetJournalsByUserIdSQL = `
	SELECT j.id, j.user_id, j.title, j.latitude, j.longitude, j.create_date, j.azimuth, j.altitude
	FROM journals j
	WHERE j.user_id = ?
`

func GetJournalsByUserId(journalId string) (bool, int, string, []*Journal) {
	datasource := DBPOOL.GetConnection()
	defer DBPOOL.ReleaseConnection(datasource)
	container := []*Journal{}
	_, err := datasource.Select(&container, GetJournalsByUserIdSQL, journalId)

	if err != nil {
		return false, 500, "Database Failure.", nil
	}

	return true, 200, "Successfully gathered journals.", container
}

const DeleteJournalSQL = `
	DELETE FROM journals WHERE id = ?
`

func deleteJournal(journalId int32) (int64, error) {
	rowCount, err := dbTemplate(func(datasource *gorp.DbMap) (interface{}, error) {
		result, err := datasource.Exec(DeleteJournalSQL, journalId)

		if err != nil {
			return nil, err
		}

		return result.RowsAffected()
	})

	return rowCount.(int64), err
}
