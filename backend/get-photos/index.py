import json
import os
import boto3


def handler(event: dict, context) -> dict:
    """Получение списка фото гостей из S3 папки guest-photos/."""
    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors, "body": ""}

    s3 = boto3.client(
        "s3",
        endpoint_url="https://bucket.poehali.dev",
        aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
        aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
    )

    response = s3.list_objects_v2(Bucket="files", Prefix="guest-photos/")
    items = response.get("Contents", [])

    access_key = os.environ["AWS_ACCESS_KEY_ID"]
    photos = []
    for obj in items:
        key = obj["Key"]
        if key == "guest-photos/":
            continue
        url = f"https://cdn.poehali.dev/projects/{access_key}/bucket/{key}"
        photos.append({"url": url, "key": key, "size": obj["Size"], "lastModified": obj["LastModified"].isoformat()})

    photos.sort(key=lambda x: x["lastModified"], reverse=True)

    return {
        "statusCode": 200,
        "headers": cors,
        "body": json.dumps({"photos": photos}),
    }
