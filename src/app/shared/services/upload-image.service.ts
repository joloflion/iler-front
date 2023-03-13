import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { UploadTaskSnapshot } from '@angular/fire/compat/storage/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private storage: AngularFireStorage) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }

  uploadToFirestore(file: File, path: string): Observable<UploadTaskSnapshot | undefined> {
    const ref = this.storage.ref(path);
    const task = ref.put(file);

    return task.snapshotChanges().pipe(
      finalize(() => {
        const downloadURL = ref.getDownloadURL();
        return downloadURL;
      })
    );
  }
}
