import json
import os
import base64
import uuid
import boto3
from datetime import datetime


def handler(event: dict, context) -> dict:
    """Загрузка фото с юбилея в S3. Принимает base64-изображение, сохраняет в папку guest-photos/."""
    cors = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors, "body": ""}

    try:
        body = json.loads(event.get("body") or "{}")
        image_data = body.get("image")
        file_name = body.get("fileName", "photo.jpg")
        content_type = body.get("contentType", "image/jpeg")

        if not image_data:
            return {"statusCode": 400, "headers": cors, "body": json.dumps({"error": "image is required"})}

        if "," in image_data:
            image_data = image_data.split(",", 1)[1]

        image_bytes = base64.b64decode(image_data)

        ext = file_name.rsplit(".", 1)[-1].lower() if "." in file_name else "jpg"
        key = f"guest-photos/{datetime.utcnow().strftime('%Y%m%d')}_{uuid.uuid4().hex[:8]}.{ext}"

        s3 = boto3.client(
            "s3",
            endpoint_url="https://bucket.poehali.dev",
            aws_access_key_id=os.environ["AWS_ACCESS_KEY_ID"],
            aws_secret_access_key=os.environ["AWS_SECRET_ACCESS_KEY"],
        )

        s3.put_object(
            Bucket="files",
            Key=key,
            Body=image_bytes,
            ContentType=content_type,
        )

        cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/bucket/{key}"

        return {
            "statusCode": 200,
            "headers": cors,
            "body": json.dumps({"url": cdn_url, "key": key}),
        }

    except Exception as e:
        return {"statusCode": 500, "headers": cors, "body": json.dumps({"error": str(e)})}
