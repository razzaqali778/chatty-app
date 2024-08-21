import cloudinary, { UploadApiResponse, UploadApiErrorResponse } from 'cloudinary';

export function upload(file: string, public_id?: string, overwrite?: boolean, invalidate?: boolean): Promise<UploadApiResponse> {
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader.upload(
      file,
      {
        public_id,
        overwrite,
        invalidate
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error) {
          reject(error);
        } else {
          resolve(result as UploadApiResponse);
        }
      }
    );
  });
}
