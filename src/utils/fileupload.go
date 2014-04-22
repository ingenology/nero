package utils

import (
	"fmt"
	"github.com/crowdmob/goamz/aws"
	"github.com/crowdmob/goamz/s3"
)

func FileUploader(file []byte, contentType string, filename string, awsAccessKey string, awsSecretKey string) {
	auth := aws.Auth{AccessKey: awsAccessKey, SecretKey: awsSecretKey}
	s := s3.New(auth, aws.USWest2)
	bucket := s.Bucket("neroimages")
	error := bucket.Put(filename, file, contentType, s3.PublicRead, s3.Options{})
	fmt.Println(error)
}
