package models

import (
	"fmt"
	"github.com/crowdmob/goamz/aws"
	"github.com/crowdmob/goamz/s3"
	"github.com/nu7hatch/gouuid"
	"strconv"
	"strings"
	"time"
)

type Photo struct {
	Id             int32  `db:"id" json:"id"`
	JournalId      int    `db:"journal_id" json:"journal_id"`
	Filename       string `db:"filename" json:"filename"`
	Type           int    `db:"type" json:"type"`
	ImageLocation  string `db:"image_location" json:"image_location"`
	CreateDate     int64  `db:"create_date" json:"create_date"`
	UploadComplete int    `db:"upload_complete" json:"upload_complete"`
}

func CreateNewPhotoForJournal(userId string, journalId string, file []byte, rawFileName string, contentType string, inputType string) (bool, int, string, int32) {
	dbmap := DBPOOL.GetConnection()
	defer DBPOOL.ReleaseConnection(dbmap)
	splitFileName := strings.Split(rawFileName, ".")
	guid, _ := uuid.NewV4()
	filename := guid.String() + "." + splitFileName[len(splitFileName)-1]
	journalIdInt, journalIdConversionError := strconv.Atoi(journalId)
	inputTypeInt, inputTypeConversionError := strconv.Atoi(inputType)
	if journalIdConversionError != nil || inputTypeConversionError != nil {

		return false, 301, "Input Type or Journal ID not valid.", -1
	}
	photo := &Photo{
		JournalId:      journalIdInt,
		Filename:       filename,
		Type:           inputTypeInt,
		CreateDate:     time.Now().Unix(),
		ImageLocation:  s3Location + filename,
		UploadComplete: 0}
	if photoInsertError := dbmap.Insert(photo); photoInsertError != nil {
		return false, 501, "Database error while inserting new photo." + photoInsertError.Error(), -1
	}
	go fileUploadAndUpdatePhotoStatus(file, contentType, filename, aws_access_key, aws_secret_key, photo)
	return true, 200, "Successfully added photo.", photo.Id

}

func fileUploadAndUpdatePhotoStatus(file []byte, contentType string, filename string, awsAccessKey string, awsSecretKey string, photo *Photo) {
	auth := aws.Auth{AccessKey: awsAccessKey, SecretKey: awsSecretKey}
	s := s3.New(auth, aws.USWest2)
	bucket := s.Bucket("neroimages")
	error := bucket.Put(filename, file, contentType, s3.PublicRead, s3.Options{})
	if error == nil {
		dbmap := DBPOOL.GetConnection()
		defer DBPOOL.ReleaseConnection(dbmap)
		photo.UploadComplete = 1
		_, errorUpdatingPhoto := dbmap.Update(photo)
		fmt.Println(errorUpdatingPhoto)
	} else {
		fmt.Println(error.Error())
	}
}
