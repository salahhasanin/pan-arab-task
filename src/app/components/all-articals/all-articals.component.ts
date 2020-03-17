import { ArticalService } from "./../../services/artical.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Artical } from "src/app/models/artical.model";

@Component({
  selector: "app-all-articals",
  templateUrl: "./all-articals.component.html",
  styleUrls: ["./all-articals.component.css"]
})
export class AllArticalsComponent implements OnInit {
  allArticals;
  index;
  eachArtical;
  articalInfo: Artical;
  constructor(
    private articalServices: ArticalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.showAllArticals();
  }
  showAllArticals() {
    this.articalServices.getAllArticals().subscribe(res => {
      this.allArticals = res;
      this.eachArtical = this.allArticals.articles;
      // console.log(this.eachArtical);
    });
  }
  sendItem(title) {
    this.index = this.eachArtical.findIndex(x => x.title === title);
    this.articalInfo = {
      urlToImage: this.eachArtical[this.index].urlToImage,
      content: this.eachArtical[this.index].content,
      author: this.eachArtical[this.index].author,
      title: this.eachArtical[this.index].title,
      description: this.eachArtical[this.index].description,
      url: this.eachArtical[this.index].url,
      publishedAt: this.eachArtical[this.index].publishedAt
    };
    this.articalServices.setArtical(this.articalInfo);
    this.articalServices.changeMessage(this.eachArtical[this.index]);
    this.router.navigate(["/artical"]);
  }
}
