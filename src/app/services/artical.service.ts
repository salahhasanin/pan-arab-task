import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from, BehaviorSubject } from "rxjs";
import { Artical } from "../models/artical.model";
import { Message } from "../models/message.model";

@Injectable({
  providedIn: "root"
})
export class ArticalService {
  private articalSource = new BehaviorSubject({});
  currentArtical = this.articalSource.asObservable();
  constructor(private http: HttpClient) {}

  getAllArticals() {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4"
    );
  }

  changeMessage(artical: object) {
    this.articalSource.next(artical);
  }

  articalInfo: Artical = {
    urlToImage: "",
    content: "",
    author: "",
    title: "",
    description: "",
    url: "",
    publishedAt: ""
  };
  getArtical() {
    // console.log(this.articalInfo);
    return this.articalInfo;
  }
  setArtical(result: Artical) {
    this.articalInfo = result;
  }

  postMessage(message: Message) {
    // return this.http.post("...", message);
    console.log(message);
  }
}
