import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CommentService } from '../../service/comment.service';
import { Comment } from '../../models/comment';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-crear-comment',
  templateUrl: './crear-comment.component.html',
  styleUrls: ['./crear-comment.component.css']
})
export class CrearCommentComponent implements OnInit {
  commentForm: FormGroup;
  title = 'CREAR COMMENT';
  _id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _commentService: CommentService,
    private aRouter: ActivatedRoute,
  ) {
    this.commentForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      user: ['', Validators.required], 
      type: ['', Validators.required], 
      users: [''],
      likes: [''],
      dislikes: [''],
    });

    this._id = this.aRouter.snapshot.paramMap.get('_id');

  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void {
    this.editComment();
  }


  addComment() {
    const comment: Comment = {
      user: this.commentForm.get('user')?.value,
      title: this.commentForm.get('title')?.value,
      text: this.commentForm.get('text')?.value,
      type: this.commentForm.get('type')?.value,
      users: this.commentForm.get('users')?.value,
      likes: this.commentForm.get('likes')?.value,
      dislikes: this.commentForm.get('dislikes')?.value,
    };

    if (this._id !== null) {
      this._commentService.editComment(this._id, comment).subscribe(
        (data) => {
          this.toastr.info('El comentari ha estat editat amb exit!', 'Comentari editat');
          this.router.navigate(['/listar-comments']);
        },
        (error) => {
          console.log(error);
          this.commentForm.reset();
        }
      );
    } else {
      console.log(comment);
      this._commentService.addComment(comment).subscribe(
        (data) => {
          this.toastr.success('El comentari ha estat creat amb exit!', 'Comentari creat');
          this.router.navigate(['/listar-comments']);
        },
        (error) => {
          console.log(error);
          this.commentForm.reset();
        }
      );
    }
  }

  editComment() {
    if (this._id !== null) {
      this.title = 'Edit comment';
      this._commentService.getComment(this._id).subscribe((data) => {
        console.log(data);
        this.commentForm.setValue({
          user: data.user,
          title: data.title,
          text: data.text,
          type: data.type,
          users: data.users,
          likes: data.likes,
          dislikes: data.dislikes
        });
      });
    }
  }
}
