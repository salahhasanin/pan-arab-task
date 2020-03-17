import { ArticalService } from "./../../services/artical.service";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Artical } from "src/app/models/artical.model";
import { Comment } from "src/app/models/comments.model";

@Component({
  selector: "app-each-artical",
  templateUrl: "./each-artical.component.html",
  styleUrls: ["./each-artical.component.css"]
})
export class EachArticalComponent implements OnInit {
  joinform: FormGroup;
  commentForm: FormGroup;
  submitted = false;
  submittedComment = false;
  specificArtical;
  commentList: Array<Comment> = [];
  articalInfo: Artical = {
    urlToImage: "",
    content: "",
    author: "",
    title: "",
    description: "",
    url: "",
    publishedAt: ""
  };
  constructor(
    private articalServices: ArticalService,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.joinform = this.fb.group({
      fullName: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50),
          Validators.pattern(/^[a-zA-Z\s]*$/)
        ]
      ],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
        ]
      ],
      message: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)
        ]
      ]
    });
    this.commentForm = this.fb.group({
      msg: [
        "",
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)
        ]
      ]
    });
    this.articalInfo = this.articalServices.getArtical();
    // console.log(this.articalInfo);

    this.articalServices.currentArtical.subscribe(res => {
      this.specificArtical = res;

      // console.log(this.specificArtical);
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.joinform.invalid) {
      return false;
    } else {
      this.articalServices.postMessage(this.joinform.value);
      this.joinform.reset();
      // .subscribe(res => {
      //   this.joinform.reset();
      // });
    }
  }

  onSubmitComment() {
    this.submittedComment = true;
    if (this.commentForm.invalid) {
      return false;
    } else {
      this.commentList.push(this.commentForm.value);
      this.commentForm.reset();

      // console.log(this.commentList);
    }
  }
}
