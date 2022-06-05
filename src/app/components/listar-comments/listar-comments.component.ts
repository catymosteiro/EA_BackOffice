import { Component, OnInit, ViewChild } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/service/comment.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-listar-comments',
  templateUrl: './listar-comments.component.html',
  styleUrls: ['./listar-comments.component.css']
})
export class ListarCommentComponent implements OnInit {
  listComments: Comment[] = [];
  dataSource = new MatTableDataSource(this.listComments);
  displayedColumns: string[] = [
    '_id',
    'user',
    'title',
    'text',
    'type',
    'users',
    'likes',
    'dislikes',
    'actions',
  ];

  constructor(
    private _commentService: CommentService,
    private toastr: ToastrService) { }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getComments();
  }

  getComments() {
    this._commentService.getComments().subscribe(
      (data) => {
        console.log(data);
        this.listComments = data;
        this.dataSource = new MatTableDataSource(this.listComments);
        this.dataSource.paginator = this.paginator;
      }, (error: any) => {
        console.log(error);
      })
  }

  deleteComment(_id: any) {
    this._commentService.deleteComment(_id).subscribe((data: Object) => {
      this.toastr.error('The comment has been deleted', 'Comment deleted');
      this.getComments();
    }, (error: any) => {
      console.log(error);
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
