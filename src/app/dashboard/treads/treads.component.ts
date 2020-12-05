import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/login/auth.service';
import { ApiService } from 'src/app/other/services/api.service';
import { Thread } from '../../other/models/thread'

@Component({
  selector: 'app-treads',
  templateUrl: './treads.component.html',
  styleUrls: ['./treads.component.css']
})
export class TreadsComponent implements OnInit {

  threadData: Thread[] = [];
  userInfo;
  securities: any = [];
  threads: any = [];
  constructor(private api: ApiService, private auth: AuthService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getUserInfo();
    this.getThreads();
    setInterval(() => {
      this.getUserInfo();
    }, 2*60*1000);
  }

  getUserInfo() {
    this.api.getUserInfo().subscribe((data) => {
      this.userInfo = data.Data;
    }, err => {
      if (err.status == 401) {
        this.refreshToken();
      }
    })
  }

  getThreads() {
    this.spinner.show();
    this.api.getAllThreads().subscribe((data) => {
      this.threadData = data.Data;
      this.threadData.filter((thread: any) => {
        thread.SecurityRequirements.filter((item) => {
          this.securities.push(item);
        });
      });
      this.spinner.hide();
    })
  }

  getSecurityThread(id) {
    this.threads = [];
    this.threadData.filter((thread: any) => {
      thread.SecurityRequirements.filter((item) => {
        if (item.Id === id) {
          if (!this.threads.includes(thread.ThreatName)) {
            this.threads.push(thread.ThreatName)
          }
        }
      })
    })
  }

  async refreshToken() {
    await this.auth.refreshToken().subscribe((res) => {
      localStorage.setItem('access_token', res.access_token);
      localStorage.setItem('expires_in', res.expires_in);
      localStorage.setItem('refresh_token', res.refresh_token);
    })
  }

  logout() {
    this.auth.logout();
  }
}
