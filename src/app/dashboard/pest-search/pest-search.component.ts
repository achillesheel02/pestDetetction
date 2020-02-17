import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-pest-search',
  templateUrl: './pest-search.component.html',
  styleUrls: ['./pest-search.component.css']
})
export class PestSearchComponent implements OnInit {
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  private wrongFileType = false;
  private model: any;
  private predictions = [];
  private progress = false;
  private showResults = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  preview() {
    // Show preview
    // tslint:disable-next-line:prefer-const
    let mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      this.wrongFileType = true;
      return;
    } else {
      this.wrongFileType = false;
      // tslint:disable-next-line:prefer-const
      let reader = new FileReader();
      reader.readAsDataURL(this.fileData);
      // tslint:disable-next-line:variable-name
      reader.onload = (_event) => {
        this.previewUrl = reader.result;
      };
    }
  }

  fileProgress(fileInput: any) {
    this.fileData = fileInput.target.files[0] as File;
    this.preview();
  }

  onSubmit() {
    this.showResults = false;
    this.progress = true;
    const img = document.getElementsByTagName('img')[0];
    tf.engine().startScope();
    this.loadModel()
      .then(() => {
        console.log('Model loaded successfully.');
      })
      .catch((err) => {
        console.log(err);
      });
    tf.engine().endScope();
    this.getFeatureVectors(img)
      .then((features) => {
        this.predict(features)
          .then(() => {
            this.progress = false;
            console.log(this.predictions);
            this.showResults = true;
          });
      });

  }


  async loadModel() {
    this.model = await tf.loadLayersModel('../assets/tfjs/model.json');
    console.log(this.model);
  }

  async getFeatureVectors(imageData: HTMLImageElement) {
    tf.engine().startScope();
    const model = await tf.loadLayersModel('../assets/gfv/model.json');
    tf.engine().endScope();
    let img = tf.browser.fromPixels(imageData);
    img =  tf.image.resizeBilinear(img, [224, 224]);
    img = tf.cast(img, 'float32');
    const t4d = tf.tensor4d(Array.from(img.dataSync()), [1, 224, 224, 3]);
    const featureVecs =  model.predict(t4d);

    return featureVecs;
  }

  async predict(imageData) {
    await tf.tidy(() => {
      const output = this.model.predict(imageData) as any;
      // Save predictions on the component
      this.predictions = Array.from(output.dataSync());
    });

  }
}
