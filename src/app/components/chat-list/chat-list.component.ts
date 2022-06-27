import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Chat } from 'src/app/models/chat';
import { User } from 'src/app/models/user';
import { MatTableDataSource } from '@angular/material/table';
import { ChatService } from 'src/app/service/chat.service';
import { UserService } from 'src/app/service/user.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
})
export class ChatListComponent implements OnInit {
  listChats: Chat[] = [];
  dataSource = new MatTableDataSource(this.listChats);
  displayedColumns: string[] = ['_id', 'name', 'participants', 'actions'];

  id: string | null = null;

  constructor(
    private _chatService: ChatService,
    private _userService: UserService,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute
  ) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getChats();
  }

  getChats() {
    if (!this.id) {
      this._chatService.getChats().subscribe(
        (data) => {
          console.log({ Chats: data });
          this.listChats = data;
          this.dataSource = new MatTableDataSource(this.listChats);
          this.dataSource.paginator = this.paginator;
        },
        (error) => console.log(error)
      );
      return;
    }

    this._userService.getUser(this.id).subscribe(
      (data) => {
        this.listChats = data.chats;
        this.dataSource = new MatTableDataSource(this.listChats);
        this.dataSource.paginator = this.paginator;
      },
      (error) => console.log(error)
    );
  }

  deleteChat(chatId: string) {
    this._chatService.deleteChat(chatId).subscribe((data: any) => {
      this.toastr.success('Deleted Chat');
      this.getChats();
    });
  }

  parseMembers(chat: Chat): String {
    const user_names = chat.users.map((el: User) => el.name);
    return user_names.join(', ');
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
